import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const AllAutores = () => {

    const [autores, setAutores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/autores")
            .then(result => {
                setAutores(result.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteUser = (userId) => {
        axios.delete("http://localhost:8000/api/autores/" + userId)
            .then(result => {
                console.log(result);
                let aux = autores.filter(item => item._id !== userId)
                setAutores(aux);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <h1>Autores</h1>
            <Link to="/autores/new" className="btn btn-primary mb-4 mt-2">Crear autor</Link>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        autores.map((autor, index) => {
                            return (
                                <tr key={index}>
                                    <td>{autor.nombre}</td>
                                    <td>
                                        <Link to={`/autores/edit/${autor._id}`} className="btn btn-warning mr-2">Edit</Link>
                                        <button className="btn btn-danger" onClick={() => deleteUser(autor._id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>

    );

}

export default AllAutores;