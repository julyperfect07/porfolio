import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground sm:px-10">
        <p>© {new Date().getFullYear()} Abdallah<span className="text-primary">.dev</span></p>
        <a href="#top" className="inline-flex min-h-11 items-center gap-2 rounded-sm transition-colors duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          Back to top <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </div>
    </footer>
  );
}
