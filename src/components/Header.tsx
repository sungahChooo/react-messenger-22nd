import type { ReactNode } from 'react';

interface HeaderProps {
  title?: ReactNode;
  right?: ReactNode;
}

export default function Header({ title, right }: HeaderProps) {
  return (
    <header className="bg-interit sticky top-[50px] flex h-[59px] w-[375px] justify-between gap-4 p-4 px-4">
      <span className="flex items-center text-[24px] font-semibold">{title}</span>
      <div className="flex gap-4">{right}</div>
    </header>
  );
}
