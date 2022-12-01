import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPushedThunk } from '../assets/store/slice/purchases.slice';


const Push = () => {
    const dispatch = useDispatch();
    const purchase= useSelector(state=>state.purchase);

    useEffect(() => {
        dispatch(getPushedThunk());
    }, []);
    return (
        <div>
            <h1>Push</h1>
        </div>
    );
};

export default Push;