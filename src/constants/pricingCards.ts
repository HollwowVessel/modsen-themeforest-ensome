const pricingCardsEN = [
  {
    type: 'Free trial',
    price: '$00',
    options: ['For small teams – 5 users', 'Community support'],
  },
  {
    type: 'Lite',
    price: '$99',
    options: [
      'For small teams – 15 users',
      'Individual support',
      'Individual data – 60GB',
    ],
  },
  {
    type: 'Basic',
    price: '$00',
    options: [
      'For big teams – 30 users',
      'Individual support',
      'Individual data – 120GB',
      'Advanced permissions',
    ],
  },
  {
    type: 'For enterprises',
    price: 'Custom',
    options: [
      'Unlimited team members',
      'Individual support',
      'Unlimited Individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
  },
];
const pricingCardsRU = [
  {
    type: 'Бесплатная пробная версия',
    price: '$00',
    options: ['Для маленьких команд – 5 пользователей', 'Поддержка коммунити'],
  },
  {
    type: 'Немного',
    price: '$99',
    options: [
      'Для небольших команд — 15 пользователей',
      'Индивидуальная поддержка',
      'Индивидуальные данные — 60 ГБ',
    ],
  },
  {
    type: 'Базовый',
    price: '$00',
    options: [
      'Для больших команд — 30 пользователей',
      'Индивидуальная поддержка',
      'Индивидуальные данные — 120 ГБ',
      'Расширенные разрешения',
    ],
  },
  {
    type: 'Для предприятий',
    price: 'Шо',
    options: [
      'Неограниченное количество членов команды',
      'Индивидуальная поддержка',
      'Неограниченные Индивидуальные данные',
      'Расширенные разрешения',
      'История данных',
      'Журнал аудита',
      'Все функции включены',
    ],
  },
];

export const pricingCards = { en: pricingCardsEN, ru: pricingCardsRU };
