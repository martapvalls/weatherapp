import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({ busqueda, setBusqueda, setConsulta}) => {

    const [ error, setError ] = useState(false)

    const { ciudad, pais } = busqueda

    const handleChange = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true)
            return
        }

        setError(false)
        setConsulta(true)
    }

    return (  
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error mensaje="Todos los campos son obligatorios"/>}
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">City: </label>

                <div className="input-field col s12">
                    <select
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={handleChange}
                    >
                        <option value=""> -- Seleccione un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">Country: </label>
                </div>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search climate"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />

            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsulta: PropTypes.func.isRequired
}
 
export default Formulario;