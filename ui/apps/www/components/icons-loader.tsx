'use client';

import React, { useEffect, useState } from 'react';
import { IconsManifest } from 'react-icons';
import { getIcons } from '@/hooks/use-icons';

interface IconSetData {
  manifest: typeof IconsManifest[0];
  count: number;
  samples: React.ComponentType[];
}

export function IconList(): React.ReactElement {
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
    <div className="include-icon-sets">
      <div className="content">
        {iconSets.map(({ manifest, count, samples }) => (
          <a
            key={manifest.id}
            className="icon-set"
            href={`/icons/${manifest.id}/`}
          >
            <div className="name">{manifest.name}</div>
            <div className="describe">
              <span className="counts">{count} icons</span>
            </div>
            <div className="samples">
              <div className="box">
                {samples.map((Component, i) => (
                  <Component key={i} />
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

