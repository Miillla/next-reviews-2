import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <NavLink
            href="/"
            className=" font-bold font-orbitron text-orange-800 hover:underline"
          >
            Indie Gamer
          </NavLink>
        </li>
        <li className="ml-auto">
          <NavLink href="/reviews" className="text-orange-800 hover:underline">
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/about"
            prefetch={false}
            className="text-orange-800
            hover:underline"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
