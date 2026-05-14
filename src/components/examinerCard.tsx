import { ExaminerDetails } from '../types';
import { CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ExaminerCardProps {
  examiner: ExaminerDetails;
}

export const ExaminerCard = ({ examiner }: ExaminerCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/examiners/${examiner.uid}`)} className="rounded-xl cursor-pointer overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden">
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
      <CardHeader className="p-3 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl">{examiner.firstName} {examiner.lastName}</h3>
          {/* <div className="flex items-center text-yellow-500 font-medium">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span>{examiner.rating}</span>
          </div> */}
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 min-h-8`">
          {examiner.bio}
        </p>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <div className="flex justify-between items-center text-sm font-medium">
          <span className="text-black font-bold text-md">IELTS: {examiner.ieltsOverall}</span>
          <span className="text-primary">{examiner.price.toLocaleString()} so'm</span>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-[#cdff00] text-black hover:text-white" asChild>
            <Link to={`/examiners/${examiner.uid}`}>{t('examiners.viewDetail')}</Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={`https://t.me/${examiner.telegramUsername}`} target="_blank" rel="noreferrer">
              <MessageSquare className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </div>
  );
};
