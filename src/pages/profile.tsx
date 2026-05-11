import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/useAuthStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Separator } from '../components/ui/separator';
import { Badge } from '../components/ui/badge';
import { Settings, LogOut, BookOpen, User as UserIcon } from 'lucide-react';

export const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuthStore();

  // Mock user for UI presentation if not logged in
  const displayUser = user || {
    displayName: 'Asliddin Rashidovich',
    email: 'asliddin@example.com',
    phoneNumber: '+998 90 000 00 00',
    telegramUsername: 'asliddin_dev',
    photoURL: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    role: 'student'
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <Avatar className="w-24 h-24 mx-auto border-4 border-primary/10">
                <AvatarImage src={displayUser.photoURL || "test"} alt={displayUser?.displayName || "image"} />
                 <AvatarFallback><UserIcon /></AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{displayUser.displayName}</h3>
                <Badge variant={displayUser.role === 'examiner' ? 'default' : 'secondary'} className="capitalize">
                  {displayUser.role}
                </Badge>
              </div>
              <Separator />
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start items-center">
                  <UserIcon className="mr-2 h-4 w-4" /> My Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start items-center">
                  <BookOpen className="mr-2 h-4 w-4" /> My Bookings
                </Button>
                <Button variant="ghost" className="w-full justify-start items-center">
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start items-center text-destructive hover:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('profile.personalInfo')}</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>First Name</Label>
                  <Input defaultValue={displayUser.displayName?.split(' ')[0]} />
                </div>
                <div className="space-y-1">
                  <Label>Last Name</Label>
                  <Input defaultValue={displayUser.displayName?.split(' ')[1]} />
                </div>
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input defaultValue={displayUser?.email || ""} disabled />
                </div>
                <div className="space-y-1">
                  <Label>Phone Number</Label>
                  <Input defaultValue={displayUser?.phoneNumber || ""} />
                </div>
                <div className="space-y-1">
                  <Label>Telegram Username</Label>
                  <Input defaultValue={displayUser?.telegramUsername || ""} />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {displayUser.role === 'student' && (
            <Card className="bg-primary/5 border-dashed border-primary">
              <CardHeader>
                <CardTitle>Become an Examiner</CardTitle>
                <CardDescription>Are you an IELTS expert? Join our team of examiners today!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/become-examiner">Register as Examiner</a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
