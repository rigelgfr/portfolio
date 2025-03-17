"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function RightEmpty() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="none" side="left" className="border-r bg-gray-900 text-white h-screen flex items-center justify-center">
        <SidebarContent>
          <SidebarFooter />
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}