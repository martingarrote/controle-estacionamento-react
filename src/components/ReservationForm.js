import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParkingContext } from '../context/ParkingContext';
import './ReservationForm.css'

const ReservationForm = ({ spotNumber }) => {
    const navigate = useNavigate();
    const { createReservation } = useParkingContext();

    const [ownerName, setOwnerName] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [apartmentBlock, setApartmentBlock] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [vehicleSign, setVehicleSign] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newReservation = {
            parkingSpotNumber: spotNumber,
            ownerName,
            apartmentNumber,
            apartmentBlock,
            vehicleModel,
            vehicleSign,
            vehicleColor,
        };

        createReservation(newReservation);
        navigate('/reservas')
    };

    return (
        <div id="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="parkingSpotNumber">Número da Vaga</label>
                <input
                    type="text"
                    id="parkingSpotNumber"
                    name="parkingSpotNumber"
                    value={spotNumber}
                    readOnly
                />
                </div>

                <div className="form-group">
                <label htmlFor="ownerName">Nome do Proprietário</label>
                <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    placeholder="Nome completo"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label htmlFor="apartmentNumber">Número do Apartamento</label>
                <input
                    type="number"
                    id="apartmentNumber"
                    name="apartmentNumber"
                    min="1"
                    placeholder="10"
                    required
                    value={apartmentNumber}
                    onChange={(e) => setApartmentNumber(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label htmlFor="apartmentBlock">Bloco do Apartamento</label>
                <input
                    type="text"
                    id="apartmentBlock"
                    name="apartmentBlock"
                    placeholder="Bloco A"
                    required
                    value={apartmentBlock}
                    onChange={(e) => setApartmentBlock(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label htmlFor="vehicleModel">Modelo do Veículo</label>
                <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    required
                    placeholder="Marca e modelo"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label htmlFor="vehicleSign">Placa do Veículo</label>
                <input
                    type="text"
                    id="vehicleSign"
                    name="vehicleSign"
                    placeholder="AAA-0000"
                    required
                    value={vehicleSign}
                    onChange={(e) => setVehicleSign(e.target.value)}
                />
                </div>

                <div className="form-group">
                <label htmlFor="vehicleColor">Cor do Veículo</label>
                <input
                    type="text"
                    id="vehicleColor"
                    name="vehicleColor"
                    placeholder="Cor"
                    required
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                />
                </div>

                <div className="form-actions">
                <button type="reset">Limpar</button>
                <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
};

export default ReservationForm;
