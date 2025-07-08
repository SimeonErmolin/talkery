import React from 'react';
import FiltersTemplate from './FiltersTemplate.jsx';
import useFilters from '../../../../../../shared/hooks/useFilters.js';

const topics = [
  {
    category: 'Стосунки з собою',
    items: [
      'Дратівливість',
      'Панічні атаки',
      'Самотність',
      'Спроби самогубства',
      'Депресивні стани',
      'Тривожні стани',
      'Втома',
      'Самооцінка',
      'Навʼязливі думки',
      'Хімічні залежності',
      'Психосоматика',
      'Ставлення до їжі',
    ],
  },
  {
    category: 'Стосунки з іншими',
    items: [
      'Сімейні стосунки',
      'Інтимні стосунки',
      'Романтичні стосунки',
      'Співзалежність',
      'Абʼюз та емоційне насилля',
    ],
  },
  {
    category: 'Діяльність',
    items: [
      'Емоційне вигорання',
      'Самовизначення',
      'Ставлення до грошей',
      'Прокрастинація',
    ],
  },
  {
    category: 'Нові умови життя',
    items: [
      'Втрата та горе',
      'Адаптація, еміграція',
      'Народження дитини',
      'ПТСР',
      'Кризи і травми',
    ],
  },
];

const qualifications = [
  'Психолог',
  'Психотерапевт',
  'Сексолог',
  'Психіатр',
  'Психотравматолог',
  'Коуч',
];
const approaches = [
  'Екзистенціальний',
  'Символдрама',
  'Транзакційний aналіз',
  'Позитивна психотерапія',
  'Психодрама',
  'Терапія залежностей',
  'Гештальт',
  'Психоаналіз',
  'Наративна психотерапія',
  'Арт терапія',
  'КПТ',
  'EMDR',
];
const genders = ['Чоловік', 'Жінка'];
const prices = ['20€', '30€', '50€'];

const PsychologistFilters = () => {
  const { expanded, selectedItems, toggleExpand, toggleSelect, clearFilters } =
    useFilters();

  const sections = [
    {
      type: 'dropdown',
      title: 'Теми',
      description: 'Оберіть до 5 запитів, які ви бажаєте вирішити',
      items: topics,
    },
    {
      type: 'filter',
      title: 'Кваліфікація',
      items: qualifications,
    },
    {
      type: 'filter',
      title: 'Підхід',
      items: approaches,
    },
    {
      type: 'filter',
      title: 'Стать',
      classNameDiv: 'line',
      items: genders,
    },
    {
      type: 'filter',
      title: 'Ціна',
      classNameDiv: 'line',
      items: prices,
    },
  ];

  return (
    <FiltersTemplate
      sections={sections}
      selectedItems={selectedItems}
      toggleExpand={toggleExpand}
      expanded={expanded}
      toggleSelect={toggleSelect}
      clearFilters={clearFilters}
    />
  );
};

export default PsychologistFilters;
