import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/PD_symbol.png";
import ThemeToggle from "@/components/ThemeToggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "where-i-focus", label: "Focus" },
  { id: "what-we-do", label: "What I Do" },
  { id: "packages", label: "Work With Me" },
  { id: "how-i-work", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const linkClass = (id: string, base: string, active: string) =>
    cn(base, activeId === id && active);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Process Dream Company" className="h-8 w-auto" />
          <span className="text-foreground font-bold tracking-tight text-lg">PROCESS DREAM COMPANY</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeId === link.id ? "true" : undefined}
              className={linkClass(
                link.id,
                "relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-primary after:transition-all after:duration-300 after:w-0",
                "text-foreground after:w-full"
              )}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="mailto:hello@processdream.com"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-sm font-semibold tracking-wide text-xs uppercase hover:opacity-90 transition-opacity">

            Get in Touch
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open &&
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-background">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              aria-current={activeId === link.id ? "true" : undefined}
              className={linkClass(
                link.id,
                "text-muted-foreground hover:text-foreground text-sm transition-colors",
                "text-foreground font-medium"
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Theme</span>
            <ThemeToggle />
          </div>
          <a href="mailto:hello@processdream.com" className="bg-primary text-primary-foreground px-5 py-2 rounded-sm font-semibold tracking-wide text-xs uppercase text-center">
            Get in Touch
          </a>
        </div>
      }
    </nav>);

};

export default Navbar;
