import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <Image src="" alt="Bijiji" />
          </Link>
        </li>
        <li>
          <input type="text" />
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
