import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { createCarThunk } from '../assets/store/slice/card.slice';
import { getpushThunk } from '../assets/store/slice/push.slice';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getpushThunk());


    }, [])
    const productList = useSelector(state => state.products);
    const product = productList.find(productItem => productItem.id === Number(id))
    const relatedPro = productList.filter(productItem => productItem?.category.id === product?.category.id)
    const [quantity, setQuantity] = useState('');
    const addToFavorites = () => {
        const producttoCart = {
            id: product.id,
            quantity: quantity
        };
        console.log(producttoCart);
        dispatch(createCarThunk(producttoCart))
    };



    return (
        <div>
            <div className='divDetail'>



                <img className='imgDetail' src={product?.productImgs[0]} alt="" />
                <br />
                <div className='details'>

                    <h2>
                        {product?.title}
                    </h2>
                    <br />
                    <p>
                        {product?.description}
                    </p>
                    Price
                    <br />
                    {product?.price}
                </div>
                <div>
                    <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Button onClick={addToFavorites}>Add to card</Button>

                </div>
            </div>
            <h3> Realetes Product</h3>
            <div className='cards'>
                {relatedPro.map(productItem => (


                    <li className='CARD1' key={productItem?.id}>
                        <Link className='text' to={`/product/${productItem.id}`}>
                            <img className='imgProHome' src={productItem.productImgs[0]} alt="" />
                            <br />
                            {productItem?.title}
                            <br />
                            Price
                            <br />
                            {productItem?.price}
                        </Link>


                    </li>

                ))}
            </div>

        </div>
    );
};

export default ProductDetails;