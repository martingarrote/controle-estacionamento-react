import React from 'react';
import './ParkingSpot.css';

const ParkingSpot = ({ number, status, onRent }) => {

    const handleClick = () => {
        if (status === 'free') {
            onRent(number)
        }
    };

    return (
        <div className="parking-spot" id={`ps-${number}`} onClick={handleClick}>
            <span className={`ps-status ${status}`} data-status={status}></span>
            <span className="ps-number">{number}</span>
        </div>
    )
}

export default ParkingSpot