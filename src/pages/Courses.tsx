import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Award, Star } from 'lucide-react';

const Courses = () => {
  const mainCourse = {
    title: 'Fahm Ul Quran Diploma Course',
    arabicTitle: 'فہم القرآن ڈپلومہ کورس ',
    duration: '15 Months',
    mode: 'Online & Offline',
    level: 'Beginner to Advanced',
    description: 'Learn a complete understanding and translation of the Holy Quran in this comprehensive diploma course.',
    features: [
      'Complete Quran Translation',
      'Tafseer aur Tashreeh',
      'Arabic Grammar Basics',
      'Hadees, Islami Fiqh, Seerat-un-Nabi ﷺ',
      'Islamic Inheritance laws etc.',
      'Certificate upon Completion'
    ],
    price: 'Pay able Fee',
    installments: 'Monthly Pay able Fee'
  };

  const otherCourses = [
    {
      title: 'Basic Islamic Studies',
      arabicTitle: 'بنیادی اسلامی تعلیمات',
      duration: '5 Months',
      description: 'For Islamic Aqaid and Basic Knowledge',
      price: 'Pay able Fee'
    },
    {
      title: 'Hadees Study Program',
      arabicTitle: 'حدیث شریف کا مطالعہ',
      duration: '1 Year',
      description: 'Teachings and Understanding of Sahih Hadith',
      price: 'Pay able Fee'
    },
    {
      title: 'Islamic Jurisprudence (Fiqh)',
      arabicTitle: 'فقہ اسلامی',
      duration: '1 Year',
      description: 'Islamic law and practical guidance',
      price: 'Pay able Fee'
    },
    {
      title: 'Tajweed & Qirat',
      arabicTitle: 'تجوید اور قرأت',
      duration: '1 Year',
      description: 'Learn Correct Quranic Recitation',
      price: 'Pay able Fee'
    },
    {
      title: 'Dars-e-Nizami',
      arabicTitle: 'درس نظامی',
      duration: '4 Years',
      description: 'Learn correct recitation and fundamentals of Quranic studies.',
      price: 'Pay able Fee'
    },
    {
      title: 'Hifz-e-Quran (Selected Surahs)',
      arabicTitle: 'حفظ قرآن (منتخب سورہ)',
      duration: '1 Year',
      description: 'Memorize selected Surahs and learn proper recitation.',
      price: 'Pay able Fee'
    },
    {
      title: 'Aqaid Course',
      arabicTitle: 'عقائد کورس',
      duration: '5 Months',
      description: 'Gain basic knowledge of Islamic beliefs and creed.',
      price: 'Pay able Fee'
    },
        {
      title: 'Seerat Course',
      arabicTitle: 'سیرت کورس',
      duration: '5 Months',
      description: 'Learn the life, character, and teachings of Prophet Muhammad ﷺ.',
      price: 'Pay able Fee'
    },
        {
      title: 'Farz-ul-Uloom Course',
      arabicTitle: 'فرض العلوم کورس',
      duration: '5 Months',
    description: 'A concise course covering essential Islamic knowledge.',
      price: 'Pay able Fee'
    },    {
      title: 'Nazra Course',
      arabicTitle: 'نظرہ کورس',
      duration: '15 Months',
      description: 'Learn to read the Quran with correct pronunciation.',
      price: 'Pay able Fee'
    },
        {
      title: 'Adeeb Arabic',
      arabicTitle: 'ادیب عربی',
      duration: '1 Year',
      description: 'Learn Arabic literature and basic grammar.',
      price: 'Pay able Fee'
    },
        {
      title: 'Arabic Language Course',
      arabicTitle: 'عربی زبان کورس',
      duration: '15 Months',
      description: 'Master the Arabic language from basic to advanced level.',
      price: 'Pay able Fee'
    },    
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Comprehensive Islamic education programs tailored for modern learners
          </p>
        </div>
      </section>

      {/* Main Course - Fahm Ul Quran */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              FLAGSHIP PROGRAM
            </Badge>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {mainCourse.title}
            </h2>
            <p className="font-arabic text-2xl text-gold mb-2">
              {mainCourse.arabicTitle}
            </p>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow border-2 border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{mainCourse.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{mainCourse.mode}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>{mainCourse.level}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-lg text-center text-muted-foreground mb-8">
                  {mainCourse.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-primary">Course Features</h3>
                    <ul className="space-y-3">
                      {mainCourse.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Star className="w-4 h-4 text-gold fill-current" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="bg-muted/50 rounded-lg p-6 mb-6">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {mainCourse.price}
                      </div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Full Course Fee
                      </div>
                      <div className="text-lg text-secondary-foreground">
                        {mainCourse.installments}
                      </div>
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full mb-4" asChild>
                      <Link to="/register">Enroll Now</Link>
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      Limited seats available • Early bird discount till 15 Days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Other Islamic Courses</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCourses.map((course, index) => (
              <Card key={index} className="card-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{course.title}</CardTitle>
                  <p className="font-arabic text-lg text-gold">{course.arabicTitle}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{course.price}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/register">Join Course</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Courses?</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-shadow text-center">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Authentic Teaching</h3>
                <p className="text-muted-foreground">
                  Authentic Islamic Education in the Light of the Quran and Sunnah
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from Qualified and Experienced Islamic Scholars
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Certified Programs</h3>
                <p className="text-muted-foreground">
                  Recognized Certificates Validating Your Islamic Knowledge
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Islamic Journey?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have enhanced their Islamic knowledge through our courses
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/register">Register Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Courses;
