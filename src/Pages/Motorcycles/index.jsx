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
      img: 'public/images/brands/honda-logo.jpg',
      title: 'Honda',
  
    },
    {
      img: '../public/images/brands/kawasaki-logo.png',
      title: 'Kawasaki',
      
    },
    {
      img: './public/images/brands/ktm-logo.png',
      title: 'KTM',
      
    },
    {
      img: './public/images/brands/husqvarna-logo.png',
      title: 'Husqvarna',
      
    },
    {
      img: './public/images/brands/harley-davidson-logo.png',
      title: 'Harley-Davidson',
      
    },
    {
      img: './public/images/brands/indian-logo.png',
      title: 'Indian',
      
    },
    {
      img: './public/images/brands/ducati-logo.png',
      title: 'Ducati',
      
    },
    {
      img: './public/images/brands/aprilia-logo.png',
      title: 'Aprilia',
      
    },
    {
      img: './public/images/brands/triumph-logo.png',
      title: 'Triumph',
      
    },
    {
      img: './public/images/brands/royal-enfield-logo.jpg',
      title: 'Royal Enfield',
      
    },
    {
      img: './public/images/brands/bmw-logo.jpg',
      title: 'BMW',
      
    },
    {
      img: './public/images/brands/zundapp-logo.png',
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

