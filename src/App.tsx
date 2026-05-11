import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Examiners } from './pages/examiners';
import { ExaminerDetail } from './pages/examinerDetail';
import { BecomeExaminer } from './pages/becomeExaminerPage';
import { Profile } from './pages/profile';
import { Auth } from './pages/authPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examiners" element={<Examiners />} />
            <Route path="/examiners/:id" element={<ExaminerDetail />} />
            <Route path="/become-examiner" element={<BecomeExaminer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
