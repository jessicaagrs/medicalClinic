import Banner from '@/components/banner/Banner';
import ContainerFilter from '@/components/filter/ContainerFilter';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ContainerOptions from '@/components/optionsUser/ContainerOptions';
import Testimonials from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContainerFilter />
        <ContainerOptions />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
