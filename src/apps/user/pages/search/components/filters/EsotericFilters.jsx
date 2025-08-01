import React from 'react';
import FiltersTemplate from './FiltersTemplate.jsx';
import useFilters from '../../../../../../shared/hooks/useFilters.js';

const topics = [
  {
    category: 'Послуги астрологів',
    items: [
      'Персональний гороскоп',
      'Синастрія',
      'Натальна карта',
      'Прогноз астролога',
      'Елективна астрологія',
      'Кармічна астрологія',
      'Хорарна астрологія',
      'Астрологія бізнесу',
      'Дитяча астрологія',
      'Фінансова астрологія',
      'Астрокартографія',
      'Медична астрологія',
    ],
  },
  {
    category: 'Послуги космоенергетів',
    items: [
      'Енергетична діагностика',
      'Очищення енергетичного поля',
      'Гармонізація чакр та аури',
      'Космоенергетичне зцілення',
      'Корекція долі',
      'Захист від негативу',
      'Залучення благополуччя',
      'Робота зі стосунками',
      'Активація духовності',
    ],
  },
  {
    category: 'Послуги нумерологів',
    items: [
      'Аналіз за датою народження',
      'Сумісність партнерів',
      'Прогноз на рік',
      'Код долі та карма',
      'Розрахунок щасливих чисел',
      'Вибір імені та прізвища',
      'Підбір дати для урочистих подій',
      'Сумісність із професією',
      'Фінансова нумерологія',
    ],
  },
  {
    category: 'Послуги регресологів',
    items: [
      'Регресія в минулі життя',
      'Регрес у дитячі спогади',
      'Робота зі стосунками',
      'Розкриття талантів',
      'Виявлення призначення',
      'Діагностика та зцілення родових програм',
      'Зняття фобій та страхів',
      'Робота з психосоматикою',
      'Корекція негативних установок',
    ],
  },
  {
    category: 'Послуги тарологів',
    items: [
      'Ворожіння на ситуацію',
      'Прогноз на майбутнє',
      'Сумісність у стосунках',
      'Любовна діагностика',
      'Фінансовий розклад',
      'Допомога у прийнятті рішень',
      'Діагностика негативу',
      'Родові програми та карма',
      'Корекція ситуацій',
    ],
  },
  {
    category: 'Послуги медіумів',
    items: [
      'Контакт із померлим',
      'Читання енергетичного поля',
      'Поради від духовних наставників',
      'Регресія у минуле',
      'Передбачення майбутнього',
      'Чищення енергетичного поля',
      'Робота з родовою програмою',
      'Опрацювання страхів і фобій',
      'Очищення від негативу',
    ],
  },
  {
    category: 'Послуги Human дизайнерів',
    items: [
      'Індивідуальний розбір карти',
      'Сумісність та стосунки',
      "Кар'єра та призначення",
      'Дизайн людини + коучінг',
      'Дизайн людини + бізнес',
    ],
  },
];

const specialists = [
  'Космоенергет',
  'Регресолог',
  'Астролог',
  'Нумеролог',
  'Human дизайнер',
  'Таролог',
  'Медіум',
];
const languages = ['Українська', 'Російська'];
const genders = ['Чоловік', 'Жінка'];
const prices = ['30€', '50€', '100€', '200€'];

const EsotericFilters = () => {
  const { expanded, selectedItems, toggleExpand, toggleSelect, clearFilters } =
    useFilters();

  const sections = [
    {
      type: 'filter',
      title: 'Фахівець',
      classNameH3: 'first',
      classNameDiv: 'first',
      items: specialists,
    },
    {
      type: 'dropdown',
      title: 'Послуги',
      description: 'Оберіть до 5 послуг які вас цікавлять',
      items: topics,
    },
    {
      type: 'filter',
      title: 'Мова',
      classNameDiv: 'double-col',
      items: languages,
    },
    {
      type: 'filter',
      title: 'Стать',
      classNameDiv: 'double-col',
      items: genders,
    },
    {
      type: 'filter',
      title: 'Ціна',
      classNameDiv: 'double-col',
      items: prices,
    },
  ];

  return (
    <FiltersTemplate
      title="Фільтр"
      sections={sections}
      selectedItems={selectedItems}
      toggleExpand={toggleExpand}
      expanded={expanded}
      toggleSelect={toggleSelect}
      clearFilters={clearFilters}
    />
  );
};

export default EsotericFilters;
