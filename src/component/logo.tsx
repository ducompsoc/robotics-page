import Image from "next/image";
import { cn } from "@/lib/utils";
import transparentDefault from "../asset/transparent_default.svg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={cn("w-[1em] h-[1em]", className)}
      src={transparentDefault}
      alt="Durham Robotics"
    />
  );
}
