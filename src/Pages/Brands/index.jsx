import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css"

const apiURL = import.meta.env.VITE_APP_SERVER_URL;

function BrandsPage() {
  const {brand} = useParams();
  console.log('BRAND',brand)
  const [allModels, setAllModels] = useState([]);





  useEffect(() => {
    axios.get(`${apiURL}/motorcycles/${brand}`).then((response) => {
      setAllModels(response.data);
      console.log('ResponseDATA',response.data);
    });
  }, []);


  return (
    <div className="models-page">
      <h1>{brand} Models</h1>
      <hr style={{width:'90vw', margin:'0'}}/>
      {allModels &&
        allModels.map((models) => {
          if(models.modelImg!=="https://freesvg.org/img/motorcycleicon.png")
          {
          return(
          <div className="model-card" key="models._id">
            <h3>Model: {models.model}</h3>
            <div className="model-card-info">
              <img src={models.modelImg} alt="" />
              <div className="model-card-description">
                <p><strong>Production Year:</strong> {models.year}</p>
                <p><strong>Type:</strong> {models.type}</p>
                <p><strong>Engine:</strong> {models.engine}</p>
                <p><strong>Bore Stroke:</strong> {models.boreStroke}</p>
                <p><strong>Fuel Capacity:</strong> {models.fuelCapacity}</p>
                <p><strong>Front Suspension:</strong> {models.frontSuspension}</p>
                <p><strong>Rear Suspension:</strong> {models.rearSuspension}</p>
                <p><strong>Front Tire:</strong> {models.frontTire}</p>
                <p><strong>Rear Tire:</strong> {models.rearTire}</p>
                <p><strong>Front Brakes:</strong> {models.frontBrakes}</p>
                <p><strong>Rear Brakes:</strong> {models.rearBrakes}</p>
                <p><strong>Seat Height:</strong> {models.height}</p>
              </div>
            </div>
          </div>)}
          <hr></hr>
        })}
    </div>
  );
}

export default BrandsPage;
