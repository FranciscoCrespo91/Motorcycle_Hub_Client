import './styles.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";                     
import { AuthContext} from '../../Context/auth.context'

const apiURL = import.meta.env.VITE_APP_SERVER_URL;

function MarketPlacePage() {
  const { isLoggedIn, user } = useContext(AuthContext); 

  const [cards, setCards]=useState([]);
  const [requestCards, setRequestCards]=useState([]);
  const [offerCards, setOfferCards]=useState([]);

  //Get all cards function only runs on useEffect
  const getCards = async()=>{
    try {
      const response = await axios.get(`${apiURL}/marketplace`);
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
      await axios.delete(`${apiURL}/marketplace/delete/${cardId}`);
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
    setRequestCards([]);
    setOfferCards([])
    getCards();
  },[]); 
  

  return (

    <div className='marketplace-body'>
      <h1>Marketplace</h1>
      {isLoggedIn &&(
        <Link to='/marketplace/create'>Create a Card</Link>)} 
      {!isLoggedIn && (
        <p className='login-text'>You need to <a href='/login'>Login</a> to be able to Create, Edit or Delete Cards</p>
      )}     
      <div className='cards'>
        {!cards && (
          <h2>Loading</h2>
        )}
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
                        {isLoggedIn && user._id===card.owner._id && (
                          <div className='edit-card-btns-box'>
                            <Link to={`/marketplace/edit/${card._id}`}>✏️</Link>
                            <button className='card-delete-btn' onClick={()=>handleDeleteCard(card._id)}>🗑️</button>
                          </div>
                        )}
                      </div>
                      <div className='card-info'>
                        <p><strong>Price:</strong> {card.price}</p>
                      </div>
                    </div>
                  </div>
                  <p className='card-description'><strong>Description:</strong></p>
                  <p className='card-description'>{card.description}</p>
                  {card.link && (
                    <div>
                      <p><strong>Link:</strong> </p>
                      <a href={card.link} style={{textAlign:'left', paddingLeft:'5px'}}>{card.link}</a>
                    </div>
                  )}
                  <p><strong>By:</strong> {card.owner.name} | <strong>Contact:</strong> {card.owner.email} | <strong>Created:</strong> {card.createdAt.slice(0,10)}</p>
                </article>
              )
                }): <p>There are no cards yet. You can create a new request by clicking on the Add button on the top of the screen</p>
              }
          </div>
        </div>

        <div className='cards-container'>
          <h2>Riders are Offering</h2>
          <div className='requests-list'>
              {requestCards.length>0? offerCards.map((card)=>{
              return( 
                <article className='mktplace-card' key={card._id}>
                  <div className='card-header'>
                    <img src={card.img}></img>
                    <div className='card-header-info-section'>
                      <div className='card-title'>
                        <h3>{card.title}</h3>
                        {isLoggedIn && user._id===card.owner._id && (
                          <div className='edit-card-btns-box'>
                            <Link to={`/marketplace/edit/${card._id}`}>✏️</Link>
                            <button className='card-delete-btn' onClick={()=>handleDeleteCard(card._id)}>🗑️</button>
                          </div>
                        )}
                      </div>
                      <div className='card-info'>
                        <p><strong>Price:</strong> {card.price}</p>
                      </div>
                    </div>
                  </div>
                  <p className='card-description'><strong>Description:</strong></p>
                  <p className='card-description'>{card.description}</p>
                  <p><strong>Link:</strong> </p>
                  <a href={card.link} style={{textAlign:'left', paddingLeft:'5px'}}>{card.link}</a>
                  <p><strong>By:</strong> {card.owner.name} | <strong>Contact:</strong> {card.owner.email} |  <strong>Created:</strong> {card.createdAt.slice(0,10)}</p>
                </article>
              )
                }): <p>There are no cards yet. You can create a new offer by clicking on the Add button on the top of the screen</p>  
              }
          </div>
        </div>
      </div>

    </div>
  )
}

export default MarketPlacePage