import Link from "next/link";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full max-w-[100vw] overflow-x-clip border-b border-border">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-10 sm:py-5"
      >
        <Link
          href="/"
          aria-label="Abdallah.dev home"
          className="shrink-0 rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-xl"
        >
          Abdallah<span className="text-primary">.dev</span>
        </Link>

        <ul className="flex items-center gap-3 text-xs text-muted-foreground min-[375px]:gap-4 sm:gap-7 sm:text-sm">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-sm transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
