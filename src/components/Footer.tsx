
import { Link } from "react-router-dom";
import { Cpu, Database } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 py-10 px-6 border-t border-border/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-xl mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              Processimo
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Empowering businesses with intelligent automation solutions to streamline workflows, increase efficiency, and drive digital transformation.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <Database className="h-4 w-4" />
              Subscribe
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Stay up to date with our latest posts and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-l-md px-4 py-2 text-sm bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground rounded-r-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Processimo. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
