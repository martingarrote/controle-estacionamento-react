import './ReservationsListPage.css';

import Table from "../components/Table";
import { useParkingContext } from "../context/ParkingContext";
import { useState } from 'react';
import List from '../components/List';

const ReservationsListPage = () => {

    const [isListView, setIsListView] = useState(false);
    const { reservations } = useParkingContext();

    const toggleView = () => {
        setIsListView(!isListView)
    }

    return (
        <section>
            <h2>Reservas</h2>
            <p>Listagem das reservas realizadas</p>
            <br/>

            <button id="view-toggle-button" onClick={toggleView}>
                {isListView ? 'Visualização em Tabela' : 'Visualização em Lista'}
            </button>

            {isListView ? (
                <div id="res-list-container">
                    <List data={reservations} />
                </div>
            ) : (
                <div id="res-table-container">
                    <Table data={reservations} />
                </div>
            )}
        </section>
    )
}

export default ReservationsListPage;