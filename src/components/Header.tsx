import type { ReactNode } from 'react';

interface HeaderProps {
  title?: ReactNode;
  right?: ReactNode;
  bgColor?: string;
}

export default function Header({ title, right, bgColor }: HeaderProps) {
  return (
    <header
      className="sticky top-[49px] z-900 flex h-[59px] w-[375px] justify-between gap-4 p-4"
      style={{ backgroundColor: bgColor }}
    >
      <span className="flex items-center text-[24px] font-semibold">{title}</span>
      <span className="flex gap-4">{right}</span>
    </header>
  );
}
