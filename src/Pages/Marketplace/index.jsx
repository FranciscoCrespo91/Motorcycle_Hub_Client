import './styles.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../Context/auth.context'

const apiURL = 'http://localhost:5005/api/marketplace'

function MarketPlacePage() {
  const [cards, setCards]=useState([]);
  const [requestCards, setRequestCards]=useState([]);
  const [offerCards, setOfferCards]=useState([]);

  //Get all cards function only runs on useEffect
  const getCards = async()=>{
    try {
      const response = await axios.get(apiURL);
      const allCards = response.data;
      setCards(allCards)

      allCards.map((card)=>{
        if(card.cardType==='request'){
          setRequestCards(requestCards => [...requestCards, card]);
        } 
        else{
          setOfferCards(offerCards => [...offerCards, card]);
        }
      })
    }
    catch(error){
      console.log('Error fectching Cards from API', error);
    }
  }
  //Handles the delete process of a card
  const handleDeleteCard = async (cardId)=>{
    
    try {
      const deletedCard = await axios.delete(`${apiURL}/delete/${cardId}`);
      setRequestCards([]);
      setOfferCards([]);
      await getCards();
    }
    catch(error){
      console.log('Error Deleting card', error)
    }
  }

  // Fetches all the cards from the DB
  useEffect(()=>{
    getCards();
  },[]); 
  

  return (

    <div className='marketplace-body'>
      <h1>Marketplace</h1>
      
      <Link to='/marketplace/create'>Create a Card</Link>      
      <div className='cards'>

        <div className='cards-container'>
          <h2>Riders are Requesting</h2>
          <div className='requests-list'>

              {requestCards.length>0? requestCards.map((card)=>{
              return( 
                <article className='mktplace-card' key={card._id}>
                  <div className='card-header'>
                    <img src={card.img}></img>
                    <div className='card-header-info-section'>
                      <div className='card-title'>
                        <h3>{card.title}</h3>
                        <Link to={`/marketplace/edit/${card._id}`}>Update Card</Link>
                        <button onClick={()=>handleDeleteCard(card._id)}>DeleteCard</button>
                        
                        {/* <a href={`${apiURL}/delete/${card._id}`}>Delete Card</a> */}
                        <p>{card.owner.name}</p>
                      </div>
                      <div className='card-info'>
                        <p>Price: {card.price}</p>
                        <p>Link: {card.link}</p>
                        <p>Created: {card.createdAt}</p>
                      </div>
                    </div>
                  </div>
                  <p className='card-description'>Description: {card.description}</p>
                </article>
              )
            }): <p>There are no cards yet. You can create a new request by clicking on the Add button on the top of the screen</p>}
          </div>
        </div>

        <div className='cards-container'>
          <h2>Riders are Offering</h2>
          {offerCards.length>0? offerCards.map((card)=>{
              return(
                <article className='mktplace-card' key={card._id}>
                  <img src={card.img}></img>
                  <h3>{card.title}</h3>
                  <Link to=''></Link>
                  <p>Price: {card.price}</p>
                  <p>Link: {card.link}</p>
                  <p>Created: {card.createdAt}</p>
                  <p className='card-description'>Description: {card.description}</p>
                </article>
              )
            }) : <p>Loading</p>}
        </div>
      </div>

    </div>
  )
}

export default MarketPlacePage