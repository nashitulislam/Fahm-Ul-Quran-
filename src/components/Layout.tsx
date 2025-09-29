import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="font-arabic text-xl font-bold mb-4">فہم القرآن</h3>
              <p className="text-primary-foreground/80 text-sm">
                Deepen your understanding of the Holy Quran and gain comprehensive Islamic education with the Department of Fahm-ul-Quran. Learn from experienced instructors and build a strong foundation in Islamic studies.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+92 3212112762</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ashfaq.sr1974@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-7 h-7" />
                  <span>Jamia Masjid Rehmania E-4 Block 8 Second Floor Department of Fahm Ul Quran Gulshan e iqbal karachi</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61577936861519" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100068904622429" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/ashfaq.sr2014/" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
               <a href="https://www.youtube.com/channel/UCN5UNcXGdYModbNL7XHlerw" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                    <a href="https://www.youtube.com/channel/UCp5O5f7r-o3bPD70xl35FFg" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-light mt-8 pt-6 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Fahm Ul Quran.All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;