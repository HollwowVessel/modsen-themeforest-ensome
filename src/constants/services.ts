export const ListItems = [
  'Hid mobile access ',
  'Location services',
  'Visitor management',
  'Cybersecurity coordination',
];

export const ServicesItems = [
  'Machine learning',
  'Embed analytics',
  'Data analytics',
  'Big data consulting',
  'Artificial intelligence',
];

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

export const solutionListItems = [
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
