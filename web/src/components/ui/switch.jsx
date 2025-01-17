"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { IoSunny, IoMoon } from "react-icons/io5"; // Ícones do sol e da lua

import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform duration-300 ease-in-out data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 flex items-center justify-center"
      )}
    >
      {/* Ícone do Sol (aparece no tema claro) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-yellow-500 opacity-100 dark:opacity-0 text-sm transition-opacity duration-300 ease-in-out">
        <IoSunny />
      </div>

      {/* Ícone da Lua (aparece no tema escuro) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-blue-700 opacity-0 dark:opacity-100 text-sm transition-opacity duration-300 ease-in-out">
        <IoMoon />
      </div>
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
