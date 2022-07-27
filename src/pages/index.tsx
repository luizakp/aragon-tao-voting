import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/Home/Hero';

export default function Home() {
  return (
    <div className="2xl:h-screen bg-gray-0 flex flex-col justify-between">
      <Header />
      <HomeHero />
      <Footer />
    </div>
  );
}
