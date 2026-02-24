import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/PD_symbol.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Process Dream Company" className="h-8 w-auto" />
          <span className="text-foreground font-bold tracking-tight text-lg">PROCESS DREAM COMPANY</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#packages" className="hover:text-foreground transition-colors">Packages</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
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
          <a href="#packages" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground text-sm">Packages</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground text-sm">About</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground text-sm">Contact</a>
          <a href="mailto:hello@processdream.com" className="bg-primary text-primary-foreground px-5 py-2 rounded-sm font-semibold tracking-wide text-xs uppercase text-center">
            Get in Touch
          </a>
        </div>
      }
    </nav>);

};

export default Navbar;