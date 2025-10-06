import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ExportPDF = () => {
  const handleExport = () => {
    const input = document.getElementById('pdf-content');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('movie-analysis.pdf');
    });
  };

  return (
    <button
      onClick={handleExport}
      className="px-6 py-3 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition"
    >
      Export PDF
    </button>
  );
};

export default ExportPDF;