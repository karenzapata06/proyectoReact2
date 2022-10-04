export function Footer(){
    return(
        <>
            <footer className="container-fluid bg-dark text-white p-3 mt-5">

                <div className="row">

                    <div className="col-12 col-md-6 text-center">
                        <h4>&copy; Karen zapata</h4>
                        <h4>Medellín</h4>
                        <h4>Aprendiz SURA</h4>
                        <h4>2022</h4>
                    </div>

                    <div className="col-12 col-md-6 border-start align-self-center">
                        <a href="https://github.com/" className="text-white"><i className="bi bi-github fs-2 p-5"></i></a>
                        <a href="https://www.linkedin.com/feed/" className="text-white"><i class="bi bi-linkedin fs-2"></i></a>
                    </div>

                </div>

            </footer>
        </>
    )
}