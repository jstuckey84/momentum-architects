const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-foreground font-bold tracking-tight text-lg">CLARITY OPS</p>
          <p className="text-muted-foreground text-sm mt-1">Operational Advisory & Execution</p>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#packages" className="hover:text-primary transition-colors">Packages</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="mailto:hello@clarityops.com" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-muted-foreground text-xs">
          © 2026 Clarity Ops. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
