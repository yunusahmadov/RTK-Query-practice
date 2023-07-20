import React from "react";
import { useGetProductsQuery } from "./redux/productsApi";

function App() {
  const { data, isLoading: productsLoading } = useGetProductsQuery();
  const { products } = data || { products: [] }; // Если data нет, устанавливаем products по умолчанию как пустой массив

  console.log(data);
  return (
    <div className="bg-slate-400">
      {productsLoading && <h1>Loading</h1>}
      <div>
        {productsLoading && <h1>Loading</h1>}
        <div className="flex flex-wrap  justify-center items-center gap-5">
          {products.map((item) => (
            <div key={item.id} className='bg-slate-600 py-10 w-[400px] min-h-[600px] flex flex-col justify-center '>
                <div>
                <h1>{item.title}</h1>
                  <img className="object-fill h-[300px] w-full" src={item.thumbnail}/>
                </div>
                <div>
                  <p>Price:${item.price}</p>
                  <p>Brand:{item.brand}</p>
                  <p>Price:{item.category}</p>

                </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
