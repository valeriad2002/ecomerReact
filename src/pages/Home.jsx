import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterHeadlineThunk, filterproductThunk, getpushThunk } from '../assets/store/slice/push.slice';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Button, Form, InputGroup } from 'react-bootstrap';
const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [category, setCategory] = useState([])
    const [inputSearch, setInputSearch] = useState("");
    useEffect(() => {
        dispatch(getpushThunk());
        axios.
            get(`https://e-commerce-api.academlo.tech/api/v1/products/categories/`)
            .then(resp => setCategory(resp.data.data.categories));


    }, [])
    console.log(category);

    return (
        <div>
            

            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                />

                <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
                >
                    Search
                </Button>

            </InputGroup>
            {
                category.map(categoryLust => (

                    <Button key={categoryLust.name} onClick={() => dispatch(filterproductThunk(categoryLust.id))}>
                        {categoryLust.name}
                    </Button>
                ))
            }
            <div className='cards'>
                {products.map(productItem => (

                    <li className='CARD1' key={productItem.title}>
                        <Link className='text' to={`/product/${productItem.id}`}>
                            <img className='imgProHome' src={productItem.productImgs[0]} alt="" />
                            <br /><br />
                            {productItem.title}
                            <br />
                            Price
                            <br />
                            {productItem.price}
                            <div>

                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>

                        </Link>


                    </li>

                ))}
            </div>
        </div>
    );
};

export default Home;