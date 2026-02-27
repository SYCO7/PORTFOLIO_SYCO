"use client";

import dynamic from "next/dynamic";

const CyberBackdrop = dynamic(() => import("@/sections/CyberBackdrop"), {
  ssr: false,
});

export default function CyberBackdropClient() {
  return <CyberBackdrop />;
}