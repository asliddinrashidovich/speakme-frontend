import { ExaminerDetails } from '../types';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Star, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ExaminerCardProps {
  examiner: ExaminerDetails;
}

export const ExaminerCard = ({ examiner }: ExaminerCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-4/3 overflow-hidden">
        <img 
          src={examiner.photoURL} 
          alt={`${examiner.firstName} ${examiner.lastName}`} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge className="bg-primary text-primary-foreground font-bold text-lg">
            {examiner.ieltsOverall}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-4 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{examiner.firstName} {examiner.lastName}</h3>
          <div className="flex items-center text-yellow-500 font-medium">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span>{examiner.rating}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 min-h-8`">
          {examiner.bio}
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-muted-foreground">{t('examiners.price')}</span>
          <span className="text-primary">{examiner.price.toLocaleString()} soum</span>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1" asChild>
            <Link to={`/examiners/${examiner.uid}`}>{t('examiners.viewDetail')}</Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`https://t.me/${examiner.telegramUsername}`} target="_blank" rel="noreferrer">
              <MessageSquare className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
