import Image from 'next/image';

export function Loading() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Image
        src="/yellow-loading-img.gif"
        alt="Carregando conteúdo da página"
        width={80}
        height={80}
      />
    </div>
  );
}
