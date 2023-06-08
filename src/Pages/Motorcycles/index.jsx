import "./styles.css"
import { Link } from "react-router-dom";


import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';



export default function MotorcyclesPage() {

  const itemData = [
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2017/07/symbol-of-Honda.jpg',
      title: 'Honda',
  
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/Kawasaki-logo.png',
      title: 'Kawasaki',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/KTM-logo.png',
      title: 'KTM',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/Husqvarna-logo.png',
      title: 'Husqvarna',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/07/logo-harley-davidson.png',
      title: 'Harley-Davidson',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2017/10/indian-logo.png',
      title: 'Indian',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/07/ducati-logo.png',
      title: 'Ducati',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/Aprilia-logo.png',
      title: 'Aprilia',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/triumph-logo.png',
      title: 'Triumph',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/Royal-Enfield-logo-1.jpg',
      title: 'Royal Enfield',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2016/08/BMW-Logo-motorcycle.jpg',
      title: 'BMW',
      
    },
    {
      img: 'https://motorcycle-brands.com/wp-content/uploads/2017/10/zundapp-logo.png',
      title: 'Zundap',
      
    }
  
  ];

  return (
    <ImageList sx={{}}>
     
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            className="list-img"
            src={`${item.img}?w=248&fit=contain&auto=format`}
            srcSet={`${item.img}?w=248&fit=contain&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            className="list-item-bar"
            title={item.title}
             actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}>
                <Link to={`/motorcycles/${item.title}`}>          
                  <InfoIcon />
                </Link> 
                  
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

