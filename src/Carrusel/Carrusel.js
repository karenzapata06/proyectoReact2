export function Carrusel(){

    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/movilesll-75a48.appspot.com/o/the-beatles1.jpg?alt=media&token=cda1bc12-5a98-477c-aa73-94dd30d5b5b7" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/movilesll-75a48.appspot.com/o/the-beatles2.jpg?alt=media&token=74435203-3e78-4390-ac96-1c1edeb37b63" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/movilesll-75a48.appspot.com/o/thebeatles3.jpg?alt=media&token=82ba9312-0cf6-41ec-98b7-dc7877905c13" className="d-block w-100" alt="..."/>
                        </div>Name
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"      data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>      
        </>
    )
}