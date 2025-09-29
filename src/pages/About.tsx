import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Successful Students' },
    { number: '25+', label: 'Islamic Courses' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Complete Information About Fahm-ul-Quran
          </p>
        </div>
      </section>

      {/* Principal Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About the Principal</h2>
              
              <Card className="card-shadow mb-8">
                <CardContent className="p-8">
                  <h3 className="font-arabic text-2xl font-bold text-primary mb-3">
                    علامہ مولانا مفتی محمد اشفاق سالک آبادی رحمانی
                  </h3>
                  <h4 className="text-xl font-semibold mb-4 text-muted-foreground">
                    Principal & Chief Instructor
                  </h4>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Allama Maulana Mufti Muhammad Ashfaq Salikabadi Rehmani belongs to a distinguished religious, spiritual, and scholarly family. His grandfather was Ghaus-ul-Zaman Hazrat Maulana Muhammad Barkatullah, Rehmatullahi Alaih, of Azad Kashmir. His father, Peer-e-Tariqat Al-Haaj Mian Muhammad Ishaq Barkati, Rehmatullahi Alaih, was a prominent religious, political, spiritual, and social figure.
                    </p>
                    
                    <p>
                       Allama Maulana Mufti Muhammad Ashfaq Salikabadi Rehmani began his education at home, continued Dars-e-Nizami at Zia-ul-Uloom Rawalpindi and Alimiya Institute of Islamic Studies Karachi, and studied Sahih al-Bukhari, Sahih Muslim, and Daurah Hadith at Jamia Naeemia Karachi under Allama Ghulam Rasool Saeedi (RA) and Mufti-e-Azam Pakistan Mufti Munib-ur-Rahman (DBA). He specialized in Fiqh at Darul Uloom Anwar-ul-Qadriya Karachi and completed courses in Imam training, Islamic law, and Quran & Hadith at International Islamic University Islamabad. He also holds a graduation and Master’s in Islamic Studies from University of Karachi.
                    </p>
                    
                    <p>
                      Since 1999, Allama Maulana Mufti Muhammad Ashfaq Salikabadi Rehmani has been associated with Halaqah Rehmani, teaching Quran translation and Dars-e-Quran under the supervision of Hazrat Sufi Abrar Ahmad Rehmani (RA). His book Rooh-ul-Quran is widely used as a curriculum in many madaris.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Qualifications */}
              <Card className="card-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-4 text-primary">Qualifications</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>Graduation & Master’s in Islamic Studies – University of Karachi</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <span>Specialist in Quranic Translation & Tafseer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>Dars-e-Nizami, Hadith & Fiqh Expertise</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-primary-foreground text-center">
                <BookOpen className="w-24 h-24 mx-auto mb-6 text-gold" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-primary-foreground/90">
                  "Providing every Muslim & Non Muslim the opportunity to gain authentic understanding of the Holy Quran and complete knowledge of Islamic beliefs."
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="card-shadow text-center">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Madarsa Rehmania Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Fahm Ul Quran </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      Tarjuma-e-Quran Ka Markaz
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      The Fahm-ul-Quran Diploma Course in Pakistan provides educational services for the translation and Tafseer of the Holy Quran. It combines modern teaching methods with traditional Islamic education.
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-3 text-primary">Key Features</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Understanding of the Quran in Urdu and Arabic</li>
                      <li>• Modern teaching techniques</li>
                      <li>• Experienced faculty members</li>
                      <li>• Flexible class timings</li>
                      <li>• Online aur offline classes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">
                      Vision & Values
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-semibold">Community Building</h5>
                          <p className="text-sm text-muted-foreground">
                            Islamic Education for the Betterment of the Ummah
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <BookOpen className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-semibold">Quality Education</h5>
                          <p className="text-sm text-muted-foreground">
                            Authentic and reliable Islamic knowledge
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Award className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h5 className="font-semibold">Excellence</h5>
                          <p className="text-sm text-muted-foreground">
                            Developing Islamic Values in Every Student
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;