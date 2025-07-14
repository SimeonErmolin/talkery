import React from 'react';
import { useTranslation } from 'react-i18next';
import BottomSheetLayout from '../../BottomSheetLayout.jsx';

const LanguageMenu = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();

  return (
    <BottomSheetLayout isOpen={isOpen} onClose={onClose} title="Мова додатку">
      <div
        className={`option ${i18n.language.includes('ua') ? 'checked' : ''}`}
        onClick={() => i18n.changeLanguage('ua')}
      >
        Українська
      </div>
      <div
        className={`option ${i18n.language.includes('ru') ? 'checked' : ''}`}
        onClick={() => i18n.changeLanguage('ru')}
      >
        Русский
      </div>
    </BottomSheetLayout>
  );
};

export default LanguageMenu;
