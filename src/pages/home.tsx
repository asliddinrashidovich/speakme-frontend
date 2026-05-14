import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle,
  ShieldCheck,
  Users,
  MessageSquare,
  ChevronRight,
  Star,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ExaminerCard } from "../components/examinerCard";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Home = () => {
  const { t } = useTranslation();

  const platformInfo = [
    { title: t("stats.exams"), text: t("stats.examsText"), icon: CheckCircle },
    {
      title: t("stats.reliable"),
      text: t("stats.reliableText"),
      icon: ShieldCheck,
    },
    { title: t("stats.expert"), text: t("stats.expertText"), icon: Users },
    {
      title: t("stats.consultation"),
      text: t("stats.consultationText"),
      icon: MessageSquare,
    },
  ];

  const results = [
    { label: t("results.experts"), value: "50+" },
    { label: t("results.mockExams"), value: "1,200+" },
    { label: t("results.averageScore"), value: "7.5" },
  ];

  // Mock examiners for the homepage
  const mockExaminers = [
    {
      uid: "1",
      firstName: "John",
      lastName: "Doe",
      bio: "Professional IELTS examiner with 10 years of experience.",
      ieltsOverall: 8.5,
      price: 100000,
      photoURL:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      rating: 4.9,
      mockExamsCount: 156,
      telegramUsername: "johndoe_ielts",
    },
    {
      uid: "2",
      firstName: "Sarah",
      lastName: "Smith",
      bio: "Expert in speaking and writing modules of IELTS.",
      ieltsOverall: 8.0,
      price: 120000,
      photoURL:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      rating: 5.0,
      mockExamsCount: 89,
      telegramUsername: "sarah_ielts",
    },
    {
      uid: "3",
      firstName: "Michael",
      lastName: "Brown",
      bio: "Helping students achieve band 7+ since 2018.",
      ieltsOverall: 7.5,
      price: 90000,
      photoURL:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      rating: 4.8,
      mockExamsCount: 210,
      telegramUsername: "michael_ielts",
    },
    {
      uid: "5",
      firstName: "Asliddin",
      lastName: "Norboyev",
      bio: "Mahalliy talabalarga IELTS sirlarini o'rgataman. Band 8.0 sohibiman.",
      ieltsOverall: 8.0,
      price: 100000,
      photoURL: "https://avatars.githubusercontent.com/u/157356679?v=4",
      rating: 4.7,
      mockExamsCount: 45,
      telegramUsername: "alisher_ielts",
    },
    {
      uid: "5",
      firstName: "Asliddin",
      lastName: "Norboyev",
      bio: "Mahalliy talabalarga IELTS sirlarini o'rgataman. Band 8.0 sohibiman.",
      ieltsOverall: 8.0,
      price: 100000,
      photoURL: "https://avatars.githubusercontent.com/u/157356679?v=4",
      rating: 4.7,
      mockExamsCount: 45,
      telegramUsername: "alisher_ielts",
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto px-5 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 space-y-8 text-white"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
                {t("hero.title")
                  .split(" ")
                  .map((word, i) => (
                    <span
                      key={i}
                      className={
                        word.toLowerCase() === "easy!" ? "text-[#cdff00]" : ""
                      }
                    >
                      {word}{" "}
                    </span>
                  ))}
              </h1>
              <p className="text-xl text-white/80 max-w-xl font-medium">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="h-14 text-[#cdff00] px-8 text-lg font-bold rounded-full"
                  asChild
                >
                  <Link to="/examiners">{t("hero.findButton")}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg font-bold rounded-full border-white text-black/70 hover:bg-white transition-all"
                  asChild
                >
                  <Link to="/become-examiner">{t("hero.becomeButton")}</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 hidden md:block"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#cdff00] rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop"
                    alt="Students studying"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto px-4 md:px-10 py-24 space-y-12"
      >
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
            {t("about.sectionTitle")}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-[#cdff00]/20 text-[#cdff00] border-[#cdff00]/30 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full">
                {t("about.subtitle")}
              </Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                {t("about.title")}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#cdff00] flex items-center justify-center shrink-0 shadow-lg shadow-[#cdff00]/20">
                  <Star className="text-black h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t("about.feature1")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("about.feature1Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#cdff00] flex items-center justify-center shrink-0 shadow-lg shadow-[#cdff00]/20">
                  <ShieldCheck className="text-black h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t("about.feature2")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t("about.feature2Desc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-background">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
                alt="Working together"
                className="w-full aspect-4/5 object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#cdff00]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#cdff00]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-[#cdff00]/20 rounded-[3.5rem] -rotate-6 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="-mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {platformInfo.map((info, i) => (
            <Card
              key={i}
              className="bg-background border-none shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader>
                <div className="p-3 bg-[#cdff00] w-fit rounded-2xl mb-4 shadow-lg shadow-[#cdff00]/20">
                  <info.icon className="h-7 w-7 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {info.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 md:px-10 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-sub px-4 py-1 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {t("results.sectionTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 bg-[#cdff00] rounded-[3rem] text-black shadow-2xl shadow-[#cdff00]/10">
          {results.map((res, i) => (
            <div
              key={i}
              className="space-y-2 text-center border-[#cdff00]/10 last:border-0 md:border-r"
            >
              <div className="text-6xl font-black tracking-tighter">
                {res.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">
                {res.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examiners Section */}
      <section className="container mx-auto px-4 md:px-10 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">{t("examiners.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our highly qualified examiners to start your preparation
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {mockExaminers.map((examiner) => (
            // @ts-ignore
            <ExaminerCard key={examiner.uid} examiner={examiner} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/examiners">
              {t("examiners.seeMore")} <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 max-w-5xl space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground">
            Find answers to the most common questions about our platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {[
            {
              q: "How do I book a mock exam?",
              a: "Booking is simple! Browse our list of certified examiners, view their profile to check their credentials and availability. Once you find the right match, click 'Book Now' which will lead you directly to their Telegram for scheduling and payment.",
            },
            {
              q: "What is the average price for a session?",
              a: "Prices vary depending on the examiner's experience and IELTS score. On average, a 30-minute mock speaking session costs between 80,000 and 150,000 UZS. Each examiner sets their own competitive rates.",
            },
            {
              q: "Are all examiners verified?",
              a: "Yes, we verify every single examiner on our platform. They are required to provide proof of their IELTS score (Band 7.5 or higher) and teaching experience. We also monitor student feedback to maintain high quality standards.",
            },
            {
              q: "Can I get a refund if I'm not satisfied?",
              a: "Most of our top examiners offer a money-back guarantee. Check the 'Money back guarantee' badge on examiner profiles. If you encounter any issues, our support team is also here to help mediate.",
            },
            {
              q: "Who can join as an examiner?",
              a: "We welcome instructors with an IELTS score of 7.0 or higher. You'll need to create a profile, upload your certification, and set your own pricing and availability. It's a great way to help students while earning.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b cursor-pointer border-primary/10"
            >
              <AccordionTrigger className="text-2xl font-bold hover:text-primary cursor-pointer transition-colors text-left py-4">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 md:px-10 py-20">
        <div className="bg-muted rounded-[3rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Form Column */}
            <div className="flex-1 p-8 md:p-16 space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#cdff00]/20 text-[#cdff00] border-[#cdff00]/30 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full">
                  {t("contact.title")}
                </Badge>
                <h2 className="text-4xl font-black tracking-tight leading-none">
                  Still have questions? <br />
                  <span className="text-[#cdff00] italic">Let's talk!</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our team is ready to help you choose the best plan for your
                  IELTS success.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold uppercase tracking-wide opacity-70 ml-1">
                      {t("contact.name")}
                    </label>
                    <input
                      className="w-full h-14 px-4 rounded-2xl bg-white border-2 border-transparent focus:border-[#cdff00] focus:outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-bold uppercase tracking-wide opacity-70 ml-1">
                      {t("contact.phone")}
                    </label>
                    <input
                      className="w-full h-14 px-4 rounded-2xl bg-white border-2 border-transparent focus:border-[#cdff00] focus:outline-none transition-all"
                      placeholder="+998"
                    />
                  </div>
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-sm font-bold uppercase tracking-wide opacity-70 ml-1">
                    {t("contact.message")}
                  </label>
                  <textarea
                    className="w-full p-4 rounded-2xl bg-white border-2 border-transparent focus:border-[#cdff00] focus:outline-none transition-all min-h-30"
                    placeholder="Ask us anything..."
                  />
                </div>
                <Button
                  className="w-full h-14 text-lg bg-[#cdff00] text-black font-bold rounded-2xl shadow-xl shadow-[#cdff00]/20"
                  size="lg"
                >
                  {t("contact.send")}
                </Button>
              </form>
            </div>

            {/* Image Column */}
            <div className="flex-1 min-h-100 relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000"
                alt="Support Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#cdff00]/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
