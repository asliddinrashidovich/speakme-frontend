import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        findExaminer: "Find an Examiner",
        becomeExaminer: "Become an Examiner",
        login: "Log In",
        register: "Sign Up",
        profile: "Profile"
      },
      hero: {
        title: "IELTS Speaking mock test is now very easy!",
        subtitle: "Improve your IELTS Speaking score with top instructors.",
        findButton: "Find an Examiner",
        becomeButton: "Become an Examiner"
      },
      about: {
        subtitle: "How it works",
        title: "Master the Art of Speaking",
        sectionTitle: "About Speak Pro",
        description: "Speak Pro is more than just a platform; it's your personal speaking coach. We connect ambitious students with certified examiners to bridge the gap between preparation and perfection. Whether you're aiming for a Band 7 or a Band 9, we provide the real-world practice you need to succeed.",
        feature1: "Real-time Feedback",
        feature1Desc: "Get instant, detailed evaluation based on official IELTS criteria.",
        feature2: "Certified Experts",
        feature2Desc: "All our examiners undergo rigorous verification and have Band 7+ scores.",
        feature3: "Flexible Scheduling",
        feature3Desc: "Book sessions that fit your busy lifestyle, 24/7."
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
        averageScore: "Average Score",
        sectionTitle: "Our Impact in Numbers"
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
        telegram: "Telegram",
        moneyBack: "Money back guarantee",
        topExpert: "Top Expert"
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
        loginTitle: "Log In for Students",
        loginSubtitle: "Sign in to continue your IELTS journey",
        registerTitle: "Sign Up for Students",
        registerSubtitle: "Join Speak Pro to start your preparation",
        orExpertLogin: "or Log In as an Expert",
        orExpertRegister: "or Sign Up as an Expert",
        fullName: "Full Name",
        phoneNumber: "Phone Number",
        googleLogin: "Continue with Google",
        emailLogin: "Log in with Email",
        emailRegister: "Sign up with Email",
        phoneLogin: "Log in with Phone",
        alreadyHaveAccount: "Already have an account? Log In",
        noAccount: "Don't have an account? Sign Up",
        terms: "By creating an account, you agree to our Terms of Service.",
        verificationTitle: "Verification Code",
        resendCode: "Resend Code",
        isExpert: "Log In as Expert",
        isStudent: "Log In as Student"
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
      about: {
        subtitle: "Bu qanday ishlaydi",
        title: "Nutq san'atini egallang",
        sectionTitle: "Speak Pro haqida",
        description: "Speak Pro shunchaki platforma emas; bu sizning shaxsiy speaking murabbiyingizdir. Biz maqsadli talabalarni sertifikatlangan imtihonchilar bilan bog'laymiz, bu esa tayyorgarlik va mukammallik o'rtasidagi tafovutni yo'qotadi. Band 7 yoki Band 9 gachami, biz muvaffaqiyatga erishishingiz uchun kerakli bo'lgan real amaliyotni taqdim etamiz.",
        feature1: "Real-vaqtda fikr-mulohazalar",
        feature1Desc: "Rasmiy IELTS mezonlari asosida tezkor va batafsil baholashni oling.",
        feature2: "Sertifikatlangan ekspertlar",
        feature2Desc: "Barcha imtihonchilarimiz qattiq tekshiruvdan o'tgan va Band 7+ ballariga ega.",
        feature3: "Moslashuvchan jadval",
        feature3Desc: "O'zingizga qulay vaqtda, 24/7 sessiyalarni band qiling."
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
        averageScore: "O'rtacha ball",
        sectionTitle: "Bizning natijalar"
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
        telegram: "Telegram",
        moneyBack: "Pulni qaytarish kafolati",
        topExpert: "Top Ekspert"
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
        loginTitle: "Talabalar uchun kirish",
        loginSubtitle: "IELTS sayohatingizni davom ettirish uchun kiring",
        registerTitle: "Talaba sifatida ro'yxatdan o'tish",
        registerSubtitle: "Tayyorgarlikni boshlash uchun Speak Pro-ga qo'shiling",
        orExpertLogin: "yoki Ekspert sifatida kirish",
        orExpertRegister: "yoki Ekspert sifatida ro'yxatdan o'tish",
        fullName: "Ism va familiya",
        phoneNumber: "Telefon raqami",
        googleLogin: "Google orqali davom etish",
        emailLogin: "Email bilan kirish",
        emailRegister: "Email orqali ro'yxatdan o'tish",
        phoneLogin: "Telefon orqali kirish",
        alreadyHaveAccount: "Ro'yxatdan o'tganmisiz? Kirish",
        noAccount: "Ro'yxatdan o'tmaganmisiz? Ro'yxatdan o'tish",
        terms: "Akkaunt yaratish orqali jamoat taklifiga rozilik bildirasiz.",
        verificationTitle: "Tasdiqlash kodi",
        resendCode: "Kodni qayta yuborish",
        isExpert: "Ekspert sifatida kirish",
        isStudent: "Talaba sifatida kirish"
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
