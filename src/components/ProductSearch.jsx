import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchProductsQuery } from "../redux/productsApi";

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: searchResults, isLoading: searchLoading } = useSearchProductsQuery(searchTerm);
  const { products } = searchResults || { products: [] }; // Если data нет, устанавливаем products по умолчанию как пустой массив

//   if (products.length==0) {
//     return <div>
//       <h1>Nothing found for your request
// </h1>
//     </div>
//   }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex flex-wrap  justify-center items-center gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-slate-600 py-10 w-[400px] min-h-[600px] flex flex-col justify-center "
            >
              <div>
                <h1>{item.title}</h1>
                <img
                  className="object-fill h-[300px] w-full"
                  src={item.thumbnail}
                />
              </div>
              <div>
                <p>Price:${item.price}</p>
                <p>Brand:{item.brand}</p>
                <p>Price:{item.category}</p>
                <Link to={`/products/${item.id}`}>Show details</Link>
              </div>

            </div>
          ))}
        </div>
      )}
      {
        products.length==0 && <div>Nothing found for your request
        </div>
      }
    </div>
  );
}

export default ProductSearch;