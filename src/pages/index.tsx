import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/Home/Hero';
import { Notification } from '../components/Home/Notification';

export default function Home() {
  return (
    <div className="bg-gray-0 bg-home bg-no-repeat bg-cover flex flex-col justify-between min-h-screen">
      <Header />
      <div className="relative flex-grow">
        <Notification />
        <HomeHero />
      </div>
      <Footer />
    </div>
  );
}
