import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const ActualizarAutor = () => {
    const { id } = useParams();
    const [nombre, setNombre] = useState("");

    const [errors, setErrors] = useState({});

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores/" + id)
            .then(res => {
                setNombre(res.data.nombre);
            })
            .catch(err => history.push("/error"));
    }, [id, history])

    const actualizarAutor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/autores/" + id, {
            nombre
        })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            <h1>Editar Autor</h1>
            <form onSubmit={actualizarAutor}>
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

export default ActualizarAutor;