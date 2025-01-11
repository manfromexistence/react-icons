"use client"

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

export default function IndexPage() {
  const [iconSets, setIconSets] = useState<IconSetData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadIconSets() {
      const sortedManifest = [...IconsManifest].sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      const loadedSets = await Promise.all(
        sortedManifest.map(async (manifest) => {
          try {
            const components = await getIcons(manifest.id);
            const componentNames = Object.keys(components);
            const count = componentNames.length;

            // Sort and get sample components
            const sortedNames = [...componentNames].sort((a, b) =>
              a.localeCompare(b)
            );
            const sampleComponents = sortedNames
              .slice(0, 15)
              .map(name => components[name])
              .filter(Boolean) as React.ComponentType[];

            return {
              manifest,
              count,
              samples: sampleComponents,
            };
          } catch (error) {
            console.error(`Error loading icon set ${manifest.id}:`, error);
            return {
              manifest,
              count: 0,
              samples: [],
            };
          }
        })
      );

      setIconSets(loadedSets);
      setLoading(false);
    }

    loadIconSets();
  }, []);

  // if (loading) {
  //   return <div>Loading icon sets...</div>;
  // }

  return (
    <>
      {/* <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader> */}
      <div className="border-grid">
        <div className="container-wrapper">
          <div className="app-container">
            <div className="flex h-screen w-full">
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20}>
                  <ScrollArea className="h-full w-full p-4">
                    {/* {iconSets.map(({ manifest, count, samples }) => (
                      <Link
                        key={manifest.id}
                        className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3"
                        href={`/icons/${manifest.id}/`}
                      >
                        <span className="font-mono text-sm">{manifest.name}</span>
                        <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">{count}</span>
                      </Link>
                    ))} */}
                    <Link href="/icons/ai" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Ant Design Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">831</span>
                    </Link>
                    <Link href="/icons/bs" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Bootstrap Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2716</span>
                    </Link>
                    <Link href="/icons/bi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Boxicons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1634</span>
                    </Link>
                    <Link href="/icons/ci" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Circum Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">288</span>
                    </Link>
                    <Link href="/icons/cg" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">css.gg</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">704</span>
                    </Link>
                    <Link href="/icons/di" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Devicons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">192</span>
                    </Link>
                    <Link href="/icons/fa" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Font Awesome 4</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">287</span>
                    </Link>
                    <Link href="/icons/fa6" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Font Awesome 6</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">329</span>
                    </Link>
                    <Link href="/icons/fc" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Flat Color Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1611</span>
                    </Link>
                    <Link href="/icons/fi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Feather Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2048</span>
                    </Link>
                    <Link href="/icons/gi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Game Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4040</span>
                    </Link>
                    <Link href="/icons/go" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Go Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">264</span>
                    </Link>
                    <Link href="/icons/gr" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Grommet Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">635</span>
                    </Link>
                    <Link href="/icons/hi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Heroicons Outline</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">460</span>
                    </Link>
                    <Link href="/icons/hi2" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Heroicons Solid</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">972</span>
                    </Link>
                    <Link href="/icons/im" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Ionicons 4</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">491</span>
                    </Link>
                    <Link href="/icons/io" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Ionicons 5</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1544</span>
                    </Link>
                    <Link href="/icons/io5" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Ionicons 5</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">696</span>
                    </Link>
                    <Link href="/icons/lia" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Line Awesome</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1332</span>
                    </Link>
                    <Link href="/icons/lu" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Lucide</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1541</span>
                    </Link>
                    <Link href="/icons/md" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Material Design Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4314</span>
                    </Link>
                    <Link href="/icons/md" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Phosphor Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">9072</span>
                    </Link>
                    <Link href="/icons/pi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Radix Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">318</span>
                    </Link>
                    <Link href="/icons/ri" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Remix Icon</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3020</span>
                    </Link>
                    <Link href="/icons/rx" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Simple Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3275</span>
                    </Link>
                    <Link href="/icons/si" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Simple Line Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">189</span>
                    </Link>
                    <Link href="/icons/sl" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Tabler Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">5754</span>
                    </Link>
                    <Link href="/icons/tb" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Themify Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">352</span>
                    </Link>
                    <Link href="/icons/tfi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">Typicons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">336</span>
                    </Link>
                    <Link href="/icons/vsc" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                      <span className="font-mono text-sm">VS Code Icons</span>
                      <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">446</span>
                    </Link>
                    <Link href="/icons/wi" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
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
                    <div className="mb-24">
                      <div className="grid grid-cols-4 place-items-center gap-4 p-4">
                        {iconSets.map(({ manifest, count, samples }) => (
                          <Link
                            key={manifest.id}
                            className="hover:bg-primary-foreground flex w-[285px] flex-col space-y-2 rounded-md border p-4"
                            href={`/icons/${manifest.id}/`}
                          >
                            <div className="text-sm ">{manifest.name}</div>
                            <div className="rounded-md border p-1">
                              <div className="grid grid-cols-5 grid-rows-3 place-items-center gap-2 py-2">
                                {samples.map((Component, i) => (
                                  <Component key={i} />
                                ))}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* <div className="flex h-16 w-16 items-center justify-center rounded-md border">
                      <Plus className="h-5 w-5" />
                    </div> */}
                    {/* <IconSetViewer iconSet={"ai"} /> */}
                    {/* <IconList />
                    <SearchInput />
                    <SearchPageComponent /> */}
                  </ScrollArea>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
            {/* <ExamplesNav className="[&>a:first-child]:text-primary" /> */}
          </div>
        </div>
      </div>
      {/* <div className="container-wrapper">
        <div className="container py-6">
          <section className="bg-background overflow-hidden rounded-lg border shadow-md md:hidden md:shadow-xl">
            <Image
              src="/examples/cards-light.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="block dark:hidden"
            />
            <Image
              src="/examples/cards-dark.png"
              width={1280}
              height={1214}
              alt="Cards"
              className="hidden dark:block"
            />
          </section>
          <section className="hidden md:block [&>div]:p-0">
            <CardsDemo />
          </section>
        </div>
      </div> */}
    </>
  )
}
