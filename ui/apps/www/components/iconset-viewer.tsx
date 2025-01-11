'use client';

import React from "react";
import { getIcons } from "@/hooks/use-icons";
import Icon from "./icon";
import { IconDetailModal } from "./icondetailmodal";

export interface IconSetViewerProps {
  iconSet: string;
}

export function IconSetViewer(props: IconSetViewerProps) {
  const [icons, setIcons] = React.useState<{
    [name: string]: React.ComponentType;
  }>();
  React.useEffect(() => {
    getIcons(props.iconSet).then((icons) => {
      setIcons(icons);
    });
  }, []);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <>
      {/* <IconDetailModal
        iconSet={props.iconSet}
        iconName={selected}
        component={selected ? icons?.[selected] : undefined}
        onClose={() => setSelected(null)}
      /> */}
      {/* <h2>Icons...</h2> */}
      {icons && (
        <div className="grid grid-cols-5 place-items-stretch gap-8 p-4">
          {Object.keys(icons).map((name) => {
            const Component = icons[name];
            if (!Component) {
              return null;
            }
            return (
              <Icon
                key={name}
                iconSet={props.iconSet}
                iconName={name}
                component={Component}
                onSelect={(icon) => setSelected(icon)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
