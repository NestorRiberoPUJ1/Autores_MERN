import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoAutor = () => {
    const [nombre, setNombre] = useState("");


    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/autores", {
            nombre
        })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <h1>Nuevo Autor</h1>
            <form onSubmit={guardarAutor}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <input type="submit" value="Guardar" className="btn btn-success" />
            </form>
        </div>

    )
}

export default NuevoAutor;