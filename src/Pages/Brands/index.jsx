import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
          return(
          <div className="brand-cards" key="models._id">
            <img src={models.modelImg} alt="" />
            <h3>{models.model}</h3>
            <p>{models.year}</p>
            <p>{models.type}</p>
            <p>{models.engine}</p>
            <p>{models.boreStroke}</p>
            <p>{models.fuelCapacity}</p>
            <p>{models.frontSuspension}</p>
            <p>{models.rearSuspension}</p>
            <p>{models.frontTire}</p>
            <p>{models.rearTire}</p>
            <p>{models.frontBrakes}</p>
            <p>{models.rearBrakes}</p>
            <p>{models.height}</p>
          </div>)
        })}
    </div>
  );
}

export default BrandsPage;
