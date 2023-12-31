import { useTranslate } from '@/contexts/AppTranslateContext';

export function ResumeButton() {
  const { t } = useTranslate('home');

  return (
    <a
      href="/resume"
      className="dark:bg-zinc-800 bg-zinc-200 w-[max-content] py-4 px-8 font-inter font-bold rounded-full dark:text-zinc-50 text-zinc-900 cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      {t('resumeButton')}
    </a>
  );
}
