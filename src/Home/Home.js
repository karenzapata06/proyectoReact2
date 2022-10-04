import './Home.css'

import {Submenu} from '../Submenu/Submenu.js' 
import {Footer} from '../Footer/Footer.js'

export function Home(){
    let descripcionBanda="The Beatles, también conocida en el mundo hispano como los Beatles, fue una banda de rock británica formada en Liverpool durante los años 1960, estando integrada desde 1962 a su separación en 1970 por John Lennon, Paul McCartney, George Harrison y Ringo Starr."

    return(
        <>
            <div className="banner">

            </div>
        
           <div className="container mt-3">
             <div className="row">
                    <div className="col-12">
                            <h1 className='text-center'>The Beatles</h1>
                            <p className="text-center">{descripcionBanda}</p>
                            <div className="col-2">
                            </div>
                           
                                
                    </div>
             </div>
           </div>
            <div>
                    <Submenu></Submenu>
            </div>
           <div>
                <Footer></Footer>
           </div>
            
           
        </>
    )
}