"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { NavFooter } from "./NavFooter";
import { navBar } from "@/data/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function NavSidebar( { ...props }: React.ComponentProps<typeof Sidebar> ) {
  const [openItemKey, setOpenItemKey] = React.useState<string | null>( null );
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img src="/images/logo.png" alt="shirt logo" className="h-32 object-contain justify-start -ml-7" />
            <div className="grid flex-1 text-left text-sm leading-tight px-3">
              <p className="truncate font-extrabold">International Activities Club</p>
              <p className="truncate text-xs">Bringing Enrichment to Your School</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          title="General"
          items={navBar.navMain}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
        <NavMain
          title="Past & Future Work"
          items={navBar.works}
          openItemKey={openItemKey}
          setOpenItemKey={setOpenItemKey}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
