import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import { LinksHeader } from "@/app/types/linksHeader";

export const Header = () => {
  const links = LinksHeader();

  return (
    <header className="px-4 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />

        <ul className="hidden items-center justify-end gap-10 font-light uppercase lg:flex">
          {links.map((link, index) => (
            <li className="" key={index}>
              <Link href={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button className="lg:hidden">
          <MdMenu className="size-7" />
          {/* <Menu /> */}
        </button>
      </nav>
    </header>
  );
};
