import React, {useEffect,useState} from "react";

import NavbarAll from "../components/Navbar.js";

import API from "../services/http-common.js";


import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SendIcon from '@mui/icons-material/Send';

const Goal = () => {


    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const [goal,setGoal] = useState('');
    const [lifestyle,setLifestyle] = useState('');
    const [weight,setWeight] = useState(()=>{
        try {
            const localStorageUserData = localStorage.getItem("userData");
            return localStorageUserData ? JSON.parse(localStorageUserData).weight : '';
        } catch (error) {
            return [];
        }
    });

    const [height,setHeight] = useState(()=>{
        try {
            const localStorageUserData = localStorage.getItem("userData");
            return localStorageUserData ? JSON.parse(localStorageUserData).height : '';
        } catch (error) {
            return [];
        }
    });

    const [birth,setBirth] = useState(()=>{
        try {
            const localStorageUserData = localStorage.getItem("userData");
            return localStorageUserData ? JSON.parse(localStorageUserData).birth : '';
        } catch (error) {
            return [];
        }
    });

    const [allergies,setAllergies] = useState(()=>{
        try {
            const localStorageAllergies = localStorage.getItem("Allergies");
            return localStorageAllergies ? JSON.parse(localStorageAllergies) : [];
        } catch (error) {
            return [];
        }
    });

    const [comorbidities,setComorbidities] = useState(()=>{
        try {
            const localStorageComorbidities = localStorage.getItem("Comorbidities");
            return localStorageComorbidities ? JSON.parse(localStorageComorbidities) : [];
        } catch (error) {
            return [];
        }
    });


    const [goalData,setGoalData] = useState([]);
    const [lifestyleData,setLifestyleData] = useState([]);

    const getGoals= async () =>{
        return await API.get('objetivo/').then((response) =>{
            setGoalData(JSON.parse(JSON.stringify(response.data)));
        }).catch((error)=>{
            console.log(error);
        })
    };

    const getLifestyle  = async () =>{
        return await API.get('estilo_vida/').then((response) =>{
            setLifestyleData(JSON.parse(JSON.stringify(response.data)));
        }).catch((error)=>{
            console.log(error);
        })
    };

    const handleChangeLifeStyle = () =>{

    }

    const handleChangeGoal = () =>{
        
    }

    const handleOnSubmit = () =>{


    }

    useEffect(() => {
        getLifestyle();
        getGoals();
    }, []);
    return ( <>
    <NavbarAll/>
    <h1 className="title">Objetivo</h1>
    <h1 className="title-secondary">Falta poco, cuéntanos cuál es tu objetivo nutricional</h1>

    <div className="allergies-container">
        <form className="form mt-0" onSubmit={()=>handleOnSubmit()}>
        <div className="input-group mb-3">
            <span className="input-group-text"><SettingsAccessibilityIcon/></span>
            <select name="lifestyle" id="lifestyle" className="form-control" aria-label="Default select example"
            defaultValue='placeholder' onChange={(e) => handleChangeLifeStyle(e)} >
                <option value='placeholder'disabled>Con qué estilo de vida se siente mas identificado</option>
                {lifestyleData.map((lifestyle,id) =>(
                    <option key={id} value={lifestyle.id_estilo}>{lifestyle.nombre_estilo}</option>
                ))}
            </select>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text"><EmojiEventsIcon/></span>
            <select name="allergie" id="allergie" className="form-control" aria-label="Default select example"
            defaultValue='placeholder' onChange={(e) => handleChangeGoal(e)}>
                <option value='placeholder'disabled>Indique cuál es su objetivo nutricional</option>
                {goalData.map((goal,id) =>(
                    <option key={id} value={goal.id_objetivo}>{goal.nombre_objetivo}</option>
                ))}
            </select>
        </div>

        <div> 
            <button className="btn btn-success" type="submit"><SendIcon className="mr-1"/>Siguiente</button>
        </div>
        {error && <p className="error mt-2">{message}</p>} 
        </form>
    </div>
    
    </> );
}
 
export default Goal;