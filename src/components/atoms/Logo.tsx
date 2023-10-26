import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" passHref>
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500 w-[56px] h-[56px]">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.2472 21.4161L0.926758 35.0741L14.5847 21.4161L7.75572 14.5857L35.0731 0.927734L21.4152 14.5857L28.2472 21.4161Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </Link>
  );
}
