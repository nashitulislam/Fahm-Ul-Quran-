import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import QRCode from 'qrcode';

interface StudentData {
  fullName: string;
  fatherName: string;
  cnic: string;
  course: string;
  studentId: string;
  photoUrl: string;
}

interface IdCardProps {
  studentData: StudentData;
  onBack: () => void;
}

const IdCard = ({ studentData, onBack }: IdCardProps) => {
  const idCardRef = useRef<HTMLDivElement>(null);

  const generateQRCode = async (data: string) => {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(data, {
        width: 80,
        margin: 1,
        color: {
          dark: '#2D5016',
          light: '#ffffff'
        }
      });
      return qrCodeDataUrl;
    } catch (error) {
      console.error('QR Code generation failed:', error);
      return '';
    }
  };

  const [qrCodeDataUrl, setQrCodeDataUrl] = React.useState<string>('');
  
  React.useEffect(() => {
    const qrData = `Student ID: ${studentData.studentId}, Name: ${studentData.fullName}, Course: ${studentData.course}`;
    generateQRCode(qrData).then(setQrCodeDataUrl);
  }, [studentData]);

  const handleDownload = () => {
    if (idCardRef.current) {
      // This would typically use html2canvas to convert to image/PDF
      // For now, we'll trigger the browser's print functionality
      window.print();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 px-4 bg-muted/30 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registration
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
            <Button variant="hero" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* ID Card */}
        <div ref={idCardRef} className="print-visible">
          <Card className="card-shadow max-w-2xl mx-auto bg-white">
            <CardContent className="p-8">
              {/* Front Side */}
              <div className="border-2 border-primary rounded-lg mb-8">
                {/* Header */}
                <div className="bg-primary text-primary-foreground p-4 rounded-t-lg text-center">
                  <h2 className="font-arabic text-2xl font-bold mb-1">فہم القرآن</h2>
                  <h3 className="text-lg font-semibold">Fahm Ul Quran - Madarsa Rehmania</h3>
                  <p className="text-sm text-primary-foreground/80">STUDENT ID CARD</p>
                </div>

                {/* Front Content */}
                <div className="p-6 bg-gradient-to-br from-white to-muted/30">
                  <div className="flex items-center space-x-6">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-32 border-2 border-primary rounded-lg overflow-hidden">
                        {studentData.photoUrl ? (
                          <img
                            src={studentData.photoUrl}
                            alt="Student Photo"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Photo</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">STUDENT NAME</p>
                          <p className="font-bold text-lg text-primary">{studentData.fullName}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">COURSE</p>
                          <p className="font-semibold text-primary">{studentData.course}</p>
                        </div>
                        
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">STUDENT ID</p>
                          <p className="font-mono font-bold text-lg text-primary">{studentData.studentId}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="border-2 border-primary rounded-lg">
                {/* Header */}
                <div className="bg-primary text-primary-foreground p-3 rounded-t-lg text-center">
                  <h3 className="font-semibold">STUDENT INFORMATION</h3>
                </div>

                {/* Back Content */}
                <div className="p-6 bg-gradient-to-br from-white to-muted/30">
                  <div className="flex justify-between items-start">
                    {/* Student Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">STUDENT NAME</p>
                        <p className="font-semibold text-primary">{studentData.fullName}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">FATHER'S NAME</p>
                        <p className="font-semibold text-primary">{studentData.fatherName}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">CNIC NUMBER</p>
                        <p className="font-mono font-semibold text-primary">{studentData.cnic}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">ENROLLED COURSE</p>
                        <p className="font-semibold text-primary">{studentData.course}</p>
                      </div>
                    </div>

                    {/* QR Code */}
                    <div className="text-center ml-6">
                      <div className="border-2 border-primary rounded-lg p-2 bg-white">
                        {qrCodeDataUrl ? (
                          <img src={qrCodeDataUrl} alt="QR Code" className="w-20 h-20" />
                        ) : (
                          <div className="w-20 h-20 bg-muted flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">QR</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Scan for Info</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="max-w-2xl mx-auto mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Instructions / Notes</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>📋 <strong>Please colour print of this Admit/ID card</strong> - Black & white print acceptable sirf zarurat ke waqt</p>
                
                <p>✅ <strong>Attestation is mandatory</strong> - Gazetted Officer ya Principal se attest karwana zaroori hai</p>
                
                <p>📄 <strong>Bring CNIC and Last qualification documents</strong> - Original CNIC aur degree/certificate saath laye</p>
                
                <p>⏰ <strong>Punctuality is required</strong> - Classes ke liye waqt par aana zaroori hai</p>
                
                <p>📱 <strong>Keep this ID Card safe</strong> - Ye aapka official student identification hai</p>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Jamia Masjid Rehmania E-4 Block 8 Second Floor</h4>
                <p className="text-sm text-muted-foreground">
                  Department of Fahm Ul Quran Gulshan e iqbal karachi<br />
                  Phone: +92-343-2486038 | Email: ashfaq.sr1974@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media print {
            body * {
              visibility: hidden;
            }
            
            .print-visible,
            .print-visible * {
              visibility: visible;
            }
            
            .print-visible {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: white;
            }
            
            .card-shadow {
              box-shadow: none !important;
            }
          }
        `
      }} />
    </div>
  );
};

export default IdCard;