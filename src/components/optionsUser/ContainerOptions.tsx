import Image from 'next/image';
import Link from 'next/link';

export default function ContainerOptions() {
  return (
    <section className="full-width-container text-custom10">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <Link
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/specialists"
        >
          <Image src="/icons/Medic.svg" alt="medical icon" width={72} height={72} />
          <h2>Encontre especialistas</h2>
        </Link>
        <Link
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/appointments"
        >
          <Image
            src="/icons/Calendar.svg"
            alt="calendar icon"
            width={72}
            height={72}
          />
          <h2>Agende consultas</h2>
        </Link>
        <Link
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/reminders"
        >
          <Image
            src="/icons/Reminder.svg"
            alt="reminder icon"
            width={72}
            height={72}
          />
          <h2>Defina Lembretes</h2>
        </Link>
        <Link
          className="flex flex-col items-center gap-3 w-72 max-w-72 bg-custom40 py-5 px-3 rounded-lg shadow-md"
          href="/assess"
        >
          <Image src="/icons/Assess.svg" alt="assess icon" width={72} height={72} />
          <h2>Avalie o serviço</h2>
        </Link>
      </div>
    </section>
  );
}
