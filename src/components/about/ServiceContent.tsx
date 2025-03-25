import Image from 'next/image';

type ServiceBoxProps = {
  title: string;
  description: string;
  image: string;
  ref: React.Ref<HTMLDivElement>;
};

export const ServiceContent = ({
  title,
  description,
  image,
  ref,
}: ServiceBoxProps) => {
  return (
    <div
      ref={ref}
      className={`flex justify-between flex-wrap sm:flex-nowrap rounded-lg bg-custom60`}
    >
      <div className="flex flex-col justify-center gap-5 px-5 py-5 sm:pt-0">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="max-w-[60ch]">{description}</p>
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-r-lg"
        />
      </div>
    </div>
  );
};
