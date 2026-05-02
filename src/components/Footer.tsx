import logo from "@/assets/PD_symbol.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Process Dream Company" className="h-8 w-auto" />
            <div>
              <p className="text-foreground font-bold tracking-tight text-lg">PROCESS DREAM</p>
              <p className="text-muted-foreground text-sm mt-0.5">Operational Advisory & Execution</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#packages" className="hover:text-primary transition-colors">Packages</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-muted-foreground text-xs">
            © 2026 Process Dream Company. All rights reserved.
          </p>
        </div>
        <p className="text-muted-foreground/70 text-xs leading-relaxed max-w-4xl mx-auto text-center border-t border-border pt-6">
          Process Dream Company provides operational process improvement services focused on
          execution, workflow, and operational risk. We do not provide financial,
          investment, legal, or regulatory advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
