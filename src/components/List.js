import React from "react";

const List = ({data}) => {
    return (
        data.map((reservation) => (
            <div className="list-item" key={reservation.parkingSpotNumber}>
                <div className="list-row">
                    <strong>Número da vaga:</strong>
                    <span>{reservation.parkingSpotNumber}</span>
                </div>
                <div className="list-row">
                    <strong>Nome do Proprietário:</strong>
                    <span>{reservation.ownerName}</span>
                </div>
                <div className="list-row">
                    <strong>Número do Apartamento:</strong>
                    <span>{reservation.apartmentNumber}</span>
                </div>
                <div className="list-row">
                    <strong>Bloco do Apartamento:</strong>
                    <span>{reservation.apartmentBlock}</span>
                </div>
                <div className="list-row">
                    <strong>Modelo do Veículo:</strong>
                    <span>{reservation.vehicleModel}</span>
                </div>
                <div className="list-row">
                    <strong>Placa do Veículo:</strong>
                    <span>{reservation.vehicleSign}</span>
                </div>
                <div className="list-row">
                    <strong>Cor do Veículo:</strong>
                    <span>{reservation.vehicleColor}</span>
                </div>
            </div>
        ))
    )
}

export default List;