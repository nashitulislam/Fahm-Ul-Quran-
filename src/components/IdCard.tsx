import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Printer } from "lucide-react";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

  // ✅ Generate QR
  useEffect(() => {
    const qrData = `ID: ${studentData.studentId}, Name: ${studentData.fullName}, Course: ${studentData.course}`;
    QRCode.toDataURL(qrData, { width: 100 }).then(setQrCodeDataUrl);
  }, [studentData]);

  // ✅ PDF Download (Mobile + Laptop)
  const handleDownload = async () => {
    if (!idCardRef.current) return;

    const clone = idCardRef.current.cloneNode(true) as HTMLElement;
    document.body.appendChild(clone);

    const cardWidthPx = 1200;
    const cardHeightPx = clone.scrollHeight;

    clone.style.width = `${cardWidthPx}px`;
    clone.style.position = "fixed";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    clone.style.background = "#fff";

    const canvas = await html2canvas(clone, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      windowWidth: cardWidthPx,
      windowHeight: cardHeightPx,
    });

    document.body.removeChild(clone);

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [54, 86], // ✅ CR80 Card Size
    });

    pdf.addImage(imgData, "PNG", 0, 0, 86, 54);
    pdf.save(`${studentData.fullName}_ID.pdf`);
  };

  const handlePrint = () => window.print();

  return (
    <div className="py-8 px-4 bg-muted/30 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" /> Print
            </Button>
            <Button variant="hero" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" /> Download PDF
            </Button>
          </div>
        </div>

        {/* Card + Notes */}
        <div ref={idCardRef} className="print-visible">
          {/* FRONT SIDE */}
          <Card className="border-2 border-primary rounded-lg mx-auto mb-8 w-[85.6mm] h-[53.98mm]">
            <CardContent className="p-3">
              <div className="bg-primary text-white text-center p-2 rounded-md mb-2">
                <h2 className="font-bold text-base"><b>فہم القرآن</b></h2>
                <p className="text-[11px] tracking-wide"><b>FAHM-UL-QURAN</b></p>
                <p className="text-[10px]">STUDENT IDENTIFICATION CARD</p>
              </div>
              <div className="flex">
                {/* Photo */}
                <div className="w-20 h-24 border-2 border-primary mr-3 overflow-hidden">
                  {studentData.photoUrl ? (
                    <img
                      src={studentData.photoUrl}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs">
                      Photo
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="text-[13px] leading-snug space-y-1">
                  <div>
                    <p className="text-[10px] text-muted-foreground">STUDENT NAME</p>
                    <p className="font-semibold text-primary">{studentData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">COURSE</p>
                    <p className="font-semibold text-primary">{studentData.course}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">STUDENT ID</p>
                    <p className="font-semibold text-primary">{studentData.studentId}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BACK SIDE */}
          <Card className="border-2 border-primary rounded-lg mx-auto mb-16 w-[85.6mm] h-[53.98mm]">
            <CardContent className="p-3">
              <div className="bg-primary text-white text-center p-2 rounded-md mb-2">
                <p className="text-sm font-semibold">STUDENT INFORMATION</p>
              </div>
              <div className="flex justify-between text-[12px] leading-snug">
                <div className="space-y-1">
                  <div>
                    <p className="text-[10px] text-muted-foreground">STUDENT NAME</p>
                    <p className="font-semibold text-primary">{studentData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">FATHER'S NAME</p>
                    <p className="font-semibold text-primary">{studentData.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">CNIC NUMBER</p>
                    <p className="font-semibold font-semibold text-primary">{studentData.cnic}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground">ENROLLED COURSE</p>
                    <p className="font-semibold text-primary">{studentData.course}</p>
                  </div>
                </div>

                {/* QR */}
                <div className="text-center"> 
                  {qrCodeDataUrl ? (
                    <img
                      src={qrCodeDataUrl}
                      alt="QR"
                      className="w-28 h-26 border p-1 bg-white"
                    />
                  ) : (
                    <div className="w-28 h-26 bg-muted flex items-center justify-center">
                      QR
                    </div>
                  )}
                  <p className="text-[9px]"></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* NOTES SECTION */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">
                Instructions / Notes
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📋 Please colour print this ID card (B/W only in emergency)</p>
                <p>✅ Attestation by Principal or Gazetted Officer is mandatory</p>
                <p>📄 Bring CNIC & last qualification documents (original)</p>
                <p>⏰ Be punctual for all classes</p>
                <p>📱 Keep this card safe – This is your official ID Card</p>
              </div>
              <div className="mt-6 p-3 bg-primary/10 rounded-lg text-sm">
                Jamia Masjid Rehmania E-4 Block 8, 2nd Floor Department Of <br />
                <b>FAHM-UL-QURAN</b> Gulshan-e-Iqbal, Karachi <br />
                Phone: +92-343-2486038 | Email: ashfaq.sr1974@gmail.com
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Print Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body * { visibility: hidden; }
          .print-visible, .print-visible * { visibility: visible; }
          .print-visible { position: absolute; left: 0; top: 0; width: 100%; background: white; }
        }
      `,
        }}
      />
    </div>
  );
};

export default IdCard;
