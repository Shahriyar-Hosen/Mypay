import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines multiple class names into a single string,
 * using `clsx` to concatenate and `tailwind-merge` to ensure correct Tailwind CSS merging.
 *
 * @param {...ClassValue[]} inputs - A list of class name inputs to be combined.
 * @returns {string} - A single string of combined class names, merged for Tailwind CSS.
 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
