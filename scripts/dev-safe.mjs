import fs from "node:fs";
import path from "node:path";
import { execSync, spawn, spawnSync } from "node:child_process";

function isRunningNextDevForWorkspaceProcess() {
  try {
    if (process.platform === "win32") {
      const workspace = process.cwd().replace(/\//g, "\\");
      const psScript = [
        `$workspace = ${JSON.stringify(workspace)}`,
        "$patternDev = \"*$workspace*next dev*\"",
        "$patternServer = \"*$workspace\\node_modules\\next\\dist\\server\\lib\\start-server.js*\"",
        "$match = Get-CimInstance Win32_Process | Where-Object {",
        "  $_.CommandLine -and",
        "  ($_.Name -eq 'node.exe' -or $_.Name -eq 'cmd.exe') -and",
        "  ($_.CommandLine -like $patternDev -or $_.CommandLine -like $patternServer)",
        "} | Select-Object -First 1",
        "if ($match) { Write-Output 'RUNNING' }",
      ].join("; ");

      const result = spawnSync("powershell", ["-NoProfile", "-Command", psScript], {
        encoding: "utf8",
      });

      const output = `${result.stdout ?? ""}${result.stderr ?? ""}`;
      return output.includes("RUNNING");
    }

    const cwd = process.cwd().replace(/"/g, '\\"');
    const output = execSync(`ps -ax -o command | grep \"next dev\" | grep \"${cwd}\" | grep -v grep`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();

    return output.length > 0;
  } catch {
    return false;
  }
}

function removeStaleLock() {
  const lockPath = path.join(process.cwd(), ".next", "dev", "lock");

  if (!fs.existsSync(lockPath)) {
    return;
  }

  try {
    fs.rmSync(lockPath, { force: true });
    console.log("Removed stale Next.js dev lock.");
  } catch {
    console.log("Could not remove lock file; continuing.");
  }
}

function startNextDev() {
  const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  const child = spawn(process.execPath, [nextBin, "dev"], {
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code) => {
    process.exit(code ?? 0);
  });
}

if (isRunningNextDevForWorkspaceProcess()) {
  console.log("Next.js dev server is already running for this workspace.");
  console.log("Skipping new dev start to avoid duplicate server/lock conflicts.");
} else {
  removeStaleLock();
  startNextDev();
}
