import Banner from '@/components/banner/Banner';
import ContainerFilter from '@/components/filter/ContainerFilter';
import Header from '@/components/header/Header';
import ContainerOptions from '@/components/optionsUser/ContainerOptions';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContainerFilter />
        <ContainerOptions />
      </main>
    </>
  );
}
