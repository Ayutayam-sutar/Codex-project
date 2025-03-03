import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './App.css';

function CertificateGenerator() {
  const [certificate, setCertificate] = useState({
    recipientName: '',
    courseName: '',
    completionDate: '',
    certificateType: 'completion',
    description: '',
  });

  // Function to generate the certificate PDF
  const generateCertificate = () => {
    const doc = new jsPDF();
    // Background color (light blue)
  doc.setFillColor(173, 216, 230);
  doc.rect(0, 0, 210, 297, 'F'); // Cover full page (A4 size in mm)

  
   // Add Logo (Ensure you have a Base64 version or a valid image URL)
   const logoUrl = 'data:image/jpeg;base64,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'; 
   // // Replace with your logo's URL
   doc.addImage(logoUrl, 'PNG', 85, 10, 40, 20); // (x, y, width, height)
   const backgroundUrl = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2AMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwECBAf/xAAhEAEBAQEAAgMBAQEBAQAAAAAAAQIRITEDEkFRYSKBcf/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBgX/xAAcEQEBAQEBAQEBAQAAAAAAAAAAARECIUESUQP/2gAMAwEAAhEDEQA/APpXPrbm/jrPtT5c98z+J59vO5lfQ3XcUynFIqJrdZ+2Ofz0lI9GfTj5ccvZ6p3n6WmXeY4ypIrkq6iuYnmK5b8xFd5UzHOYpmOjnlnW8bxsjrjacoTrjUVscaieuTiFnE9RfUS1OufqNIjr240pqcrisOouI1xfKmo34s9vb6jG8600zn65nfbmqacU8wonXGlNek6hccWW6kn6L/Dnk7r3Q5zpWqZS1j667+X0rl1rP2zxWbEyo5UicnPCmRDrvCtzNZ5XEimfLWRnah9freV3FPlx3Pf4nmH+cp7sUzFcp5WzPDbmM7XeVJHMUzHTzyztbBo2kSyuKo51E9cnKjpHUX1E9ubuNI8+3FitiWnP1Fxxc/bUkVmeTk9OvixzzfdNwpznp2o6cWK8T1OMuoqJaZjH23/jq+fEVzn655+ok1Wub7G32xRGVInlSHCcfNnn/U/9b8c8LSdnL6cXP1t7/wCK/P0t+O5OuszjMR3Y15ia6nlLWPpr/KtmN1j7541/OxO4nmLYieZ/1xbP8XxCtd5nVOMxnk8unTzzkZVjQWTCtCCO5xPcejeezwhWPfLTmvPpznH3s76V1Px3M/XPHP8AnavU+cca8q6ccTYIlfCW19xLObvXGPUXK4+LPntd1TWfrOROozD3XF9sbfbEmZUynFvjiuSquZyN1j7z/YRbEdPPOxnahl3mdbvPL4/W58RUg1snHefDJFMTt625iLXO8c/6n77dfHnt6p7hJyNfx6nWgNEgBgAICPyT63v4syzs4nqbBEcY7PszXlf1OONznlHXGRWocc2KWOdRh1GkR1G5x9PP7XeMd1/kU3PDP8fTt+PPqeENe16l8k/WPcXylfbG32xipuJ16MzkT+OKyda8RPVUxO+Vo4n47nn06uYyrqZ+3U7OVeTjn5M9nWt488RK4z7i8nJxx8WeTtdtOJgo1gtLQDAAAAAAMIBZ2AAhqcvHMnbxX5Z2ePZ8WeTtY3n1es+nJ4cVezsR14qeucEqPyT+JanXos7OIa8VzdzGkrzbnNCnyTo5rPWmup68LfHORP489q3XRxPqK7inxznlxjP2vn0s6uIyrRjWqaAGGjGq0hrAw0AABhAAAAYWmAEBxvPfLov8TZ4cedP5c98/xb5Jyp9c3U+NI899jr5c/W//AFjms9aRXM+s/wBbPbFPjz5635moqvx+I7TimfTp5/jOjWCyaAZAADRjVAawAAAAGFoACADAIAzVTTc78zjz39ehL5c/xh/pN9VKnufaSfoDHItuZ9rxeTk44+PPJ39rttxMTaRsrBolQZmtXKBrAyaMAGgGAAaAAAGBBowAAABxq9dWuUdGRl8yxrOpCGp9bwU+Sdnf0c/XN1crpoxulowPQ667ibZTlJ2M6K0NGdaNAMBoaMBoaMBoaMOjQ0AaBlreudUrQ5/QE6AGDTINCAyAAVoABAAdRoLIAAAAAAAAAAAAABmnAJpjQIAAAAIT/9k='; 
   doc.addImage(backgroundUrl, 'JPEG', 0, 0, 210, 297);
    doc.setFont('times');
    doc.setFontSize(40);
    doc.text(`Certificate of ${certificate.certificateType}`, 105, 40, { align: 'center' });
    doc.setFontSize(24);
    doc.text('This certifies that', 105, 70, { align: 'center' });
    doc.setFontSize(24);
    doc.text(certificate.recipientName || 'Recipient Name', 105, 100, { align: 'center' });
    doc.setFontSize(24);
    doc.text('has successfully completed', 105, 130, { align: 'center' });
    doc.setFontSize(22);
    doc.text(certificate.courseName || 'Course Name', 105, 160, { align: 'center' });
    doc.setFontSize(18);
    doc.text(certificate.description || 'Certificate description and additional details will appear here', 105, 190, { align: 'center' });
    doc.setFontSize(20);
    doc.text(`Awarded on ${certificate.completionDate || 'Date'}`, 105, 220, { align: 'center' });
    doc.text('___________', 50, 250);
    doc.text('Director', 50, 270);
    doc.text('___________', 150, 250);
    doc.text('Dean', 150, 270);
    
    doc.save('certificate.pdf');
  };

  return (
    <div className="container">
      <h1 className="text-center">Certificate Generator</h1>
      <div className="form">
        <div className="input-group">
          <label>Recipient Name</label>
          <input
            type="text"
            value={certificate.recipientName}
            onChange={(e) => setCertificate({ ...certificate, recipientName: e.target.value })}
            placeholder="Enter recipient's full name"
          />
        </div>

        <div className="input-group">
          <label>Course/Achievement Title</label>
          <input
            type="text"
            value={certificate.courseName}
            onChange={(e) => setCertificate({ ...certificate, courseName: e.target.value })}
            placeholder="Enter course or achievement title"
          />
        </div>

        <div className="input-group">
          <label>Completion Date</label>
          <input
            type="date"
            value={certificate.completionDate}
            onChange={(e) => setCertificate({ ...certificate, completionDate: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Certificate Type</label>
          <select
            value={certificate.certificateType}
            onChange={(e) => setCertificate({ ...certificate, certificateType: e.target.value })}
          >
            <option value="Completion">Course Completion</option>
            <option value="Achievement">Achievement</option>
            <option value="Participation">Participation</option>
            <option value="Excellence">Excellence</option>
          </select>
        </div>

        <div className="input-group">
          <label>Description (Optional)</label>
          <textarea
            value={certificate.description}
            onChange={(e) => setCertificate({ ...certificate, description: e.target.value })}
            placeholder="Enter additional details or description"
          />
        </div>

        <div className="buttons">
          <button onClick={generateCertificate}>Generate Certificate</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <CertificateGenerator />
    </div>
  );
}

export default App;

