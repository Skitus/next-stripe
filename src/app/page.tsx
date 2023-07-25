import Card from './components/Card/Card';
import { CardProps } from './components/Card/types';

export const mockedCards: CardProps[] = [
  {
    title: 'Hoodie',
    description: 'Cool hoodie',
    imgSrc: '/images/hoodie.png',
    link: '/hoodie',
  },
  {
    title: 'T-shirt',
    description: 'Cool t-shirt',
    imgSrc: '/images/t-shirt.png',
    link: '/t-shirt',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold pb-4">Shop Jelly</h1>
      <div className="mb-4 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left xl:grid-cols-4">
        {mockedCards.map(({ title, description, imgSrc, link }: CardProps) => (
          <Card
            key={title}
            title={title}
            description={description}
            imgSrc={imgSrc}
            link={link}
          />
        ))}
      </div>
    </main>
  );
}
