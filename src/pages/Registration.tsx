import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, UserPlus } from 'lucide-react';
import IdCard from '@/components/IdCard';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface FormData {
  fullName: string;
  fatherName: string;
  email: string;
  phone: string;
  whatsapp: string;
  cnic: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  course: string;
  photo: File | null;
  studentId?: string;
}

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    fatherName: '',
    email: '',
    phone: '',
    whatsapp: '',
    cnic: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    course: '',
    photo: null,
    studentId: ''
  });
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [showIdCard, setShowIdCard] = useState(false);
  const idCardRef = React.useRef<HTMLDivElement>(null);

  const courses = [
    'Fahm Ul Quran Diploma Course',
    'Basic Islamic Studies',
    'Arabic Language Course',
    'Hadees Study Program',
    'Islamic Jurisprudence (Fiqh)',
    'Tajweed & Qirat'
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "Photo size should be less than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      setFormData(prev => ({ ...prev, photo: file }));
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (): boolean => {
    const requiredFields = [
      'fullName', 'fatherName', 'email', 'phone', 'cnic', 
      'dateOfBirth', 'gender', 'address', 'course'
    ];
    
    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        toast({
          title: "Missing Information",
          description: `Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`,
          variant: "destructive"
        });
        return false;
      }
    }
    
    if (!formData.photo) {
      toast({
        title: "Photo Required",
        description: "Please upload your photo",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Generate student ID once and store it
    const studentId = `FQ${Date.now().toString().slice(-6)}`;

    // Prepare form data for formsubmit.co
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('fatherName', formData.fatherName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('whatsapp', formData.whatsapp);
    data.append('cnic', formData.cnic);
    data.append('dateOfBirth', formData.dateOfBirth);
    data.append('gender', formData.gender);
    data.append('address', formData.address);
    data.append('course', formData.course);
    data.append('studentId', studentId);
    if (formData.photo) data.append('photo', formData.photo);
    data.append('_captcha', 'false');

    // Send to formsubmit.co
    try {
      await fetch('https://formsubmit.co/ashfaq.sr1974@gmail.com', {
        method: 'POST',
        body: data
      });
      toast({
        title: "Registration Successful!",
        description: `Student ID: ${studentId} - Your ID card is ready for download. Data sent to email.`,
      });
    } catch (err) {
      toast({
        title: "Email Error",
        description: "Could not send data to email.",
        variant: "destructive"
      });
    }

    setFormData(prev => ({ ...prev, studentId }));
    setShowIdCard(true);
  };

  React.useEffect(() => {
    if (showIdCard && idCardRef.current) {
      // Wait for card to render
      setTimeout(async () => {
        const canvas = await html2canvas(idCardRef.current!, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('student-id-card.pdf');
      }, 500);
    }
  }, [showIdCard]);

  if (showIdCard) {
    return (
      <div ref={idCardRef}>
        <IdCard 
          studentData={{
            ...formData,
            studentId: formData.studentId || `FQ${Date.now().toString().slice(-6)}`,
            photoUrl: photoPreview
          }}
          onBack={() => setShowIdCard(false)}
        />
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserPlus className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Student Registration</h1>
          <p className="text-xl text-muted-foreground">
            Fahm Ul Quran mein apni Islamic journey shuru kariye
          </p>
        </div>

        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">
              Registration Form
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="fatherName">Father's Name *</Label>
                    <Input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      placeholder="Enter father's name"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange('fatherName', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+92-300-123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="+92-300-123-4567"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cnic">CNIC Number *</Label>
                    <Input
                      id="cnic"
                      name="cnic"
                      type="text"
                      placeholder="12345-6789012-3"
                      value={formData.cnic}
                      onChange={(e) => handleInputChange('cnic', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Gender *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => handleInputChange('gender', value)}
                      className="flex space-x-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Full Address *</Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="Enter your complete address..."
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>

              {/* Course Selection */}
              <div>
                <Label htmlFor="course">Select Course *</Label>
                <Select value={formData.course} onValueChange={(value) => handleInputChange('course', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your preferred course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Photo Upload */}
              <div>
                <Label htmlFor="photo">Upload Photo *</Label>
                <div className="mt-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                      <Label
                        htmlFor="photo"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload photo (Max 5MB)
                          </p>
                        </div>
                      </Label>
                    </div>
                    
                    {photoPreview && (
                      <div className="w-32 h-32">
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg border-2 border-border"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                  Submit Registration
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;