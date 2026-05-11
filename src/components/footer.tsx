import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Speak Pro</h3>
            <p className="text-sm text-muted-foreground">
              Empowering students to achieve their IELTS dreams through quality mock exams and expert feedback.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/examiners" className="hover:text-primary transition-colors">Find Examiner</Link></li>
              <li><Link to="/become-examiner" className="hover:text-primary transition-colors">Become Examiner</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social Networks</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaInstagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaTwitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FaFacebook className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2"><Mail className="h-4 w-4" /> <span>support@speakpro.uz</span></li>
              <li className="flex items-center space-x-2"><Phone className="h-4 w-4" /> <span>+998 90 123 45 67</span></li>
              <li className="flex items-center space-x-2"><MapPin className="h-4 w-4" /> <span>Tashkent, Uzbekistan</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Speak Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
