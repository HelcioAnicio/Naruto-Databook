import Link from "next/link";
import { LinksHeader } from "@/app/types/linksHeader";

export const Menu = () => {
  const links = LinksHeader();
  return (
    <menu className="absolute top-0 right-0 z-10 flex h-150 w-screen max-w-xs gap-2 bg-white lg:hidden">
      <ul className="flex flex-col gap-5 uppercase">
        {links.map((link, index) => (
          <li className="font-light" key={index}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </menu>
  );
};
