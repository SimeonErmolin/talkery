import { useCallback, useState } from 'react';

export const useModal = () => {
  const [modalIsOpened, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return { modalIsOpened, openModal, closeModal };
};
