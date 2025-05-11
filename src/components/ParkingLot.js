import ParkingSpot from "./ParkingSpot";
import { useNavigate } from 'react-router-dom';
import { useParkingContext } from '../context/ParkingContext';

const ParkingLot = () => {

    const { spots } = useParkingContext();
    const navigate = useNavigate();

    const handleRentSpot = (number) => {
        const spot = spots.find(spot => spot.number === number);

        if (spot && spot.status === 'free') {
            navigate(`/vagas/reservar/${number}`);
        }
    };

    return (
        <div className="parking-lot">
            {spots.map(spot => (
                <ParkingSpot
                    key={spot.number}
                    number={spot.number}
                    status={spot.status}
                    onRent={handleRentSpot}
                />
            ))}
        </div>
    )
}

export default ParkingLot