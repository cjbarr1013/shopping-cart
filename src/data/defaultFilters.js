const defaultFilters = [
  {
    title: 'Category',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
  {
    title: 'Shop By Price',
    options: [
      { label: '$0 - $50', value: '[0,50]' },
      { label: '$50 - $100', value: '[50,100]' },
      { label: '$100 - $250', value: '[100,250]' },
    ],
  },
];

const defaultPriceFilter = {
  title: 'shop by price',
  options: [
    { label: '$0 - $50', value: '[0,50]' },
    { label: '$50 - $100', value: '[50,100]' },
    { label: '$100 - $250', value: '[100,250]' },
    { label: '$250 - $500', value: '[250,500]' },
    { label: '$500+', value: '[500,100000]' },
  ],
};

export { defaultFilters, defaultPriceFilter };
