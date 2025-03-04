import Banner from '@/components/banner/Banner';
import ContainerFilter from '@/components/filter/ContainerFilter';
import Header from '@/components/header/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ContainerFilter />
      </main>
    </>
  );
}
