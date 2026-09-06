import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function ActionLink({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-3 rounded px-6 py-3 text-sm font-semibold transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryRed ${light ? "bg-white text-primary" : "bg-primary text-white"}`}
    >
      {children}
    </a>
  );
}

export function Bolt({ white = false }: { white?: boolean }) {
  return (
    <Image
      src={white ? "/icons/Vector2.svg" : "/icons/Vector1.svg"}
      alt=""
      width={white ? 19 : 14}
      height={white ? 24 : 18}
      aria-hidden="true"
    />
  );
}

export function BulletList({
  items,
  white = false,
}: {
  items: string[];
  white?: boolean;
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm leading-5">
          <Bolt white={white} />
          {item}
        </li>
      ))}
    </ul>
  );
}

type ShareLinkProps = {
  href: string;
  label: string;
  firstIconSrc?: string;
  secondIconSrc?: string;
  hasFirstIcon?: boolean;
  hasSecondIcon?: boolean;
  bgColor: string;
};

export function ShareLink({
  href,
  label,
  firstIconSrc,
  secondIconSrc,
  hasFirstIcon,
  hasSecondIcon,
  bgColor,
}: ShareLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded px-4 py-2 text-white w-41.75 h-12",
        bgColor ? bgColor : "bg-primary",
      )}
    >
      {hasFirstIcon && (
        <Image src={firstIconSrc ?? ""} width={32} height={32} alt="" />
      )}
      <span>{label}</span>
      {hasSecondIcon && (
        <Image src={secondIconSrc ?? ""} width={32} height={32} alt="" />
      )}
    </Link>
  );
}
