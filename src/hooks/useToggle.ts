import { useState } from 'react';

export function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen((prev) => !prev);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return {
    onToggle,
    onOpen,
    onClose,
    isOpen
  };
}
