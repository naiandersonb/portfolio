'use client';

import { Icon } from '@phosphor-icons/react';
import { HtmlHTMLAttributes, useRef, useState } from 'react';

interface IconButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon: Icon;
}

export function IconButton({
  icon: Icon,
  title = '',
  ...props
}: IconButtonProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasTitle = !!title;
  return (
    <button
      className={`
      dark:text-zinc-50 text-zinc-950
      dark:bg-zinc-900 bg-zinc-50
      flex items-center
      rounded-full p-2
      transition-all ease-in-out duration-500 
      font-manrope text-sm
    `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <Icon size={22} />

      {hasTitle && (
        <div
          style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
          className="overflow-x-hidden transition-all duration-300 ease-out"
        >
          <span ref={ref} className="px-1.5">
            {title}
          </span>
        </div>
      )}
    </button>
  );
}

// 'use client';

// import { Icon } from '@phosphor-icons/react';
// import { HtmlHTMLAttributes, ReactNode, useRef, useState } from 'react';

// interface IconButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
//   children?: ReactNode;
//   icon: Icon;
// }

// export function IconButton({
//   icon: Icon,
//   children = null,
//   ...props
// }: IconButtonProps) {
//   const hasChildren = !!children;

//   const [hovered, setHovered] = useState(false);
//   const ref = useRef<HTMLSpanElement>(null);

//   return (
//     <button
//     // className={`
//     //   flex p-2 items-center rounded-lg
//     //   text-white ${color || 'bg-gray-600'}
//     // `}
//     onMouseEnter={() => setHovered(true)}
//     onMouseLeave={() => setHovered(false)}
//       {...props}
//     >
//       {children}
//       <div
//         style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
//         className="overflow-x-hidden transition-all duration-300 ease-out"
//       >
//         {hasChildren && (
//           <span ref={ref} className="px-1.5">
//             {hasChildren}
//           </span>
//         )}
//       </div>
//     </button>
//   );
// }
