import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css"

const apiURL = "http://localhost:5005/api/motorcycles";

function BrandsPage() {
  const {brand} = useParams();
  console.log('BRAND',brand)
  const [allModels, setAllModels] = useState([]);





  useEffect(() => {
    axios.get(`${apiURL}/${brand}`).then((response) => {
      setAllModels(response.data);
      console.log('ResponseDATA',response.data);
    });
  }, []);

  /*  {allModels.map((model)=>{
    if(models.brand==={specificBrand}&& models.brandImg ){brandModels.push(models)};
  }
  )} */

  return (
    <div>
      <h1>{brand} Models</h1>
      {allModels &&
        allModels.map((models) => {
          if(models.modelImg!=="https://freesvg.org/img/motorcycleicon.png")
          {
          return(
          <div className="brand-cards" key="models._id">
            <img src={models.modelImg} alt="" />
            <h3>Model: {models.model}</h3>
            <p>Production Year: {models.year}</p>
            <p>Type: {models.type}</p>
            <p>Engine: {models.engine}</p>
            <p>Bore Stroke: {models.boreStroke}</p>
            <p>Fuel Capacity: {models.fuelCapacity}</p>
            <p>Front Suspension: {models.frontSuspension}</p>
            <p>Rear Suspension: {models.rearSuspension}</p>
            <p>Front Tire: {models.frontTire}</p>
            <p>Rear Tire: {models.rearTire}</p>
            <p>Front Brakes: {models.frontBrakes}</p>
            <p>Rear Brakes: {models.rearBrakes}</p>
            <p>Seat Height: {models.height}</p>
          </div>)}
        })}
    </div>
  );
}

export default BrandsPage;
