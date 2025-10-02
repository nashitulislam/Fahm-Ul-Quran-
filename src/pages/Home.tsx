import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Star } from 'lucide-react';

const Home = () => {
  const courses = [
    {
      title: 'قرآن مجید',
      description: 'Learn to read the Quran with proper Tajweed',
      duration: '6 months',
      buttonText: 'Learn More →'
    },
    {
      title: 'حفظ القرآن',
      description: 'Memorize the Holy Quran with guidance',
      duration: '2-3 years',
      buttonText: 'Learn More →'
    },
    {
      title: 'تجوید القرآن',
      description: 'Master the rules of Quranic recitation',
      duration: '3 months',
      buttonText: 'Learn More →'
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Understanding of the Quran',
      description: 'The best way to gain an easy and complete understanding of the Holy Quran.'
    },
    {
      icon: Users,
      title: 'Experienced Teachers',
      description: 'Learn from highly trained and experienced teachers.'
    },
    {
      icon: Award,
      title: 'Accredited Diploma',
      description: 'An accredited Islamic diploma that benefits your future.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient islamic-pattern py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-primary-foreground">
            <h1 className="font-arabic text-5xl md:text-7xl font-bold mb-6">
              فہم القرآن
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FAHM-UL-QURAN
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              "He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Principal Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Founder of Fahm-ul-Quran</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="card-shadow">
                <CardContent className="p-8">
                  <h3 className="font-arabic text-2xl font-bold text-primary mb-2">
                    علامہ مولانا مفتی محمد اشفاق سالک آبادی رحمانی
                  </h3>
                  <h4 className="text-xl font-semibold mb-4 text-muted-foreground">
                    Allama Maulana Mufti Muhammad Ashfaq Salikabadi Rehmani
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The supervision of the Fahm-ul-Quran Diploma Course and the Degree in Sharia program, along with Quran translation and tafseer programs, is under his guidance. His book <strong>“Rooh-Ul-Quran”</strong> is taught as a curriculum text in many madaris across Pakistan. He also serves as the Khateeb and Imam of Jamia Masjid Rehmania, E-4 Block 8, Gulshan-e-Iqbal, Karachi, where he delivers Quranic tafseer sermons every Friday.


                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg">25+ Years of Experience</h4>
                <p className="text-muted-foreground">In the Field of Quranic Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Key Features</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-shadow hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Register Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the Fahm-ul-Quran Diploma Course and complete your Islamic education.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/register">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
