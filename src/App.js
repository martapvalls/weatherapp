import React , { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'
import getWeather from './logic/index'

function App() {
    const [ busqueda, setBusqueda ] = useState({
        ciudad: '',
        pais: ''
    })
    const [ consultar, setConsulta ] = useState(false)
    const [ resultado, setResultado ] = useState({})
    const [ error, setError ] = useState(false)

    const { ciudad, pais } = busqueda
    useEffect(() => {
        if(consultar){
            const getResults = async () => {
                const resultado = await getWeather(ciudad, pais)
    
                setResultado(resultado)
                setConsulta(false)
            
                resultado.cod === '404' ? setError(true) : setError(false)
            }
            getResults()
        }
    }, [consultar])

    let componente
    if(error){
        componente = <Error mensaje ="City not found" />
    } else {
        componente = <Clima resultado={resultado}/>
    }

    return (
        <Fragment>
            <Header 
                titulo='Weather React App'
            />
            <div className="contenedor-form">
                    <div className="container">
                        <div className="row">
                            <div className="col m6 s12">
                                <Formulario 
                                    busqueda={busqueda}
                                    setBusqueda={setBusqueda}
                                    setConsulta={setConsulta}
                                />
                            </div>
                            <div className="col m6 s12">
                                {componente}
                            </div>
                        </div>
                    </div>
            </div>
        </Fragment>
        
    );
}

export default App;
