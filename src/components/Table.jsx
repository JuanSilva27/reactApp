import Row from "./Row"
import "./Table.css"

function Table() {

    const filas = [
        {
            titulo: "Billy Elliot",
            duracion: 123,
            rating: 5,
            genero: ["drama", "comedia"],
            premios: 2
        },

        {
            titulo: "Alicia en el pais de las maravillas",
            duracion: 142,
            rating: 4,
            genero: ["drama", "accion", "comedia"],
            premios: 3
        },
    ]

    return (

        <table >
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Rating</th>
                    <th>Generto</th>
                    <th>Premios</th>
                </tr>
            </thead>
            <tbody>
                <Row filas={filas} />
            </tbody>
            <tr>
                <th>Titulo</th>
                <th>Duracion</th>
                <th>Rating</th>
                <th>Generto</th>
                <th>Premios</th>
            </tr>

        </table>
    )
}

export default Table