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
import { allCourseTitles } from '@/lib/courseData';
import { supabase } from '@/supabase'; // ✅ Added Supabase import

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
  const courses = allCourseTitles;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Photo size should be less than 5MB",
          variant: "destructive"
        });
        return;
      }
      setFormData(prev => ({ ...prev, photo: file }));
      const reader = new FileReader();
      reader.onload = (e) => setPhotoPreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (): boolean => {
    const required = [
      'fullName', 'fatherName', 'email', 'phone', 'cnic',
      'dateOfBirth', 'gender', 'address', 'course'
    ];
    for (const field of required) {
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

    const studentId = `FQ${Date.now().toString().slice(-6)}`;
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

    try {
      // ✅ Supabase insert
      const { data: supabaseData, error } = await supabase.from("students").insert([
        {
          full_name: formData.fullName,
          father_name: formData.fatherName,
          email: formData.email,
          phone: formData.phone,
          whatsapp: formData.whatsapp,
          cnic: formData.cnic,
          date_of_birth: formData.dateOfBirth,
          gender: formData.gender,
          address: formData.address,
          course: formData.course,
          student_id: studentId,
        },
      ]);

      if (error) {
        console.error("Supabase Error:", error);
        toast({
          title: "Database Error",
          description: "Failed to save data to Supabase.",
          variant: "destructive",
        });
      } else {
        console.log("Saved in Supabase:", supabaseData);
      }

      // ✅ Email send
      await fetch('https://formsubmit.co/ashfaq.sr1974@gmail.com', {
        method: 'POST',
        body: data
      });

      toast({
        title: "Registration Successful!",
        description: `Student ID: ${studentId} - Saved in Supabase & Email sent.`,
      });

      setFormData(prev => ({ ...prev, studentId }));
      setShowIdCard(true);
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  React.useEffect(() => {
    if (showIdCard && idCardRef.current) {
      setTimeout(async () => {
        const canvas = await html2canvas(idCardRef.current!, { scale: 3, useCORS: true });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [canvas.width, canvas.height] });
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
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserPlus className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Student Registration</h1>
          <p className="text-xl text-muted-foreground">Start your Islamic journey with Fahm-ul-Quran</p>
        </div>

        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: 'fullName', label: 'Full Name', placeholder: 'Enter your full name' },
                    { id: 'fatherName', label: "Father's Name", placeholder: 'Enter father name' },
                    { id: 'email', label: 'Email', placeholder: 'your.email@example.com' },
                    { id: 'phone', label: 'Phone', placeholder: '+92-300-1234567' },
                    { id: 'whatsapp', label: 'WhatsApp', placeholder: '+92-300-1234567' },
                    { id: 'cnic', label: 'CNIC', placeholder: '12345-6789012-3' },
                  ].map(({ id, label, placeholder }) => (
                    <div key={id}>
                      <Label htmlFor={id}>{label}</Label>
                      <Input
                        id={id}
                        type="text"
                        placeholder={placeholder}
                        value={formData[id as keyof FormData] as string}
                        onChange={(e) => handleInputChange(id as keyof FormData, e.target.value)}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(v) => handleInputChange('gender', v)}
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

              <div>
                <Label htmlFor="address">Full Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter complete address..."
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="course">Select Course</Label>
                <Select value={formData.course} onValueChange={(v) => handleInputChange('course', v)}>
                  <SelectTrigger><SelectValue placeholder="Choose course" /></SelectTrigger>
                  <SelectContent>
                    {courses.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="photo">Upload Photo</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <Label
                    htmlFor="photo"
                    className="w-full h-32 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50"
                  >
                    <Upload className="w-8 h-8 text-muted-foreground mr-2" /> Click to upload (Max 5MB)
                  </Label>
                  <Input id="photo" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                  {photoPreview && (
                    <img src={photoPreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg border" />
                  )}
                </div>
              </div>

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
