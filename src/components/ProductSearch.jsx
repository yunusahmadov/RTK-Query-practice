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
    <>
    <header className="py-5">
      <div  className="flex text-3xl w-3/4 bg-emerald-400 m-auto px-5 justify-between">
      <h1>Found.az </h1>
    <input
        className=""
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
    </header>
          <div>

      {searchLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex flex-wrap  justify-center items-center gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-slate-600  w-[300px] min-h-[250px] flex flex-col justify-center rounded-xl pb-3"
            >
              <div className="flex flex-col items-center">
                <img
                  className="object-fill h-[300px] w-full rounded-t-xl"
                  src={item.thumbnail}
                />
              </div>
              <div className="flex flex-col ">
                  <div className="flex justify-between px-2">
                  <h1 className="text-sm">{item.title}</h1>
                <p className="text-2xl font-semibold">${item.price}</p>
                  </div>
                {/* <p>Category:{item.category}</p> */}
                <Link className="bg-slate-400 p-1 rounded-lg ml-auto mr-2" to={`/products/${item.id}`}>View Details</Link>
              </div>

            </div>
          ))}
        </div>
      )}
      {
        products.length==0 && 
       <h1 className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Sorry! Nothing found for your request
       </h1>
      }
    </div>
    </>
  );
}

export default ProductSearch;