import ContentRowMovies from "./ContentRowMovies"
import GenresInDb from "./GenresInDb"
import LastMovieInDb from "./LastMovieInDb"


function ContentRowTop(){
    const datos=[
        {
            titulo:"Movies in Data Base",
            cantidad:21,
            class:"card border-left-primary shadow h-100 py-2",
            icono:"fas fa-film fa-2x text-gray-300"
        },
        {
            titulo:"Total award",
            cantidad:79,
            class:"card border-left-success shadow h-100 py-2",
            icono:"fas fa-award fa-2x text-gray-300"
        },
        {
            titulo:"Actors quantity",
            cantidad:49,
            class:"card border-left-warning shadow h-100 py-2",
            icono:"fas fa-user fa-2x text-gray-300"
        }
    ]

    const genres =["Acción","Animación","Aventura","Ciencia Ficción","Comedia","Documental","Drama","Fantasia","Infantiles","Musical"]
    

    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
    

        <ContentRowMovies datos={datos} />

        <div className="row">
            <LastMovieInDb/>
            <GenresInDb genres={genres}/>

        </div>
    </div>
    )
}


export default ContentRowTop