import { defaultPriceFilter } from '../data/defaultFilters';

function addPriceRange(products) {
  const priceRanges = defaultPriceFilter.options.map((option) => {
    return {
      range: JSON.parse(option.value),
      value: option.value,
    };
  });

  return products.map((product) => {
    const price = product.price;
    const priceRange = priceRanges.find((range) => {
      return price >= range.range[0] && price <= range.range[1];
    });
    return {
      ...product,
      'shop by price': priceRange ? priceRange.value : null,
    };
  });
}

function createFilters(filterTitles, products) {
  const filters = filterTitles.map((title) => {
    let optionTitles = getOptionTitles(title, products);
    return {
      title: title,
      options: optionTitles.map((optionTitle) => {
        return {
          label: createLabel(optionTitle),
          value: createValue(optionTitle),
          checked: false,
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

function getFilterIndex(title, filters) {
  return filters.findIndex((filter) => filter.title === title);
}

function getOptionIndex(filterIndex, value, filters) {
  return filters[filterIndex].options.findIndex(
    (option) => option.value === value
  );
}

function checkForCheckedFilters(filters, title = undefined) {
  if (title) {
    const filterIndex = getFilterIndex(title, filters);
    return filters[filterIndex].options.some((option) => option.checked);
  } else {
    return filters.some((filter) =>
      filter.options.some((option) => option.checked)
    );
  }
}

export {
  addPriceRange,
  createFilters,
  getFilterIndex,
  getOptionIndex,
  checkForCheckedFilters,
};
