export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  telegramUsername?: string;
  role: 'student' | 'examiner' | 'admin';
  createdAt: any;
}

export interface ExaminerDetails {
  uid: string;
  firstName: string;
  lastName: string;
  bio: string;
  age?: number;
  ieltsOverall: number;
  ieltsListening?: number;
  ieltsReading?: number;
  ieltsWriting?: number;
  ieltsSpeaking?: number;
  price: number;
  telegramUsername: string;
  photoURL: string;
  freeTimeSlots?: string[];
  rating: number;
  mockExamsCount: number;
  isVerified?: boolean;
}

export interface MockExam {
  id: string;
  studentId: string;
  examinerId: string;
  date: any;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
}