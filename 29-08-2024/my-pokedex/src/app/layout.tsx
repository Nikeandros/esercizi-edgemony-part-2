import '../app/globals.css';
import BackgroundMusic from '../app/components/BackgroundMusic';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}