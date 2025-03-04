import Image from 'next/image';

export default function ContainerOptions() {
  return (
    <section className="full-width-container text-custom10">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <a
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/specialists"
        >
          <Image src="/Medic.svg" alt="medical icon" width={72} height={72} />
          <h2>Encontre especialistas</h2>
        </a>
        <a
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/appointments"
        >
          <Image
            src="/Calendar.svg"
            alt="calendar icon"
            width={72}
            height={72}
          />
          <h2>Agende consultas</h2>
        </a>
        <a
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/reminders"
        >
          <Image
            src="/Reminder.svg"
            alt="reminder icon"
            width={72}
            height={72}
          />
          <h2>Defina Lembretes</h2>
        </a>
        <a
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/assess"
        >
          <Image src="/Assess.svg" alt="assess icon" width={72} height={72} />
          <h2>Avalie o serviço</h2>
        </a>
      </div>
    </section>
  );
}
