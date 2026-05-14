import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FaGoogle } from 'react-icons/fa6';

export const Auth = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(searchParams.get('mode') === 'register');
  const [loginMethod, setLoginMethod] = useState<'phone' | 'email'>('phone');
  const [showOtp, setShowOtp] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    otp: ['', '', '', '', '', '']
  });

  useEffect(() => {
    setIsRegister(searchParams.get('mode') === 'register');
  }, [searchParams]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData({ ...formData, otp: newOtp });

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginMethod === 'phone' && !showOtp) {
      setShowOtp(true);
    } else {
      console.log('Final Login/Register', formData);
      // Mock successful login
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-20 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="space-y-3 text-center">
            <motion.h1 
              key={isRegister ? 'reg' : 'log'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-black tracking-tight"
            >
              {isRegister ? t('auth.registerTitle') : t('auth.loginTitle')}
            </motion.h1>
          </div>

          <AnimatePresence mode="wait">
            {!showOtp ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <form onSubmit={handleLogin} className="space-y-5">
                  {isRegister && (
                    <div className="space-y-2">
                      <Label className="font-bold text-sm ml-1">{t('auth.fullName')} *</Label>
                      <Input 
                        className="h-14 rounded-2xl border-2 border-muted focus:border-[#cdff00] transition-all px-4 bg-muted/30"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e: any) => setFormData({...formData, fullName: e.target.value})}
                        required
                      />
                    </div>
                  )}

                  {loginMethod === 'phone' ? (
                    <div className="space-y-2">
                       <Label className="font-bold text-sm ml-1">{t('auth.phoneNumber')}</Label>
                       <div className="flex gap-0 group">
                          <div className="flex items-center gap-2 px-4 rounded-l-2xl border-2 border-r-0 border-muted bg-muted/30 group-focus-within:border-[#cdff00] transition-all">
                             <img src="https://flagcdn.com/w20/uz.png" alt="UZ" className="w-5" />
                             <span className="font-bold text-lg">+998</span>
                          </div>
                          <Input 
                            type="tel"
                            className="h-14 rounded-r-2xl rounded-l-none border-2 border-muted focus:border-[#cdff00] transition-all px-4 bg-muted/30 text-lg font-bold"
                            placeholder=" -- --- -- --"
                            value={formData.phone}
                            onChange={(e: any) => setFormData({...formData, phone: e.target.value})}
                            required
                          />
                       </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="font-bold text-sm ml-1">{t('contact.email')}</Label>
                        <Input 
                          type="email"
                          className="h-14 rounded-2xl border-2 border-muted focus:border-[#cdff00] transition-all px-4 bg-muted/30"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e: any) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="font-bold text-sm ml-1">Password</Label>
                        <Input 
                          type="password"
                          className="h-14 rounded-2xl border-2 border-muted focus:border-[#cdff00] transition-all px-4 bg-muted/30"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e: any) => setFormData({...formData, password: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="cursor-pointer w-full h-14 rounded-2xl font-bold text-lg shadow-xl shadow-[#cdff00]/20 bg-[#cdff00] text-black">
                    {isRegister ? t('nav.register') : t('nav.login')}
                  </Button>
                </form>

                <div className="text-center">
                  <Button 
                    variant="link" 
                    className="font-bold cursor-pointer text-md"
                    onClick={() => setIsRegister(!isRegister)}
                  >
                    {isRegister ? t('auth.alreadyHaveAccount') : t('auth.noAccount')}
                  </Button>
                </div>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-muted" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-muted-foreground font-bold tracking-widest">or</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Button 
                    variant="outline" 
                    className="h-14 rounded-2xl cursor-pointer border-2 font-bold gap-3 hover:bg-muted/50"
                    onClick={() => setLoginMethod(loginMethod === 'phone' ? 'email' : 'phone')}
                  >
                    {loginMethod === 'phone' ? (
                      <><Mail className="h-5 w-5" /> {isRegister ? t('auth.emailRegister') : t('auth.emailLogin')}</>
                    ) : (
                      <><Phone className="h-5 w-5" /> {t('auth.phoneLogin')}</>
                    )}
                  </Button>
                  <Button variant="outline" className="h-14 cursor-pointer rounded-2xl border-2 font-bold gap-3 hover:bg-muted/50 shadow-sm">
                    <FaGoogle className="h-5 w-5" />
                    {t('auth.googleLogin')}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">{t('auth.verificationTitle')}</h3>
                  <p className="text-muted-foreground">Kodni ushbu raqamga yubordik: <span className="font-bold text-black">+998 {formData.phone}</span></p>
                </div>

                <div className="grid grid-cols-6 gap-3">
                  {formData.otp.map((digit, i) => (
                    <Input 
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      inputMode="numeric"
                      className="h-14 text-center text-2xl font-black rounded-xl border-2 border-muted focus:border-[#cdff00]"
                      value={digit}
                      onChange={(e: any) => handleOtpChange(i, e.target.value)}
                    />
                  ))}
                </div>

                <Button variant="outline" className="w-full h-11 border-2 font-bold rounded-xl">
                  {t('auth.resendCode')}
                </Button>

                <Button 
                   onClick={handleLogin}
                   className="w-full h-14 rounded-2xl font-bold text-lg shadow-xl shadow-[#cdff00]/20"
                >
                  {t('auth.verificationTitle')}
                </Button>

                <div className="text-center">
                  <Button 
                    variant="link" 
                    className="font-bold gap-2 text-muted-foreground"
                    onClick={() => setShowOtp(false)}
                  >
                    <ArrowLeft className="h-4 w-4" /> Ortga qaytish
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&q=80&w=2000" 
          alt="Education" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[20s]"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">
          <div className="space-y-4">
            <Badge className="bg-[#cdff00] text-black hover:bg-[#cdff00]/90 border-none font-black px-4 py-1.5 rounded-xl uppercase tracking-widest text-xs">
              Verified Platform
            </Badge>
            <h2 className="text-6xl font-black tracking-tighter leading-none">
              Reach your <br/>
              <span className="text-[#cdff00] italic">Target Band</span> <br/>
              Faster.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/20">
            {[
              { label: 'Trusted Students', count: '10,000+' },
              { label: 'Certified Experts', count: '500+' },
              { label: 'Success Rate', count: '98%' },
              { label: 'Daily Mock Exams', count: '200+' }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-3xl font-black tracking-tighter text-[#cdff00]">{stat.count}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};
