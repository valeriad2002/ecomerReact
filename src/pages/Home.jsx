import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getpushThunk } from '../assets/store/slice/push.slice';

const Home = () => {
    const dispatch=useDispatch();
    const product=useSelector(state=>state.products);
    useEffect(()=>{
        dispatch(getpushThunk());
        

    },[])
    console.log(product.products?.title);
    return (
        <div>
            <h1>Componente Home</h1>
            
            {product.map(productItem=>{
                <li>{product.title} hola</li>
            })}
        </div>
    );
};

export default Home;