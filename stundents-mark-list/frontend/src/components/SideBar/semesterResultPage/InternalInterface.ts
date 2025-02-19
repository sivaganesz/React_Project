export interface Subject {
    subject_code: string;
    subject_name: string;
  }
  
export interface TheorySubject extends Subject {
    CT1: number;
    CT2: number;
    Assign1: number;
    Seminar: number;
    MCQ: number;
    Skill?: boolean | null | number;
  }
  
export interface PracticalSubject extends Subject {
    continuous_assessment: number;
    model_lab: number | null;
  }
  
export interface InternalMarks {
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
  
  