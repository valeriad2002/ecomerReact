import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPushThunk } from '../assets/store/slice/push.slice';

const Push = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPushThunk());
    }, []);
    return (
        <div>
            <h1>Push</h1>
        </div>
    );
};

export default Push;