"use client";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import router from "next/router";
import { Button } from "./ui/button";

export function NavContact() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div>
          <Button variant="link" onClick={() => router.push("tel:7145090069")}>
            (714) 509-0069
          </Button>
        </div>
        <div>
          <Button
            variant="link"
            onClick={() => router.push("mailto:justin@iacafterschools.com")}
          >
            justin@iacafterschools.com
          </Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
