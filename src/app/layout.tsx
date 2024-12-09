import './globals.css'; 
import Header from '../Components/Header';
import Footer from '@/Footer';


export const metadata = {
  title: 'UI/UX Hackathon',
  description: 'A Next.js TypeScript-based project',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
