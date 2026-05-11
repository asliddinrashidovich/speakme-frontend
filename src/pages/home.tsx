import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Users, 
  MessageSquare,
  ChevronRight,
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { ExaminerCard } from '../components/examinerCard';

export const Home = () => {
  const { t } = useTranslation();

  const platformInfo = [
    { title: t('stats.exams'), text: t('stats.examsText'), icon: CheckCircle },
    { title: t('stats.reliable'), text: t('stats.reliableText'), icon: ShieldCheck },
    { title: t('stats.expert'), text: t('stats.expertText'), icon: Users },
    { title: t('stats.consultation'), text: t('stats.consultationText'), icon: MessageSquare },
  ];

  const results = [
    { label: t('results.experts'), value: '50+' },
    { label: t('results.mockExams'), value: '1,200+' },
    { label: t('results.averageScore'), value: '7.5' },
  ];

  // Mock examiners for the homepage
  const mockExaminers = [
    {
      uid: '1',
      firstName: 'John',
      lastName: 'Doe',
      bio: 'Professional IELTS examiner with 10 years of experience.',
      ieltsOverall: 8.5,
      price: 100000,
      photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      rating: 4.9,
      mockExamsCount: 156,
      telegramUsername: 'johndoe_ielts'
    },
    {
      uid: '2',
      firstName: 'Sarah',
      lastName: 'Smith',
      bio: 'Expert in speaking and writing modules of IELTS.',
      ieltsOverall: 8.0,
      price: 120000,
      photoURL: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5.0,
      mockExamsCount: 89,
      telegramUsername: 'sarah_ielts'
    },
    {
       uid: '3',
       firstName: 'Michael',
       lastName: 'Brown',
       bio: 'Helping students achieve band 7+ since 2018.',
       ieltsOverall: 7.5,
       price: 90000,
       photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
       rating: 4.8,
       mockExamsCount: 210,
       telegramUsername: 'michael_ielts'
    }
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 pt-12 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/examiners">{t('hero.findButton')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/become-examiner">{t('hero.becomeButton')}</Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 relative"
        >
          <div className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop" 
              alt="Students studying" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-liniar-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {platformInfo.map((info, i) => (
            <Card key={i} className="bg-background border-none shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="p-2 bg-primary/10 w-fit rounded-lg mb-2">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{info.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 bg-primary rounded-3xl text-primary-foreground">
          {results.map((res, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl font-bold">{res.value}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider font-semibold">{res.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Examiners Section */}
      <section className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">{t('examiners.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our highly qualified examiners to start your preparation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockExaminers.map((examiner) => (
            // @ts-ignore
            <ExaminerCard key={examiner.uid} examiner={examiner} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/examiners">
              {t('examiners.seeMore')} <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 max-w-3xl space-y-8">
        <h2 className="text-3xl font-bold text-center">{t('faq.title')}</h2>
        <div className="space-y-4">
          {[
            { q: "How do I book an exam?", a: "Find an examiner you like, click on their profile, choose a time slot and click Book Now. You'll be redirected to their Telegram." },
            { q: "What is the average price?", a: "Most mock exams cost between 80,000 and 150,000 soums per session." },
            { q: "Who can become an examiner?", a: "Anyone with an IELTS score of 7.0 or higher and a passion for teaching." }
          ].map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg">{item.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 max-w-2xl bg-muted p-12 rounded-3xl space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
          <p className="text-muted-foreground">Have questions? We're here to help.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('contact.name')}</label>
              <input className="w-full p-2 rounded-md bg-background border" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{t('contact.phone')}</label>
              <input className="w-full p-2 rounded-md bg-background border" placeholder="+998" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('contact.message')}</label>
            <textarea className="w-full p-2 rounded-md bg-background border min-h-25" placeholder="Ask us anything..." />
          </div>
          <Button className="w-full" size="lg">{t('contact.send')}</Button>
        </form>
      </section>
    </div>
  );
};
