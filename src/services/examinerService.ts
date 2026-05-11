import { ExaminerDetails } from "../types";

// Mock data
const mockExaminers: ExaminerDetails[] = [
  {
    uid: '1',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Professional IELTS examiner with 10 years of experience.',
    age: 32,
    ieltsOverall: 8.5,
    ieltsListening: 9.0,
    ieltsReading: 8.5,
    ieltsWriting: 8.0,
    ieltsSpeaking: 8.5,
    price: 100000,
    telegramUsername: 'johndoe_ielts',
    photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    freeTimeSlots: ['Sunday 14:00-20:00'],
    rating: 4.9,
    mockExamsCount: 156,
    isVerified: true
  },
  {
    uid: '2',
    firstName: 'Sarah',
    lastName: 'Smith',
    bio: 'Expert in speaking and writing modules of IELTS.',
    age: 28,
    ieltsOverall: 8.0,
    ieltsListening: 8.5,
    ieltsReading: 8.0,
    ieltsWriting: 8.5,
    ieltsSpeaking: 8.0,
    price: 120000,
    telegramUsername: 'sarah_ielts',
    photoURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    freeTimeSlots: ['Saturday 10:00-12:00'],
    rating: 5.0,
    mockExamsCount: 89,
    isVerified: true
  }
];

export const examinerService = {
  getExaminers: async (): Promise<ExaminerDetails[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockExaminers;
  },

  getExaminerById: async (id: string): Promise<ExaminerDetails | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockExaminers.find(ex => ex.uid === id);
  },

  createExaminer: async (details: Partial<ExaminerDetails>): Promise<void> => {
    // Logic to save to Firestore
    console.log('Saving examiner to Firestore:', details);
  }
};
