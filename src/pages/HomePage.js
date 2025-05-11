import React from 'react';

import './HomePage.css';
import ParkingLot from '../components/ParkingLot';

const HomePage = () => {
    return (
        <section>
            <h2>Vagas</h2>
            <p>CLique para reservas</p>
            <ParkingLot/>
        </section>
    )
}

export default HomePage;