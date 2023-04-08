import React from "react";

import NavbarAll from "../components/Navbar.js";

//React-Bootstrap-components
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


//Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';


const Main = () => {
    return (  <>
        <NavbarAll/>
        <div className="principal-container">
            <div className="principal">
                <div className="secondary-container d-flex justify-content-around align-items-center">
                    <div>
                        <h1 className="title">
                            NutricionApp
                        </h1>
                        <h1 className="title-secondary mb-4">tu mejor aliado<br/>para una vida<br/>más saludable</h1>
                        <Button className="mx-2 px-4" variant="success" href="login">Comenzar ahora</Button>
                    </div>  
                    <div></div>
                </div>
            </div>
        </div>
        <div className="container-white d-flex justify-content-around align-items-center">
            <AccessTimeIcon sx={{ fontSize: 90, color:"#198754" }}/>
            <p style={{color:"#fcba03"}}><b>Crea rutinas alimenticias y  llega a tus<br/>objetivos</b></p>
            <EmojiEventsIcon sx={{ fontSize: 90, color:"#198754" }}/>
            <p style={{color:"#fcba03"}}><b>Recetas saludables y deliciosas, pensadas<br/>en una vida mas saludable</b></p>
            <MonitorHeartIcon sx={{ fontSize: 90, color:"#198754" }}/>
        </div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>);
}
 
export default Main;