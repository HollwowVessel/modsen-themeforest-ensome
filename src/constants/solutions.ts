import dataIntegration from '@/assets/images/icons/solutions/solutions1.svg';
import data from '@/assets/images/icons/solutions/solutions2.svg';
import bigData from '@/assets/images/icons/solutions/solutions3.svg';
import warehousing from '@/assets/images/icons/solutions/solutions4.svg';
import selfService from '@/assets/images/icons/solutions/solutions5.svg';
import visualization from '@/assets/images/icons/solutions/solutions6.svg';

const solutionsItemsEN = [
  {
    id: 0,
    img: dataIntegration,
    heading: 'Data integration',
    description:
      'Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.',
  },
  {
    id: 1,
    img: data,
    heading: 'Data integration',
    description:
      'Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.',
  },
  {
    id: 2,
    img: bigData,
    heading: 'Big data',
    description:
      'Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.',
  },
  {
    id: 3,
    img: warehousing,
    heading: 'Data warehousing',
    description:
      'The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.',
  },
  {
    id: 4,
    img: selfService,
    heading: 'Self-service BI',
    description:
      'Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.',
  },
  {
    id: 5,
    img: visualization,
    heading: 'Data visualization',
    description:
      'Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)',
  },
];
const solutionsItemsRU = [
  {
    id: 0,
    img: dataIntegration,
    heading: 'Интеграция данных',
    description:
      'Извлекать, преобразовывать, загружать (ETL) или извлекать, загружать, преобразовывать (ELT); внедрение управления данными (безопасность, доступность, качество).',
  },
  {
    id: 1,
    img: data,
    heading: 'Интеграция данных',
    description:
      'Подготовка данных и управление ими; машинное обучение (ML); разработка и внедрение решений в области искусственного интеллекта (AI).',
  },
  {
    id: 2,
    img: bigData,
    heading: 'Большие данные',
    description:
      'Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.',
  },
  {
    id: 3,
    img: warehousing,
    heading: 'Хранилище данных',
    description:
      'Процесс создания и использования хранилища данных. Проектирование и внедрение хранилищ данных и витрин с данными.',
  },
  {
    id: 4,
    img: selfService,
    heading: 'Система самообслуживания BI',
    description:
      'Бизнес-аналитика; проектирование и внедрение инфраструктуры анализа данных; выполнение запросов к запланированной аналитике и составление отчетов.',
  },
  {
    id: 5,
    img: visualization,
    heading: 'Визуализация данных',
    description:
      'Интерактивная панель мониторинга; пользовательские и предварительно созданные визуальные эффекты; множество методов визуализации (карты символов, линейные диаграммы, круговые диаграммы ...)',
  },
];

export const solutionsItems = { en: solutionsItemsEN, ru: solutionsItemsRU };
