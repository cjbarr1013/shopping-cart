function createFilters(filterTitles, defaultPriceFilter, products) {
  const filters = filterTitles.map((title) => {
    let optionTitles = getOptionTitles(title, products);
    return {
      title: title,
      options: optionTitles.map((optionTitle) => {
        return {
          label: createLabel(optionTitle),
          value: createValue(optionTitle),
        };
      }),
    };
  });

  return [...filters, defaultPriceFilter];
}

function getOptionTitles(title, products) {
  const optionTitles = products.map((product) => product[title]);
  return [...new Set(optionTitles)].sort((a, b) => a.localeCompare(b));
}

function createLabel(title) {
  return title
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function createValue(title) {
  return title;
}

export { createFilters };
