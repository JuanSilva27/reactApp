function ContentRowMovies(props) {
    return (
        <div  className="row">
            {props.datos.map((prop , i) => 
                <div key={prop+i} className="col-md-4 mb-4">
                    <div className={prop.class}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">{prop.titulo} </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{prop.cantidad} </div>
                                </div>
                                <div className="col-auto">
                                    <i className={prop.icono}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

            }
        </div>
    )
}
export default ContentRowMovies