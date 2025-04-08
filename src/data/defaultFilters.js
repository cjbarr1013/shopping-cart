const defaultFilters = [
  {
    title: 'Category',
    options: [
      { label: 'Option 1', value: 'option1', checked: false },
      { label: 'Option 2', value: 'option2', checked: false },
      { label: 'Option 3', value: 'option3', checked: false },
    ],
  },
  {
    title: 'Shop By Price',
    options: [
      { label: '$0 - $50', value: '[0,50]', checked: false },
      { label: '$50 - $100', value: '[50,100]', checked: false },
      { label: '$100 - $250', value: '[100,250]', checked: false },
    ],
  },
];

const defaultPriceFilter = {
  title: 'shop by price',
  options: [
    { label: '$0 - $50', value: '[0,50]', checked: false },
    { label: '$50 - $100', value: '[50,100]', checked: false },
    { label: '$100 - $250', value: '[100,250]', checked: false },
    { label: '$250 - $500', value: '[250,500]', checked: false },
    { label: '$500+', value: '[500,100000]', checked: false },
  ],
};

export { defaultFilters, defaultPriceFilter };
