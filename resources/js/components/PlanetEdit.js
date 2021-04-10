import React, { useContext, useEffect, useState } from "react";
// import { DogContext } from "../contexts/DogContext";
import { useHistory, NavLink, useParams } from "react-router-dom";
import axios from 'axios';
// import '../index.css'

const PlanetEdit = ()=>{
    const history = useHistory();
    const [details,setDetails] = useState({
        pName: "",
        pRadius:"",
        pSpeed:"",
        pDistance:""
    })
    const {id} = useParams();
    
        
    const fetchRecord = async () => {
        
        const res = await axios.get(`/planet/${id}/edit`);
        if(res.data.status === 200){
            setDetails({
                pName:res.data.planet.planet_name,
                pRadius:res.data.planet.planet_radius,
                pSpeed:res.data.planet.planet_revolve_speed,
                pDistance:res.data.planet.planet_distance_sun
            })
        }
    }

    
    useEffect(()=>{
        fetchRecord();
    },[])

    const handleChange = (e)=>{
        const {name,value} = e.target
        setDetails(prevState =>({
            ...prevState,
            [name] : value
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await axios.patch(`/planet/${id}`,details)
        if(res.data.status == 200){
            history.push("/")
        }
    }

        return(
            <>
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-6 m-lg-auto col-md-8 m-md-auto col-sm-10 m-sm-auto">
                    <h1 className="text-center display-4 text-primary mb-5 mt-5">Edit Planet</h1>
                    <form onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label>Planet Name</label>
                        <input type="text" className="form-control" name="pName" value={details.pName} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label>Planet Radius</label>
                        <input type="number" className="form-control" name="pRadius" value={details.pRadius} onChange={handleChange} />
                        <label className="text-small text-danger">in kms.</label>
                    </div>
                    <div className="mb-3">
                        <label>Planet Revolve Speed</label>
                        <input type="number" className="form-control" name="pSpeed" value={details.pSpeed} onChange={handleChange} />
                        <label className="text-small text-danger">in kms per hour</label>
                    </div>
                    <div className="mb-3">
                        <label>Planet Distance from Sun</label>
                        <input type="number" className="form-control" name="pDistance" value={details.pDistance} onChange={handleChange} />
                        <label className="text-small text-danger">in kms.</label>
                    </div>
                    <div className="row">
                        <div className="col-3 ml-auto mr-auto mb-5 mt-4">
                            <input type='submit' style={{"padding": "5px 30px"}} className="btn btn-outline-primary" value="Edit Planet" />
                        </div>
                    </div>
                </form>
            </div> 
                </div>
            </div>
     
            
        
            </>
        )
}

export default PlanetEdit