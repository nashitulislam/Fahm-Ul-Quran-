import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-arabic text-lg font-bold text-primary">فہم القرآن</span>
              <span className="text-xs text-muted-foreground">Fahm Ul Quran</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-primary font-semibold bg-accent'
                    : 'text-foreground hover:text-primary hover:bg-accent'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild>
              <Link to="/register">Registration</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary font-semibold bg-accent'
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="hero" size="sm" className="mt-2 w-fit" asChild>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  Registration
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
  </motion.nav>
  );
};

export default Navigation;