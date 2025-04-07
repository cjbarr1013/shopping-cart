import styles from '../styles/Shop.module.css';
import Sidebar from './Sidebar';
import ShopCard from './ShopCard';
import SortDropdown from './SortDropdown';
import defaultShopProducts from '../data/defaultShopProducts';
import { defaultPriceFilter } from '../data/defaultFilters';

import { useState, useRef, useEffect } from 'react';

function Shop({ products = defaultShopProducts }) {
  const filters = useRef(createFilters());
  const filteredProducts = useRef(products);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedSort, setSelectedSort] = useState('alpha');

  useEffect(() => {
    const filterKeys = Object.keys(selectedFilters);

    if (filterKeys.length > 0) {
      filteredProducts.current = products.filter((product) => {
        return filterKeys.every((key) => {
          return selectedFilters[key].includes(product[key]);
        });
      });
    } else {
      filteredProducts.current = products;
    }
  }, [selectedFilters, products]);

  useEffect(() => {
    const sorted = filteredProducts.current.sort((a, b) => {
      if (selectedSort === 'alpha') {
        return a.title.localeCompare(b.title);
      } else if (selectedSort === 'l2h') {
        return a.price - b.price;
      } else if (selectedSort === 'h2l') {
        return b.price - a.price;
      }
      return 0;
    });

    filteredProducts.current = sorted;
    console.log('Filtered products:', filteredProducts.current);
  }, [selectedSort, filteredProducts]);

  function handleFilterChange(e, title) {
    const { value, checked } = e.target;
    if (checked) {
      if (!selectedFilters[title]) {
        setSelectedFilters({ ...selectedFilters, [title]: [value] });
      } else {
        setSelectedFilters({
          ...selectedFilters,
          [title]: [...selectedFilters[title], value],
        });
      }
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [title]: [...selectedFilters[title]].filter(
          (option) => option !== value
        ),
      });
    }
  }

  function createFilters() {
    const filterTitles = ['category'];
    const filters = filterTitles.map((title) => {
      let optionTitles = getOptionTitles(title);
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

  function getOptionTitles(title) {
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
    return title.split(' ').join('-').toLowerCase();
  }

  return (
    <div className={styles.shopContainer}>
      <Sidebar
        filters={filters.current}
        handleSelect={handleFilterChange}
      ></Sidebar>
      <div className={styles.mainContainer}>
        <div className={styles.dropdownContainer}>
          <SortDropdown
            handleChange={(e) => setSelectedSort(e.target.value)}
          ></SortDropdown>
        </div>
        <div className={styles.productsContainer}>
          {filteredProducts.current.map((product) => (
            <ShopCard key={product.id} product={product}></ShopCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
