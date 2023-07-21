import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetOneProductQuery } from '../redux/productsApi';

function ProductsDetail() {

    const { id } = useParams();
    const { data, isLoading } = useGetOneProductQuery(id);

    if (isLoading) {
        // Показываем загрузку данных, пока запрос не завершится
        return <div>Loading...</div>;
    }

    if (!data) {
        // Если данные не получены, показываем сообщение об ошибке
        return <div>Data is undefined or null!</div>;
    }
    
    // Деструктурируем объект, если data существует
    const {
         title,
         description,
         price,
         discountPercentage,
         images } = data;

    return (
        <div>
            <h1>ProductsDetail:</h1>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{discountPercentage}</p>
            {
                images.map((imageUrl,index)=>(
                    <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                ))
            }
        </div>
    )
}

export default ProductsDetail;