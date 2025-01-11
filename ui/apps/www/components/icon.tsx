import React from "react";
import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import { Copy, Download } from "lucide-react";

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
    <div className="flex h-[150px] flex-col items-center justify-center rounded-md border" tabIndex={0} onClick={copyToClipboard}>
      <div className="icon flex h-full w-full flex-col items-center justify-center gap-2">
        <Component />
        <span className="text-sm font-medium">{props.iconName}</span>
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
