import React from "react";
import TableRow from "./TableRow";

const Table = ({data}) => {

    const body = data.map((item) => (
                    <TableRow key={item.id} item={item} />
                ))

    return (
        <table>
            <thead>
                <tr>
                    <th>Número da vaga</th>
                    <th>Nome do Proprietário</th>
                    <th>Número do Apartamento</th>
                    <th>Bloco do Apartamento</th>
                    <th>Modelo do Veículo</th>
                    <th>Placa do Veículo</th>
                    <th>Cor do Veículo</th>
                </tr>
            </thead>
            <tbody>
                {body && body.length > 0 ? body :
                    <tr>
                        <td colSpan="7">
                            Nenhum item encontrado.
                        </td>
                    </tr>}
            </tbody>
        </table>
    )
}

export default Table;