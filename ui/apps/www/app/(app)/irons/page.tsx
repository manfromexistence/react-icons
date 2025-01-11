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

    if (loading) {
      return <div>Loading icon sets...</div>;
    }

    return (
        <>
            <div className="mb-24">
                <div className="grid grid-cols-4 place-items-center gap-4 p-4">
                    {iconSets.map(({ manifest, count, samples }) => (
                        <Link
                            key={manifest.id}
                            className="hover:bg-primary-foreground flex w-[285px] flex-col space-y-2 rounded-md border p-4"
                            href={`/irons/${manifest.id}/`}
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
        </>
    )
}
