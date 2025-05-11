import { createContext, useContext, useState, useEffect } from 'react';

const ParkingContext = createContext();

export const useParkingContext = () => {
    const context = useContext(ParkingContext);

    if (!context) {
        throw new Error('useParkingContext deve ser usado dentro de um parkingProvider')
    }

    return context;
}

export const ParkingProvider = ({children}) => {

    const [spots, setSpots] = useState([])
    const [reservations, setReservations] = useState([]);
    
    const hasSpotsInStorage = () => {
        return localStorage.getItem("parking-spots-saved");
    }

    const loadSpotsFromStorage = () => {
        return JSON.parse(localStorage.getItem("parking-spots"));
    }

    const saveSpotsToStorage = (data) => {
        localStorage.setItem("parking-spots-saved", true);
        localStorage.setItem("parking-spots", JSON.stringify(data));
    }

    const loadSpotsFromStatic = () => {
        return Array.from(
            { length: 15 },
            (_, index) => ({
                id: index + 1,
                number: index + 1,
                status: 'free'
            })
        );
    }

    const hasReservationsInStorage = () => {
        return localStorage.getItem("reservations-saved");
    }

    const loadReservationsFromStorage = () => {
        return JSON.parse(localStorage.getItem("reservations"));
    }

    const saveReservationsToStorage = (data) => {
        localStorage.setItem("reservations-saved", true);
        localStorage.setItem("reservations", JSON.stringify(data));
    }

    useEffect(() => {

        if (hasSpotsInStorage()) {
            setSpots(loadSpotsFromStorage);
        } else {
            const staticSpots = loadSpotsFromStatic();

            setSpots(staticSpots);
            saveSpotsToStorage(staticSpots);
        }

        if (hasReservationsInStorage()) {
            setReservations(loadReservationsFromStorage());
        }

    }, [])


    const updateSpotStatus = (spotNumber, newStatus) => {
        const updatedSpots = spots.map(spot => 
            spot.number === spotNumber ? {...spot, status: newStatus} : spot
        );

        setSpots(updatedSpots);
        saveSpotsToStorage(updatedSpots);
    };

    const createReservation = (newReservation) => {

        const updatedReservations = [...reservations, newReservation];

        setReservations(updatedReservations);
        saveReservationsToStorage(updatedReservations);

        updateSpotStatus(newReservation.parkingSpotNumber, 'occupied');

        return newReservation
    }

    const value = {
        spots,
        setSpots,
        reservations,
        setReservations,
        updateSpotStatus,
        createReservation
    };

    return (
        <ParkingContext.Provider value={value}>
            {children}
        </ParkingContext.Provider>
    )
}
