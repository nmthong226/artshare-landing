import { motion } from "framer-motion";

import { cn } from "../../lib/utils";
import { Badge } from "./badge";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
  discount?: boolean;
}

export function Tab({
  text,
  selected,
  setSelected,
  discount = false,
}: TabProps) {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative px-4 py-2 w-fit font-semibold text-sm capitalize",
        "text-foreground transition-colors",
        discount && "flex items-center justify-center gap-2.5"
      )}
    >
      <span className="z-10 relative">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="z-0 absolute inset-0 bg-background shadow-sm rounded-full"
        />
      )}
      {discount && (
        <Badge
          variant="secondary"
          className={cn(
            "z-10 relative shadow-none whitespace-nowrap",
            selected && "bg-muted"
          )}
        >
          Save 35%
        </Badge>
      )}
    </button>
  );
}
