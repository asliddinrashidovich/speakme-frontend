import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { FaChrome } from 'react-icons/fa6';

export const Auth = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    console.log('Google login');
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email login', email, password);
  };

  return (
    <div className="container mx-auto max-w-md py-20 px-4">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{t('auth.loginTitle')}</CardTitle>
          <CardDescription>
            Join Speak Pro to start your IELTS journey
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={handleGoogleLogin}>
            <FaChrome className="h-5 w-5 text-red-500" />
            {t('auth.googleLogin')}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email" className="space-y-4 pt-4">
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t('contact.email')}</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">{t('nav.login')}</Button>
              </form>
            </TabsContent>
            <TabsContent value="phone" className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="phone">{t('contact.phone')}</Label>
                <div className="flex gap-2">
                  <Input id="phone" type="tel" placeholder="+998" />
                </div>
                <Button className="w-full">{t('auth.phoneLogin')}</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="justify-center">
           <p className="text-sm text-muted-foreground">
             By continuing, you agree to our Terms of Service.
           </p>
        </CardFooter>
      </Card>
    </div>
  );
};
