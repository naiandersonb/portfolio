import { ReactNode, HtmlHTMLAttributes } from 'react';

interface ContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export function Content({ children, ...rest }: ContentProps) {
  return (
    <div className="flex flex-col gap-4" {...rest}>
      {children}
    </div>
  );
}
