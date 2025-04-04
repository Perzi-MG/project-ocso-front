'use client';
import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebar";
import { usePathname } from "next/navigation";
export default function LayoutDashboard({
  children,
  locations
}: {
  children: React.ReactNode;
  locations: React.ReactNode;
}) {
  const path = usePathname()
  return <div className="bg-orange-50">
    <Header />
    <div className="flex flex-row items-center">
      <Sidebar />
      {children}
      {path === "/dashboard" ? locations : null}
    </div>
  </div>;

}