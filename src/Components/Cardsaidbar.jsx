import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCardthunk } from '../assets/store/slice/card.slice';

const Cardsaidbar = ({ show, handleClose }) => {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getCardthunk())
    },[])
    const car= useSelector(state=> state.card)

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {car.map((car) => (
                        <div>{car.title}</div>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

};

export default Cardsaidbar;