import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        findExaminer: "Find an Examiner",
        becomeExaminer: "Become an Examiner",
        login: "Login",
        register: "Register",
        profile: "Profile"
      },
      hero: {
        title: "IELTS Speaking mock test is now very easy!",
        subtitle: "Improve your IELTS Speaking score with top instructors.",
        findButton: "Find an Examiner",
        becomeButton: "Become an Examiner"
      },
      stats: {
        reliable: "Reliable",
        reliableText: "Trusted by thousands of students worldwide.",
        exams: "Exams",
        examsText: "Quality mock exams based on real IELTS standards.",
        expert: "IELTS 7+ Examiners",
        expertText: "All our examiners have high IELTS scores.",
        consultation: "Consultation",
        consultationText: "Get professional feedback on your speaking."
      },
      results: {
        experts: "Experts",
        mockExams: "Mock Exams",
        averageScore: "Average Score"
      },
      examiners: {
        title: "Our Examiners",
        seeMore: "See More",
        searchPlaceholder: "Search by name or score...",
        results: "results found",
        bookNow: "Book Now",
        viewDetail: "View Detail",
        ieltsResult: "IELTS Score",
        price: "Price",
        age: "Age",
        telegram: "Telegram"
      },
      faq: {
        title: "Frequently Asked Questions"
      },
      contact: {
        title: "Contact Us",
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        message: "Your Question or Feedback",
        send: "Send Message"
      },
      auth: {
        loginTitle: "Log In",
        registerTitle: "Register",
        googleLogin: "Continue with Google",
        phoneLogin: "Login by Phone",
        emailLogin: "Login by Email"
      },
      profile: {
        title: "Your Profile",
        personalInfo: "Personal Information",
        becomeExaminerTitle: "Become an Examiner Panel"
      }
    }
  },
  uz: {
    translation: {
      nav: {
        findExaminer: "Examinerni topish",
        becomeExaminer: "Examiner bo'lish",
        login: "Kirish",
        register: "Ro'yxatdan o'tish",
        profile: "Profil"
      },
      hero: {
        title: "IELTS Speaking mock testi endi juda oson!",
        subtitle: "Eng yaxshi o'qituvchilar bilan IELTS Speaking balingizni oshiring.",
        findButton: "Examinerni topish",
        becomeButton: "Examiner bo'lish"
      },
      stats: {
        reliable: "Ishonchli",
        reliableText: "Dunyo bo'ylab minglab talabalar tomonidan ishonilgan.",
        exams: "Imtihonlar",
        examsText: "Haqiqiy IELTS standartlariga asoslangan sifatli mock imtihonlar.",
        expert: "IELTS 7+ Examinerlar",
        expertText: "Barcha examinerlarimiz yuqori IELTS ballariga ega.",
        consultation: "Konsultatsiya",
        consultationText: "Speaking bo'yicha professional fikr-mulohazalarni oling."
      },
      results: {
        experts: "Ekspertlar",
        mockExams: "Mock imtihonlar",
        averageScore: "O'rtacha ball"
      },
      examiners: {
        title: "Bizning Examinerlar",
        seeMore: "Ko'proq ko'rish",
        searchPlaceholder: "Ism yoki ball bo'yicha qidirish...",
        results: "natija topildi",
        bookNow: "Band qilish",
        viewDetail: "Batafsil",
        ieltsResult: "IELTS ball",
        price: "Narxi",
        age: "Yoshi",
        telegram: "Telegram"
      },
      faq: {
        title: "Ko'p so'raladigan savollar"
      },
      contact: {
        title: "Biz bilan bog'lanish",
        name: "To'liq ism",
        email: "Email",
        phone: "Telefon raqami",
        message: "Savolingiz yoki fikringiz",
        send: "Xabar yuborish"
      },
      auth: {
        loginTitle: "Kirish",
        registerTitle: "Ro'yxatdan o'tish",
        googleLogin: "Google orqali kirish",
        phoneLogin: "Telefon orqali kirish",
        emailLogin: "Email orqali kirish"
      },
      profile: {
        title: "Sizning profilingiz",
        personalInfo: "Shaxsiy ma'lumotlar",
        becomeExaminerTitle: "Examiner bo'lish paneli"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
