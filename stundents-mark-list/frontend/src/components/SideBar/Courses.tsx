import React from "react";

interface Subject {
  subject_code: string;
  subject_name: string;
}

interface TheorySubject extends Subject {
  CT1: number;
  CT2: number;
  Assign1: number;
  Seminar: number;
  MCQ: number;
  Skill?:boolean;
}

interface PracticalSubject extends Subject {
  continuous_assessment: number;
  model_lab: number;
}

interface InternalMarks {
  semester: number;
  internal_marks: {
    theory: {
      regulation: string;
      subjects: TheorySubject[];
    };
    practical: {
      regulation: string;
      subjects: PracticalSubject[];
    };
  };  
}

const marksData: InternalMarks = {
  semester: 1,
  internal_marks: {
    theory: {
      regulation: "R2021",
      subjects: [
        {
          subject_code: "CY2101",
          subject_name: "Engineering Chemistry",
          CT1: 78,
          CT2: 50,
          Assign1: 97,
          Seminar: 97,
          MCQ: 97,
        },
        {
          subject_code: "EM2101",
          subject_name: "Coding Techniques - I",
          CT1: 82,
          CT2: 50,
          Assign1: 90,
          Seminar: 90,
          MCQ: 90,
        },
        {
          subject_code: "GE2101",
          subject_name: "Principles of Engineering",
          CT1: 92,
          CT2: 32,
          Assign1: 70,
          Seminar: 70,
          MCQ: 70,
        },
        {
          subject_code: "MA2101",
          subject_name: "Matrices and Differential Calculus",
          CT1: 84,
          CT2: 50,
          Assign1: 100,
          Seminar: 100,
          MCQ: 100,
        },
        {
          subject_code: "PH2101",
          subject_name: "Engineering Physics",
          CT1: 84,
          CT2: 60,
          Assign1: 93,
          Seminar: 93,
          MCQ: 93,
        },
        {
          subject_code: "SH2101",
          subject_name: "Technical English",
          CT1: 69,
          CT2: 63,
          Assign1: 97,
          Seminar: 97,
          MCQ: 97,
        },
      ],
    },
    practical: {
      regulation: "R2021",
      subjects: [
        {
          subject_code: "EM2102",
          subject_name: "Coding Techniques - I Laboratory",
          continuous_assessment: 96,
          model_lab: 90,
        },
        {
          subject_code: "MA2102",
          subject_name: "Mathematics Laboratory",
          continuous_assessment: 92,
          model_lab: 85,
        },
        {
          subject_code: "PH2102",
          subject_name: "Physics Laboratory",
          continuous_assessment: 95,
          model_lab: 72,
        },
      ],
    },
  },
};

const Courses: React.FC = () => {
  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold text-center mb-4">
      Semester {marksData.semester} - Internal Marks
    </h1>
    {/* Theory Table */}
    <h2 className="text-xl font-semibold my-3">Theory - Regulation ({marksData.internal_marks.theory.regulation})</h2>
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

export default Courses;
