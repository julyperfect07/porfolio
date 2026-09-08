import Link from "next/link";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="border-b border-border">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-10"
      >
        <Link
          href="/"
          aria-label="Abdallah.dev home"
          className="rounded-sm text-xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Abdallah<span className="text-primary">.dev</span>
        </Link>

        <ul className="flex items-center gap-5 text-sm text-muted-foreground sm:gap-7">
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
