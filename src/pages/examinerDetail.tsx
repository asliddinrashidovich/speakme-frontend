import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  Clock,
  MessageSquare,
} from "lucide-react";

export const ExaminerDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const examiner = {
    uid: id,
    firstName: "John",
    lastName: "Doe",
    bio: "Professional IELTS examiner with 10 years of experience. I have helped over 500 students reach their target score of 7.0+. My approach focuses on practical strategies and building confidence. I specialize in the speaking module where I provide detailed feedback on Lexical Resource, Grammatical Range and Accuracy, Pronunciation, and Fluency/Coherence.",
    ieltsOverall: 8.5,
    ieltsListening: 9.0,
    ieltsReading: 8.5,
    ieltsWriting: 8.0,
    ieltsSpeaking: 8.5,
    age: 32,
    price: 100000,
    photoURL:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
    rating: 4.9,
    mockExamsCount: 156,
    telegramUsername: "johndoe_ielts",
    freeTime: [
      "Every Sunday: 14:00 - 20:00",
      "Saturday: 10:00 - 12:00",
      "Weekdays: 18:00 - 20:00",
    ],
  };

  return (
    <div className="container mx-auto px-4 md:px-10 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-64 h-64 rounded-3xl overflow-hidden shadow-xl shrink-0">
              <img
                src={examiner.photoURL}
                alt={examiner.firstName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl font-bold">
                    {examiner.firstName} {examiner.lastName}
                  </h1>
                </div>
                <div className="flex items-center text-muted-foreground gap-4">
                  <span>{examiner.age} years old</span>
                </div>
                <Badge className="bg-[#cdff00] text-lg px-3 text-black">
                  IELTS {examiner.ieltsOverall}
                </Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold border-b pb-2">About Me</h2>
              <p className="text-muted-foreground leading-relaxed">
                {examiner.bio}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { label: "Listening", value: examiner.ieltsListening },
                { label: "Reading", value: examiner.ieltsReading },
                { label: "Writing", value: examiner.ieltsWriting },
                { label: "Speaking", value: examiner.ieltsSpeaking },
                { label: "Overall", value: examiner.ieltsOverall },
              ].map((score) => (
                <Card
                  key={score.label}
                  className="text-center p-4 bg-muted/50 border-none"
                >
                  <div className="text-xs text-muted-foreground uppercase font-bold">
                    {score.label}
                  </div>
                  <div className="text-2xl font-bold text-[#cdff00]">
                    {score.value}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking */}
        <div className="space-y-6">
          <div className="sticky rounded-xl top-24 shadow-lg overflow-hidden">
            <CardHeader className="bg-[#cdff00] text-[#cdff00]-foreground p-6">
              <CardTitle className="text-2xl flex justify-between items-center">
                <span>{t("examiners.bookNow")}</span>
                <span className="text-sm font-normal opacity-80 decoration-white">
                  Per Session
                </span>
              </CardTitle>
              <div className="text-3xl font-bold mt-2">
                {examiner.price.toLocaleString()} soum
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Free Time
                </h4>
                <div className="space-y-2">
                  {examiner.freeTime.map((time, idx) => (
                    <div
                      key={idx}
                      className="bg-muted p-3 rounded-lg text-sm flex items-center gap-2"
                    >
                      <Calendar className="h-3 w-3" /> {time}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-[#cdff00] text-black hover:text-white h-12 text-lg font-bold" asChild>
                <a
                  href={`https://t.me/${examiner.telegramUsername}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book via Telegram
                </a>
              </Button>

              <p className="text-[10px] text-center text-muted-foreground italic">
                Booking is currently handled via Telegram. Click the button to
                start a conversation with the examiner.
              </p>
            </CardContent>
          </div>

        </div>
      </div>
    </div>
  );
};
