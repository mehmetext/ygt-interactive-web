import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSearchParams(
  obj: {
    [key: string]: string | null | undefined;
  },
  showSymbol?: boolean
): string {
  const params = Object.entries(obj)
    .filter(([key, value]) => value !== null && value !== undefined)
    .map(([key, val]) => `${key}=${encodeURIComponent(val as string)}`)
    .join("&");

  return params ? (showSymbol ? "?" : "") + params : "";
}

export const handleScrollClick = (
  e: React.MouseEvent<any, MouseEvent> | null,
  id: string
) => {
  if (e) e.preventDefault();

  const el: HTMLElement | null = document.getElementById(id);
  // const header: HTMLElement | null = document.getElementById("header");

  if (!el /* || !header */) return;

  window.scroll({
    top: el.offsetTop - 80 /* - header.offsetHeight */,
    behavior: "smooth",
  });
};
