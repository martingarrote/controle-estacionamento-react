import './ReservationsListPage.css';

import Table from "../components/Table";
import { useParkingContext } from "../context/ParkingContext";

const ReservationsListPage = () => {

    const { reservations } = useParkingContext();

    return (
        <section>
            <h2>Reservas</h2>
            <p>Listagem das reservas realizadas</p>
            <div id="res-table-container">
                <Table data={reservations}/>
            </div>
        </section>
    )
}

export default ReservationsListPage;