import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import './index.css';
import {  Link, NavLink, useHistory } from "react-router-dom";



const PlanetList = () => {
    const history = useHistory();
    const [sort, setSort] = useState(2);
    const [search, setSearch] = useState("");
    const [planets, setPlanets]=useState([]);
    const fetchRecords = async () => {
        const res = await axios.get('/planet');
        if(res.data.status === 200){
            setPlanets(res.data.planets)
        }
    }
    useEffect(()=>{
        fetchRecords();
    },[])

    const handleDelete = async (id) =>{
        const res = axios.delete(`/planet/${id}`)
        if((await res).data.status == 200){
            fetchRecords();
        }
    }

    const handleSort = async ()=>{
        if(sort == 2){
            setSort(1)
        }else if(sort == 1){
            setSort(2)
        }
        const res = await axios.get(`/sort/planet/${sort}`);
        if(res.data.status === 200){
            setPlanets(res.data.planets)
            setSearch("");
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value);
    }

    const handleSearch = async ()=>{
        const res = await axios.get(`/search/planet/${search}`);
        if(res.data.status === 200){
            setPlanets(res.data.planets)
        }
    }

    return ( 
        <div>
            <h1 className="text-center text-primary display-4 mb-5 mt-4">Planet List</h1>
            <div className="container">
                <div className="row mb-4">
                    <div className="ml-2 col-1">
                        <button onClick={handleSort} className='btn btn-outline-primary'> Sort </button>
                    </div>
                    <div className="ml-1 col-2 mr-auto">
                        <Link className='btn btn-outline-success' to='/add'> Add Planet </Link>
                    </div>
                    <div className="col-5 mr-1">
                        <input type="text" className="form-control" value={search} onChange={handleChange}/>
                    </div>
                    <div className="col-1 mr-2">
                    <button onClick={handleSearch} className='btn btn-outline-primary'> Search </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table style={{"width": "100%"}}>
                        <thead>
                            <tr style={{"textAlign": "center"}} >
                                <th>Count</th>
                                <th>Name</th>
                                <th>Radius</th>
                                <th>Revolve Speed</th>
                                <th>Distance From Sun</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planets.map((planet,index)=>{
                                return(
                                    <>
                                        <tr key={index} style={{"textAlign": "center"}}>
                                    <td> {index+1} </td>
                                    <td> {planet.planet_name} </td>
                                    <td> {planet.planet_radius} </td>
                                    <td> {planet.planet_revolve_speed}</td>
                                    <td> {planet.planet_distance_sun} </td>
                                    <td> <Link className="btn btn-outline-warning" to={`/edit/${planet.id}`}>Edit</Link> </td>
                                    <td> 
                                    <button onClick={() =>{ handleDelete(planet.id) }} className="btn btn-outline-danger" >Delete</button> 
                                    </td>
                                    </tr>
                                    </>
                                )
                            })}
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PlanetList;