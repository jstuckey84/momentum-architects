import logo from "@/assets/PD_symbol.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center gap-6">
          <img
            src={logo}
            alt="Process Dream Company"
            className="h-40 sm:h-52 md:h-64 lg:h-72 w-auto"
          />
          <div>
            <p className="text-foreground font-bold tracking-tight text-3xl md:text-4xl">
              PROCESS DREAM
            </p>
            <p className="text-muted-foreground text-sm md:text-base mt-2">
              Operational Advisory & Execution
            </p>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground pt-2">
            <a href="#packages" className="hover:text-primary transition-colors">
              Packages
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-4 text-center">
          <p className="text-muted-foreground/70 text-xs leading-relaxed max-w-4xl mx-auto">
            Process Dream Company provides operational process improvement services
            focused on execution, workflow, and operational risk. We do not provide
            financial, investment, legal, or regulatory advice.
          </p>
          <p className="text-muted-foreground text-xs">
            © 2026 Process Dream Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
