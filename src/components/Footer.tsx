import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="col-span-2">
          <h3 className="text-sm font-bold mb-2 font-heading">
            <span className="gradient-text">D-Code</span> Studio
          </h3>
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            A global digital design and development studio crafting experiences that connect, perform, and grow brands.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-wider mb-2 font-heading">Quick Links</h4>
          <div className="flex flex-col gap-1">
            {[{ label: "Home", href: "#" }, { label: "Services", href: "#services" }, { label: "Work", href: "#portfolio" }, { label: "Process", href: "#process" }, { label: "Blog", href: "#blog" }].map((l) => (
              <a key={l.label} href={l.href} className="text-[10px] text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-wider mb-2 font-heading">Contact</h4>
          <div className="flex flex-col gap-1.5 text-[10px] text-muted-foreground">
            <a href="mailto:hello@dcodewebstudio.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors"><Mail size={10} /> hello@dcodewebstudio.com</a>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-foreground transition-colors"><Phone size={10} /> +91 98765 43210</a>
            <div className="flex items-start gap-1.5"><MapPin size={10} className="mt-0.5 shrink-0" /> Ahmedabad, India</div>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-4 text-center text-[10px] text-muted-foreground">
        <span>© {new Date().getFullYear()} D-Code Studio. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
