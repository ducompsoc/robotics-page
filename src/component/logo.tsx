import Image from "next/image";
import { cn } from "@/lib/utils";
import transparent_default from "../asset/transparent_default.svg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      className={cn("w-[1em] h-[1em]", className)}
      src={transparent_default}
      alt="Durham Robotics"
    />
  );
}
