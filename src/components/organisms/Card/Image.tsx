import NextImage from 'next/image';

interface ImageProps {
  src?: string;
  alt?: string;
}

function randomColor(): string {
  const colorHex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += colorHex.charAt(randomIndex);
  }

  return color;
}

export function Image({ src, alt = '' }: ImageProps) {
  if (src) return <NextImage src={src} width={548} height={548} alt={alt} />;

  return (
    <div
      className={`bg-[${randomColor()}] max-w-[548px] max-h-[548px] w-[100%] h-[100%]`}
    />
  );
}
