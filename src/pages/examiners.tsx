import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExaminerCard } from '../components/examinerCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export const Examiners = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const allExaminers = [
    {
      uid: '1',
      firstName: 'John',
      lastName: 'Doe',
      bio: 'Professional IELTS examiner with 10 years of experience. I focus on fluency and pronunciation.',
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
      bio: 'Expert in speaking and writing modules of IELTS. Former British Council trainer.',
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
       bio: 'Helping students achieve band 7+ since 2018. personalized feedback for every student.',
       ieltsOverall: 7.5,
       price: 90000,
       photoURL: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
       rating: 4.8,
       mockExamsCount: 210,
       telegramUsername: 'michael_ielts'
    },
    {
      uid: '4',
      firstName: 'Alisher',
      lastName: 'Usmonov',
      bio: 'Mahalliy talabalarga IELTS sirlarini o\'rgataman. Band 8.0 sohibiman.',
      ieltsOverall: 8.0,
      price: 100000,
      photoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      rating: 4.7,
      mockExamsCount: 45,
      telegramUsername: 'alisher_ielts'
    }
  ];

  const filteredExaminers = allExaminers.filter(ex => 
    `${ex.firstName} ${ex.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ex.ieltsOverall.toString().includes(searchTerm)
  );

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">{t('nav.findExaminer')}</h1>
          <p className="text-muted-foreground">{filteredExaminers.length} {t('examiners.results')}</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={t('examiners.searchPlaceholder')} 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline"><SlidersHorizontal className="h-4 w-4 mr-2" /> Filters</Button>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">All Scores</Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Score 8.0+</Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Score 7.0 - 7.5</Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Price: Low to High</Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredExaminers.map((examiner) => (
          // @ts-ignore
          <ExaminerCard key={examiner.uid} examiner={examiner} />
        ))}
      </div>

      {filteredExaminers.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No examiners found matching your criteria.</p>
          <Button variant="link" onClick={() => setSearchTerm('')}>Clear all filters</Button>
        </div>
      )}
    </div>
  );
};
