import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for formsubmit.co
    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('subject', formData.subject);
    data.append('message', formData.message);
    data.append('_subject', 'New Contact Form Submission - Fahm Ul Quran');
    data.append('_captcha', 'false');
    data.append('_next', 'https://yourwebsite.com/thank-you');

    // Send to formsubmit.co
    try {
      const response = await fetch('https://formsubmit.co/ashfaq.sr1974@gmail.com', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: 'Your message has been successfully sent to Fahm Ul Quran.',
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      toast({
        title: 'Submission Error',
        description: 'Could not send your message. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Contact Us – We are here to assist you in every way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          Jamia Masjid Rehmania <br />
                          E-4 Block 8 Second Floor <br />
                          Department of Fahm Ul Quran <br />
                          Gulshan e iqbal karachi
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Phone Numbers</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Main Office: +92-322-3797262</p>
                          <p>Admission Cell: +92-322-3797262</p>
                          <p>WhatsApp: +92-343-2486038</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email Addresses</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>General: ashfaq.sr1974@gmail.com</p>
                          <p>Admissions: ashfaq.sr1974@gmail.com</p>
                          <p>Support: ashfaq.sr1974@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Saturday: 8:00 AM - 1:00 PM</p>
                          <p>Friday: 8:00 AM - 11:30 AM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-primary font-medium">Monday - Saturday 5:00PM - 9:00PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input 
                          type="text" 
                          name="name"
                          placeholder="Your Name..." 
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required 
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input 
                          type="tel" 
                          name="phone"
                          placeholder="+92-300-123-4567" 
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required 
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input 
                        type="email" 
                        name="email"
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required 
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input 
                        type="text" 
                        name="subject"
                        placeholder="Your Subject…" 
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required 
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea 
                        name="message"
                        placeholder="Write Your Message Here…" 
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required 
                        className="w-full min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Note:</strong> We will respond within 24 hours. For urgent matters, please call us directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Find Us on Map</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <Card className="card-shadow overflow-hidden">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Visit Our Campus</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our campus is located at Jamia Masjid Rehmania, E-4 Block 8, Second Floor, Department of Fahm-ul-Quran, Gulshan-e-Iqbal, Karachi. You can visit us directly or call in advance to schedule an appointment.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">How to Apply for Admission?</h3>
                <p className="text-muted-foreground">
                  To apply for admission, you can fill out the registration form on our website or visit our office directly to submit the form.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">What are the Class Timings?</h3>
                <p className="text-muted-foreground">
                  We offer flexible timings. Morning, evening, and weekend classes are available. Online classes are also offered.
                </p>
              </CardContent>
            </Card>

            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">What is the Fee Structure?</h3>
                <p className="text-muted-foreground">
                  Each course has a different fee. Monthly installment options are also available. For a detailed fee structure, please contact us.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;