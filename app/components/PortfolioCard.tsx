import Image from 'next/image';

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
}

export function PortfolioCard({ title, description, imageUrl, aiHint }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80">
      <Image
        src={imageUrl}
        alt={title}
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        data-ai-hint={aiHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-headline text-white drop-shadow-md">{title}</h3>
        <div className="max-h-0 opacity-0 group-hover:max-h-full group-hover:opacity-100 transition-all duration-500 ease-in-out mt-2">
          <p className="text-primary">{description}</p>
        </div>
      </div>
    </div>
  );
}
