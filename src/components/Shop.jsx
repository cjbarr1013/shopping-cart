import styles from '../styles/Shop.module.css';
import Sidebar from './Sidebar';
import ShopCard from './ShopCard';
import SortDropdown from './SortDropdown';
import {
  addPriceRange,
  createFilters,
  getFilterIndex,
  getOptionIndex,
  checkForCheckedFilters,
} from '../utils/shopUtils';

import { useState, useRef, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function Shop() {
  const filters = useRef([]);
  const selectedSort = useRef('alpha');
  const allProducts = useRef([]);
  const [activeProducts, setActiveProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleCartChange } = useOutletContext();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        allProducts.current = addPriceRange(products);
        filters.current = createFilters(['category'], allProducts.current);
        setActiveProducts(sortProducts(allProducts.current));
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  function handleSortChange(value) {
    selectedSort.current = value;
    const sorted = sortProducts([...activeProducts]);
    setActiveProducts(sorted);
  }

  function handleFilterChange(e, title) {
    const { value, checked } = e.target;
    toggleFilterChecked(title, value, checked);
    setActiveProducts(sortProducts(filterProducts()));
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
    if (!checkForCheckedFilters(filters.current)) {
      return allProducts.current;
    }

    return allProducts.current.filter((product) => {
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

  if (loading) {
    return (
      <div className={styles.loading}>
        <p className={styles.msgCard}>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.loading}>
        <p className={styles.msgCard}>Error: {error.message}</p>
      </div>
    );
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
        {activeProducts.length === 0 ?
          <div className={styles.emptyProducts}>
            <h2 className={styles.msg}>No products found.</h2>
          </div>
        : <div className={styles.productsContainer}>
            {activeProducts.map((product) => (
              <ShopCard
                key={product.id}
                product={product}
                handleCartChange={handleCartChange}
              ></ShopCard>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default Shop;
