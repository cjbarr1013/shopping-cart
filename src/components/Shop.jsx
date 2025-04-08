import styles from '../styles/Shop.module.css';
import Sidebar from './Sidebar';
import ShopCard from './ShopCard';
import SortDropdown from './SortDropdown';
import defaultShopProducts from '../data/defaultShopProducts';
import { defaultPriceFilter } from '../data/defaultFilters';
import { createFilters } from '../utils/shopUtils';

import { useState, useRef } from 'react';

function Shop({ products = defaultShopProducts }) {
  const filters = useRef(
    createFilters(['category'], defaultPriceFilter, products)
  );
  const selectedFilters = useRef({});
  const selectedSort = useRef('alpha');
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleSortChange(value) {
    selectedSort.current = value;
    const sorted = sortProducts([...filteredProducts]);
    setFilteredProducts(sorted);
  }

  function handleFilterChange(e, title) {
    const { value, checked } = e.target;
    organizeFilter(title, value, checked);

    const filterTitles = Object.keys(selectedFilters.current);
    if (filterTitles.length > 0) {
      setFilteredProducts(sortProducts(filterProducts(filterTitles)));
    } else {
      setFilteredProducts(sortProducts(products));
    }
  }

  function organizeFilter(title, value, checked) {
    if (checked) {
      // Check if key exists for title (is there already a filter selected under this title?)
      if (!selectedFilters.current[title]) {
        // If not, create a key
        selectedFilters.current = {
          ...selectedFilters.current,
          [title]: [value],
        };
      } else {
        // If it does, add the new value to the array of values for that key
        selectedFilters.current = {
          ...selectedFilters.current,
          [title]: [...selectedFilters.current[title], value],
        };
      }
    } else {
      // If the user has unchecked it, remove the value from the array
      selectedFilters.current = {
        ...selectedFilters.current,
        [title]: [...selectedFilters.current[title]].filter(
          (option) => option !== value
        ),
      };
      // If the array is empty, remove the key from the object
      if (selectedFilters.current[title].length === 0) {
        delete selectedFilters.current[title];
      }
    }
  }

  function sortProducts(products) {
    return products.sort((a, b) => {
      if (selectedSort.current === 'alpha') {
        return a.title.localeCompare(b.title);
      } else if (selectedSort.current === 'l2h') {
        return a.price - b.price;
      } else if (selectedSort.current === 'h2l') {
        return b.price - a.price;
      }
      return 0;
    });
  }

  function filterProducts(titles) {
    return products.filter((product) => {
      return titles.every((title) => {
        return selectedFilters.current[title].includes(product[title]);
      });
    });
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
            handleChange={(e) => handleSortChange(e.target.value)}
          ></SortDropdown>
        </div>
        <div className={styles.productsContainer}>
          {filteredProducts.map((product) => (
            <ShopCard key={product.id} product={product}></ShopCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
