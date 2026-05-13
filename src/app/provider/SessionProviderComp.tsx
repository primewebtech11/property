"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function SessionProviderComp({
  children,
  session = null,
}: {
  children: React.ReactNode;
  session?: any;
}) {
  return (
    <>
      <SessionProvider session={session}>{children}</SessionProvider>
    </>
  );
}
