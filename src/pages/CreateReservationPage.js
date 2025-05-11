import { useParams } from 'react-router-dom';
import './CreateReservationPage.css'
import ReservationForm from '../components/ReservationForm';

const CreateReservationPage = () => {
    const { spotNumber } = useParams();

    return (
        <section id="new-reservation">
            <h2>Cadastro de Reserva de Vaga</h2>
            <p>Preencha todos os campos obrigatórios</p>
            <ReservationForm spotNumber={parseInt(spotNumber)} />
        </section>
    );
};

export default CreateReservationPage
