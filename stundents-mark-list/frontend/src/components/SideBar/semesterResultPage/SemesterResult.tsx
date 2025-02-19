import React from "react";
import SemesterMarkResult from '../../../InternalMarks.json';
import { useParams } from "react-router-dom";
import { InternalMarks } from "../semesterResultPage/InternalInterface";
import downloadimage from '../../../assets/download.png';
import { jsPDF } from 'jspdf';

const SemesterResult: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const semesterIndex = parseInt(id ?? "1") - 1;
  const marksData: InternalMarks = SemesterMarkResult[semesterIndex];

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16); // Reduce font size for PDF title
    doc.text(`Semester ${marksData.semester} - Internal Marks`, 20, 20);

    // Add Theory Table Title
    doc.setFontSize(12); // Reduce font size for table titles
    doc.text(`Theory - Regulation (${marksData.internal_marks.theory.regulation})`, 20, 30);

    // Add Theory Table
    const startY = 40;
    const rowHeight = 10;
    let yOffset = startY;

    // Table headers
    const headers = ["Subject Code", "Subject Name", "CT1", "CT2", "Assign1", "Seminar", "MCQ", "Skill"];
    headers.forEach((header, index) => {
      doc.text(header, 20 + index * 30, yOffset); // Adjusting position
    });
    yOffset += rowHeight;

    // Table rows
    marksData.internal_marks.theory.subjects.forEach((subject, index) => {
      doc.text(subject.subject_code, 20, yOffset);
      doc.text(subject.subject_name, 50, yOffset);
      doc.text(String(subject.CT1), 90, yOffset);
      doc.text(String(subject.CT2), 120, yOffset);
      doc.text(String(subject.Assign1), 150, yOffset);
      doc.text(String(subject.Seminar), 180, yOffset);
      doc.text(String(subject.MCQ), 210, yOffset);
      doc.text(String(subject.Skill), 240, yOffset);
      yOffset += rowHeight;
    });

    // Add Practical Table Title
    doc.setFontSize(12); // Reduce font size for practical table title
    doc.text(`Practical - Regulation (${marksData.internal_marks.practical.regulation})`, 20, yOffset + 10);
    yOffset += 10;

    // Practical Table headers
    const practicalHeaders = ["Subject Code", "Subject Name", "Continuous Assessment", "Model Lab"];
    practicalHeaders.forEach((header, index) => {
      doc.text(header, 20 + index * 50, yOffset); // Adjusting position for practical
    });
    yOffset += rowHeight;

    // Practical Table rows
    marksData.internal_marks.practical.subjects.forEach((subject, index) => {
      doc.text(subject.subject_code, 20, yOffset);
      doc.text(subject.subject_name, 70, yOffset);
      doc.text(String(subject.continuous_assessment), 130, yOffset);
      doc.text(String(subject.model_lab), 180, yOffset);
      yOffset += rowHeight;
    });

    // Save PDF with a filename
    doc.save(`Semester-${marksData.semester}-Internal-Marks.pdf`);
  };
  return (
    <div className="p-2 sm:p-6">
      <div className="relative">
        <div className="flex absolute top-0 right-2 cursor-pointer" onClick={downloadPDF}>
          <img src={downloadimage} alt="downloadIcon" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <h1 className="text-md md:text-2xl text-center font-bold mb-4">
          Semester {marksData.semester} - Internal Marks
        </h1>
      </div>
      {/* Theory Table */}
      <h2 className="text-md sm:text-xl text-center sm:text-left font-semibold my-3">Theory - Regulation ({marksData.internal_marks.theory.regulation})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Subject Code</th>
              <th className="border border-gray-300 p-2">Subject Name</th>
              <th className="border border-gray-300 p-2">CT1</th>
              <th className="border border-gray-300 p-2">CT2</th>
              <th className="border border-gray-300 p-2">Assign1</th>
              <th className="border border-gray-300 p-2">Seminar</th>
              <th className="border border-gray-300 p-2">MCQ</th>
              <th className="border border-gray-300 p-2">Skill</th>
            </tr>
          </thead>
          <tbody>
            {marksData.internal_marks.theory.subjects.map((subject, index) => (
              <tr key={index} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{subject.subject_code}</td>
                <td className="border border-gray-300 p-2">{subject.subject_name}</td>
                <td className="border border-gray-300 p-2">{subject.CT1}</td>
                <td className="border border-gray-300 p-2">{subject.CT2}</td>
                <td className="border border-gray-300 p-2">{subject.Assign1}</td>
                <td className="border border-gray-300 p-2">{subject.Seminar}</td>
                <td className="border border-gray-300 p-2">{subject.MCQ}</td>
                <td className="border border-gray-300 p-2">{subject.Skill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Practical Table */}
      <h2 className="text-xl font-semibold mt-6 my-3">Practical - Regulation ({marksData.internal_marks.practical.regulation})</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2">Subject Code</th>
              <th className="border border-gray-300 p-2">Subject Name</th>
              <th className="border border-gray-300 p-2">Continuous Assessment</th>
              <th className="border border-gray-300 p-2">Model Lab</th>
            </tr>
          </thead>
          <tbody>
            {marksData.internal_marks.practical.subjects.map((subject, index) => (
              <tr key={index} className="text-center border border-gray-300">
                <td className="border border-gray-300 p-2">{subject.subject_code}</td>
                <td className="border border-gray-300 p-2">{subject.subject_name}</td>
                <td className="border border-gray-300 p-2">{subject.continuous_assessment}</td>
                <td className="border border-gray-300 p-2">{subject.model_lab}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SemesterResult;
