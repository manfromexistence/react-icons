import { Input } from "@/registry/new-york/ui/input"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/new-york/ui/resizable"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import React, { useEffect, useState } from 'react';
import { IconsManifest } from 'react-icons';
import { getIcons } from '@/hooks/use-icons';
import Link from "next/link"

interface IconSetData {
  manifest: typeof IconsManifest[0];
  count: number;
  samples: React.ComponentType[];
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="border-grid">
      <div className="container-wrapper">
        <div className="app-container">
          <div className="flex h-screen w-full">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={20}>
                <ScrollArea className="h-full w-full p-4">
                  <Link href="/irons/ai" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Ant Design Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">831</span>
                  </Link>
                  <Link href="/irons/bs" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Bootstrap Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2716</span>
                  </Link>
                  <Link href="/irons/bi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Boxicons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1634</span>
                  </Link>
                  <Link href="/irons/ci" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Circum Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">288</span>
                  </Link>
                  <Link href="/irons/cg" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">css.gg</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">704</span>
                  </Link>
                  <Link href="/irons/di" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Devicons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">192</span>
                  </Link>
                  <Link href="/irons/fa" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Font Awesome 4</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">287</span>
                  </Link>
                  <Link href="/irons/fa6" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Font Awesome 6</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">329</span>
                  </Link>
                  <Link href="/irons/fc" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Flat Color Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1611</span>
                  </Link>
                  <Link href="/irons/fi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Feather Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2048</span>
                  </Link>
                  <Link href="/irons/gi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Game Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4040</span>
                  </Link>
                  <Link href="/irons/go" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Go Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">264</span>
                  </Link>
                  <Link href="/irons/gr" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Grommet Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">635</span>
                  </Link>
                  <Link href="/irons/hi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Heroicons Outline</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">460</span>
                  </Link>
                  <Link href="/irons/hi2" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Heroicons Solid</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">972</span>
                  </Link>
                  <Link href="/irons/im" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Ionicons 4</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">491</span>
                  </Link>
                  <Link href="/irons/io" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Ionicons 5</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1544</span>
                  </Link>
                  <Link href="/irons/io5" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Ionicons 5</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">696</span>
                  </Link>
                  <Link href="/irons/lia" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Line Awesome</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1332</span>
                  </Link>
                  <Link href="/irons/lu" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Lucide</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1541</span>
                  </Link>
                  <Link href="/irons/md" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Material Design Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4314</span>
                  </Link>
                  <Link href="/irons/md" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Phosphor Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">9072</span>
                  </Link>
                  <Link href="/irons/pi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Radix Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">318</span>
                  </Link>
                  <Link href="/irons/ri" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Remix Icon</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3020</span>
                  </Link>
                  <Link href="/irons/rx" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Simple Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3275</span>
                  </Link>
                  <Link href="/irons/si" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Simple Line Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">189</span>
                  </Link>
                  <Link href="/irons/sl" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Tabler Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">5754</span>
                  </Link>
                  <Link href="/irons/tb" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Themify Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">352</span>
                  </Link>
                  <Link href="/irons/tfi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Typicons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">336</span>
                  </Link>
                  <Link href="/irons/vsc" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">VS Code Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">446</span>
                  </Link>
                  <Link href="/irons/wi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">Weather Icons</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">219</span>
                  </Link>
                </ScrollArea>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={80}>
                <div className="relative h-16 w-full border-b">
                  <Input type="text" placeholder="Search Icons" className="placeholder:text-primary h-full w-full rounded-none border-0 ring-0 focus-visible:ring-0" />
                  <div className="absolute right-3 top-1/2 flex translate-y-[-50%] space-x-2">
                    <Select>
                      <SelectTrigger className="w-20 text-sm">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Icon Type</SelectLabel>
                          <SelectItem value="filled">Filled</SelectItem>
                          <SelectItem value="outlined">Outlined</SelectItem>
                          <SelectItem value="two-to-one">TwoToOne</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-32 text-sm">
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Search In</SelectLabel>
                          <SelectItem value="lucide-icons">Lucide Icons</SelectItem>
                          <SelectItem value="angular">Angular</SelectItem>
                          <SelectItem value="vue">Vue</SelectItem>
                          <SelectItem value="gastby">Gastby</SelectItem>
                          <SelectItem value="nue">Nue</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <ScrollArea className="h-full w-full">
                  {children}
                </ScrollArea>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
