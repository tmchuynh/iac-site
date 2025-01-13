"use client";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavFooter() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="text-center">
        <img
          src="/images/Tina_Huynh.png"
          alt="copyright-logo"
          className="w-1/2 py-2 mx-3"
        />
        <p className="text-xs">
          &copy; Tina Huynh 2023 - 2025 All Rights Reserved
        </p>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
