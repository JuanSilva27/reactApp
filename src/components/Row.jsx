function Row(props) {
    return (
        <>
            {props.filas.map(fila => 
                <tr>
                    <td>{fila.titulo}</td>
                    <td>{fila.duracion}</td>
                    <td>{fila.rating}</td>
                    <td>{fila.genero.map(e=>
                        <ul>
                            <li>{e}</li>
                        </ul>)}</td>
                    <td>{fila.premios}</td>
                </tr>
            )}
        </>

    )
}

export default Row