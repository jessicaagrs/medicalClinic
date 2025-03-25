'use client';

import { ServiceContent } from '@/components/about/ServiceContent';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Agendamento de Consultas Médicas',
    description:
      'Encontre médicos especializados de forma rápida e agende sua consulta com apenas alguns cliques. Nosso sistema permite que você escolha o profissional, a especialidade e o horário mais conveniente, garantindo praticidade e segurança no seu atendimento.',
    image: '/services/service1.jpg',
  },
  {
    title: 'Agendamento de Exames',
    description:
      'Marque seus exames laboratoriais e de imagem com facilidade. Com um processo simples e intuitivo, você pode selecionar o exame necessário, conferir a disponibilidade e garantir seu atendimento sem complicações.',
    image: '/services/service2.jpg',
  },
  {
    title: 'Telemedicina',
    description:
      'Cuide da sua saúde sem sair de casa! Com nosso serviço de telemedicina, você pode realizar consultas online com médicos qualificados, receber diagnósticos e prescrições digitais, tudo com segurança e conforto.',
    image: '/services/service3.jpg',
  },
];

export default function About() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    refs.current.forEach((ref) => {
      if (ref) {
        const { top } = ref.getBoundingClientRect();
        const isVisible = top < window.innerHeight && top > 0;
        if (isVisible) {
          ref.classList.add('pulse');
        } else {
          ref.classList.remove('pulse');
        }
      }
    });
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <Header />
      <section className="full-width-container flex flex-col gap-8">
        <h1 className="mt-8 text-xl font-semibold ml-5 lg:ml-0">
          Conheça nossos serviços
        </h1>
        <ul className="flex flex-col gap-8 mx-5 lg:mx-0">
          {services.map((service, index) => (
            <li key={service.title}>
              <ServiceContent
                ref={(el: HTMLDivElement | null) => {
                  refs.current[index] = el;
                }}
                description={service.description}
                image={service.image}
                title={service.title}
              />
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
