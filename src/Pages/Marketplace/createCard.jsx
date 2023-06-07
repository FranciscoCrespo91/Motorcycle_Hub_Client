import './styles.css';
import axios from 'axios'
import { useState, useContext } from "react"                 
import { AuthContext} from '../../Context/auth.context'
import { useNavigate } from 'react-router-dom';

const apiURL = 'https://motorcycle-hub-server.onrender.com/api'

function CreateCard() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); 

    const [cardType, setCardType] = useState('');
    const [contentType, setContentType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');
    const [link, setLink] = useState('');
    const [price, setPrice] = useState('');


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
        owner: user._id
    };
    const postCard = async()=>{
        try {
            
            await axios.post(`${apiURL}/marketplace/create`, requestBody)
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

  return (
    <div className='card-create-form'>
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

            <button type='submit'>Create Card</button>
        </form>
    
    </div>
  )
}

export default CreateCard