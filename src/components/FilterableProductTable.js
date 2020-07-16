import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable.js'

export default function FilterableProductTable({products}) {
  
  
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }
  
