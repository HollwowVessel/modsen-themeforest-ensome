const ListItemsEN = [
  'Hid mobile access ',
  'Location services',
  'Visitor management',
  'Cybersecurity coordination',
];

const ListItemsRU = [
  'Скрытый мобильный доступ',
  'Сервисы определения местоположения',
  'Управление посетителями',
  'Координация кибербезопасности',
];

export const ListItems = { en: ListItemsEN, ru: ListItemsRU };

const ServicesItemsEN = [
  'Machine learning',
  'Embed analytics',
  'Data analytics',
  'Big data consulting',
  'Artificial intelligence',
];

const ServicesItemsRU = [
  'Машинное обучение',
  'Встроить аналитику',
  'Аналитика данных',
  'Консалтинг по работе с большими данными',
  'Искусственный интеллект',
];

export const ServicesItems = { en: ServicesItemsEN, ru: ServicesItemsRU };

export const tabs = (name: string) => {
  const lowerCaseName = name.toLowerCase();
  const capitalized = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
  const res = [
    { href: 'what', text: `What is ${lowerCaseName}` },
    { href: 'types', text: `Types of ${lowerCaseName}` },
    { href: 'practices', text: `${capitalized} practices` },
    { href: 'ensome', text: `${capitalized} in Ensome` },
  ];

  return res;
};

const solutionListItemsEN = [
  `Symbol maps — convallis ex orci, nec sodales urna convallis ac.
              cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet
              auctor in vehicula arcu.`,

  `Line charts — convallis ex orci, nec sodales urna convallis ac.
              cursus non dolor eu aliquam.`,

  `Pie charts — convallis ex orci, nec sodales urna convallis ac.
              cursus non dolor eu aliquam. Aenean et nisl in magna.`,
  `Tables — convallis ex orci, nec sodales urna convallis ac. cursus
              non dolor eu aliquam. Aenean et nisl.`,

  `Histograms — convallis ex orci, nec sodales urna convallis ac.
              cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet
              auctor.`,

  `Scatter plots — convallis ex orci, nec sodales urna convallis ac.
              cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet
              auctor in vehicula arcu.`,
];

const solutionListItemsRU = [
  'Карты символов — convallis ex orci, nec sodales urn convallis ac. конечно без боли или аликвам. Aenean et nisl in magna нарушена автор в автомобильной арке.',

  'Линейные графики — convallis ex orci, nec sodales urn convallis ac. Конечно, без боли или aliquam.',

  'Круговые диаграммы — convallis ex orci, nec sodales urn convallis ac. конечно без боли или аликвам. Aenean et nisl in magna. Таблицы — convallis ex orci, nec sodales urn convallis ac. курсы ни боли, ни аликвама. Эней и нисл.',

  'Гистограммы — convallis ex orci, nec sodales urn convallis ac. конечно без боли или аликвам. Aenean et nisl in magna нарушена автор.',

  'График рассеяния — convallis ex orci, nec sodales urn convallis ac. конечно без боли или аликвам. Aenean et nisl in magna нарушена автор в автомобильной арке.',
];

export const solutionListItems = {
  en: solutionListItemsEN,
  ru: solutionListItemsRU,
};
