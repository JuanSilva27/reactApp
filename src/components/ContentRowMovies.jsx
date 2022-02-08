import PropTypes from "prop-types"

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
ContentRowMovies.propTypes={
    datos: PropTypes.array,
    customProp:function(datos){
        for (let i =0 ; i<datos.datos.length;i++) {
            
            if(typeof datos.datos[i].class !== "string" || typeof datos.datos[i].titulo !=="string" || typeof datos.datos[i].icono !=="string" || typeof datos.datos[i].cantidad !=="number" ){
                console.log("Error!!!")
                return new Error ("Invalid props, class, titulo and icon must be an string and cantidad must be a number")
            }
            
        }
    }
}

export default ContentRowMovies
