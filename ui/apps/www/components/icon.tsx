import React from "react";
import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import { Copy, Download } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/registry/new-york/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip"

export interface IconProps {
  component: React.ComponentType;
  iconName: string;
  iconSet?: string;
  highlightPattern?: RegExp | null;
  onSelect?(icon: string): void;
}
export default function Icon(props: IconProps) {
  if (!props) {
    return null;
  }
  const Component = props.component;
  if (!Component) {
    return null;
  }

  const copyToClipboard = () => {
    if (props.onSelect) {
      props.onSelect(props.iconName);
    } else {
      copy(props.iconName);
      toast.success(`Copied '${props.iconName}' to clipboard`, {
        position: "bottom-center",
      });
    }
  };

  const highlightedName = () => {
    const { highlightPattern } = props;
    if (highlightPattern) {
      return props.iconName
        .split(highlightPattern)
        .map((part, i) =>
          part.match(highlightPattern) ? <b key={i}>{part}</b> : part,
        );
    }
    return props.iconName;
  };

  return (
    <div className="hover:bg-primary-foreground flex flex-col items-center justify-center rounded-md border p-2">
      <div className="icon flex h-full w-full flex-col items-center justify-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Component />
            </TooltipTrigger>
            <TooltipContent>
              <p>{props.iconName}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* <HoverCard>
          <HoverCardTrigger asChild>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            {props.iconName}
          </HoverCardContent>
        </HoverCard> */}
        {/* <span className="text-sm font-medium">{props.iconName}</span> */}
      </div>
      {/* <div className="flex w-full space-x-2">
        <Copy className="h-5 w-5" />
        <Download className="h-5 w-5" />


      </div> */}
      {/* <div className="bg-primary-foreground rounded-full">
        {props.iconSet && `${props.iconSet} `}
        {highlightedName()}
      </div> */}
    </div>
  );
}

