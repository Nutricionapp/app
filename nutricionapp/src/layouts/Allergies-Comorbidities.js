import React,{useState} from "react";

import NavbarAll from "../components/Navbar.js";

import { useFormik } from 'formik';
import * as Yup from "yup";
// import API from "../services/http-common.js";


import Container from "react-bootstrap/esm/Container.js";

//icons 
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import HeightIcon from '@mui/icons-material/Height';
import CakeIcon from '@mui/icons-material/Cake';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SendIcon from '@mui/icons-material/Send';

const AllergiesComorbidities = () => {

    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    const [allergies,setAllergies] = useState([]);

    const formik = useFormik({
        initialValues: {
          weight:'',
          height:'',
          birth:''
        },
        validationSchema:Yup.object({
            weight:Yup.string().required("Este campo es requerido").min(1,"menor a 1 digitos").max(5,"excede los 6 digitos"),
            height:Yup.string().required("Este campo es requerido").min(1,"menor a 1 digitos").max(5,"excede los 6 digitos"),
            birth:Yup.date().required("Este campo es requerido")
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (<>
    <NavbarAll/>
    <h1 className="title">Alergia/Comorbilidades</h1>
    <h1 className="title-secondary">Queremos saber un poco más de ti, por favor completa la siguinete información:</h1>

    <div className="allergies-container">
        <form className="form mt-0" onSubmit={formik.handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text"><MonitorWeightIcon/></span>
                    <input 
                        className="form-control"
                        type="text" 
                        id="weight" 
                        name= "weight"
                        placeholder="Peso corporal"
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.weight} 
                    />
                </div >
                {formik.touched.weight && formik.errors.weight ? <div className="error">{formik.errors.weight}</div> : null}
            
                <div className="input-group mb-3">
                <span className="input-group-text"><HeightIcon/></span>
                    <input 
                        className="form-control"
                        type="text" 
                        id="height" 
                        name= "height" 
                        placeholder="Estatura"
                        onChange={formik.handleChange}
                        
                        value={formik.values.height} 
                    />
                </div>
                {formik.touched.height && formik.errors.height ? <div className="error">{formik.errors.height}</div> : null}
            
                <div className="input-group mb-3">
                <span className="input-group-text"><CakeIcon/></span>
                    <input 
                        className="form-control"
                        type="date" 
                        id="birth" 
                        name= "birth" 
                        placeholder="Fecha de nacimiento"
                        onChange={formik.handleChange}
                        
                        value={formik.values.birth} 
                    />
                </div>
                {formik.touched.birth && formik.errors.birth ? <div className="error">{formik.errors.birth}</div> : null}


                <div> 
                    <button className="btn btn-success" type="submit"><SendIcon className="mr-1"/>Enviar</button>
                </div>
                {error && <p className="error mt-2">{message}</p>}
            
            </form>
    </div>
           


    
    </>);
}
 
export default AllergiesComorbidities;