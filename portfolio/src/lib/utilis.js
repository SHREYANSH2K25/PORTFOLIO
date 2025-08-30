// Import clsx → helps conditionally join class names
import { clsx } from "clsx";

// Import twMerge → intelligently resolves Tailwind class conflicts
import { twMerge } from "tailwind-merge";

/**
 * cn() = "class name" helper
 * - Takes any number of inputs (strings, objects, arrays)
 * - Uses clsx() to combine them safely with conditions
 * - Uses twMerge() to resolve Tailwind conflicts (e.g. "p-2 p-4" → "p-4")
 */
export const cn = (...inputs) => {
  // First clsx combines conditional classes into one string
  // Then twMerge cleans up duplicate/conflicting Tailwind classes
  return twMerge(clsx(inputs));
};
