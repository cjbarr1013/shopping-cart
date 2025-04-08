import styles from '../styles/Shop.module.css';
import Sidebar from './Sidebar';
import ShopCard from './ShopCard';
import SortDropdown from './SortDropdown';
import defaultShopProducts from '../data/defaultShopProducts';
import { defaultPriceFilter } from '../data/defaultFilters';
import {
  createFilters,
  getFilterIndex,
  getOptionIndex,
  checkForCheckedFilters,
} from '../utils/shopUtils';

import { useState, useRef } from 'react';

function Shop({ products = defaultShopProducts }) {
  const filters = useRef(
    createFilters(['category'], defaultPriceFilter, products)
  );
  const selectedSort = useRef('alpha');
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleSortChange(value) {
    selectedSort.current = value;
    const sorted = sortProducts([...filteredProducts]);
    setFilteredProducts(sorted);
  }

  function handleFilterChange(e, title) {
    const { value, checked } = e.target;
    toggleFilterChecked(title, value, checked);
    setFilteredProducts(sortProducts(filterProducts()));
  }

  function toggleFilterChecked(title, value, checked) {
    const filterIndex = getFilterIndex(title, filters.current);
    const optionIndex = getOptionIndex(filterIndex, value, filters.current);
    filters.current[filterIndex].options[optionIndex].checked = checked;
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

  function filterProducts() {
    console.log(filters.current);
    if (!checkForCheckedFilters(filters.current)) {
      return products;
    }

    return products.filter((product) => {
      return filters.current.every((filter) => {
        // If there are no options checked under this filter, return true
        if (!checkForCheckedFilters(filters.current, filter.title)) {
          return true;
        }
        // If there are, make sure atleast one option matches the product
        for (const option of filter.options) {
          if (option.checked && product[filter.title] === option.value) {
            return true;
          }
        }
        return false;
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
