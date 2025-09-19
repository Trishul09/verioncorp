import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="glass-morphism rounded-2xl p-12 max-w-md mx-auto">
          <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-8 text-sm text-muted-foreground">
            The page you're looking for doesn't exist in our privacy-first architecture.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 gradient-primary px-6 py-3 rounded-lg text-primary-foreground font-medium hover:shadow-glow transition-smooth"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
