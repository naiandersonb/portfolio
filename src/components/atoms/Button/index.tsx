import Image from 'next/image';
import { HtmlHTMLAttributes, useMemo } from 'react';
import { ButtonProps as BProps } from './interface';

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & BProps;

export function Button({ children, icon, ...rest }: ButtonProps) {
  const iconElement = useMemo(() => {
    if (!icon) return null;

    if (typeof icon === 'string')
      return <Image width={17} height={17} alt="" src={icon} />;

    return icon;
  }, [icon]);

  return (
    <button
      className="
        dark:bg-zinc-900 
        bg-zinc-200 
        dark:text-zinc-50 
        text-zinc-900 
        p-1 px-3 
        rounded-full 
        w-[max-content]
      "
      {...rest}
    >
      <div className="flex flex-row gap-2 items-center h-[20px]">
        {!!iconElement && (
          <div className="w-[20px] h-[20px] flex items-center justify-start">
            {iconElement}{' '}
          </div>
        )}
        {children}
      </div>
    </button>
  );
}
