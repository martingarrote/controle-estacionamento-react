import React from "react"

const TableRow = ({ item }) => {
    return (
        <tr>
            <td>{item.parkingSpotNumber}</td>
            <td>{item.ownerName}</td>
            <td>{item.apartmentNumber}</td>
            <td>{item.apartmentBlock}</td>
            <td>{item.vehicleModel}</td>
            <td>{item.vehicleSign}</td>
            <td>{item.vehicleColor}</td>
        </tr>
    )
}

export default TableRow