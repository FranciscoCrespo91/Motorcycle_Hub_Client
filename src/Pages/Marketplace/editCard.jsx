import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from "react"


const apiURL = 'http://localhost:5005/api'

function EditCard() {
    const {cardId}= useParams();
    console.log('cardId', cardId)
    let cardInfo;
    const navigate = useNavigate();
    
    const [cardType, setCardType] = useState('');
    const [contentType, setContentType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [link, setLink] = useState('');
    const [price, setPrice] = useState('');
    
    const getCardInfo = async()=>{
        try {
            const apiResponse = await axios.get(`${apiURL}/marketplace/${cardId}`)
            cardInfo = apiResponse.data
            setCardType(cardInfo.cardType)
            setContentType(cardInfo.contentType)
            setTitle(cardInfo.title)
            setDescription(cardInfo.description)
            setImg(cardInfo.img)
            setLink(cardInfo.link)
            setPrice(cardInfo.price)

            console.log('CARD-INFO', cardInfo)
        } 
        catch(error){
            console.log('Error getting Specific Card from API', error)
        }
    }

    const handleCardType = (e)=>{setCardType(e.target.value)};
    const handleContentType = (e)=>{setContentType(e.target.value)};
    const handleTitle = (e)=>{setTitle(e.target.value)};
    const handleDescription = (e)=>{setDescription(e.target.value)};
    const handleImg = (e)=>{setImg(e.target.value)};
    const handleLink = (e)=>{setLink(e.target.value)};
    const handlePrice = (e)=>{setPrice(e.target.value)};
    
    const requestBody = {
        cardType: cardType,
        contentType: contentType,
        title: title,
        description: description,
        img: img,
        link: link,
        price: price,
    };

    const postCard = async()=>{
        try {
            await axios.put(`${apiURL}/marketplace/edit/${cardId}`, requestBody)
            console.log('cardPosted')
            setCardType('');
            setContentType('');
            setTitle('');
            setDescription('');
            setImg('');
            setLink('');
            setPrice('');
        }
        catch(error){
            console.log('Error posting form', error)
            
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        
        postCard();
        navigate('/marketplace');

    }
useEffect (()=>{
    getCardInfo()
},[])

  return (
  <div>
    <h1>Update Card</h1>
    <div>
        {
            

        <form onSubmit={handleSubmit}>
            
            <label>Type of Card:</label>
            <select value={cardType} onChange={handleCardType}>
                <option value=''>Select an option</option>
                <option value='request'>Request</option>
                <option value='offer'>Offer</option>
            </select>

            <label>Product or Service?:</label>
            <select value={contentType} onChange={handleContentType}>
                <option value=''>Select an option</option>
                <option value='product'>Product</option>
                <option value='service'>Service</option>
            </select>

            <label>Title:</label>
            <input type="text" name='title' value={title} onChange={handleTitle}/>

            <label>Description:</label>
            <input type="text" name='description' value={description} onChange={handleDescription}/>

            <label>Insert Image:</label>
            <input type="text" name='img' value={img} onChange={handleImg}/>

            <label>Link:</label>
            <input type="text" name='link' value={link} onChange={handleLink}/>

            <label>Price:</label>
            <input type="text" name='price' value={price} onChange={handlePrice}/>

            <button type='submit'>Update Card</button>
        </form>
        }
    
    </div>

  </div>
  )
}

export default EditCard