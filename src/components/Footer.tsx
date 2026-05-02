import logo from "@/assets/PDC_Logo_Stacked.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center gap-6">
          <img
            src={logo}
            alt="Process Dream Company"
            className="h-40 md:h-52 w-auto"
          />
          <div className="flex gap-8 text-sm text-muted-foreground">
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
