import { ChevronRight } from "lucide-react";

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 md:mb-6 fade-in overflow-x-auto whitespace-nowrap pb-2 flex items-center space-x-2 text-xs xl:text-lg text-muted-foreground"
    >
      <a href="/" className="hover:text-foreground transition-colors">
        Home
      </a>
      <ChevronRight size={16} />
      <a href="/courses" className="hover:text-foreground transition-colors">
        Courses
      </a>
      <ChevronRight size={16} />
      <span className="text-foreground">Course Details</span>
    </nav>
  );
}

export default Breadcrumbs;
