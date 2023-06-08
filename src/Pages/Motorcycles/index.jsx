import "./styles.css";
import { Link } from "react-router-dom";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function MotorcyclesPage() {
  const itemData = [
    {
      img: "/images/brands/honda-logo.jpg",
      title: "Honda",
    },
    {
      img: "/images/brands/kawasaki-logo.png",
      title: "Kawasaki",
    },
    {
      img: "/images/brands/ktm-logo.png",
      title: "KTM",
    },
    {
      img: "/images/brands/husqvarna-logo.png",
      title: "Husqvarna",
    },
    {
      img: "/images/brands/harley-davidson-logo.png",
      title: "Harley-Davidson",
    },
    {
      img: "/images/brands/indian-logo.png",
      title: "Indian",
    },
    {
      img: "/images/brands/ducati-logo.png",
      title: "Ducati",
    },
    {
      img: "/images/brands/aprilia-logo.png",
      title: "Aprilia",
    },
    {
      img: "/images/brands/triumph-logo.png",
      title: "Triumph",
    },
    {
      img: "/images/brands/royal-enfield-logo.jpg",
      title: "Royal Enfield",
    },
    {
      img: "/images/brands/bmw-logo.jpg",
      title: "BMW",
    },
    {
      img: "/images/brands/zundapp-logo.png",
      title: "Zundap",
    },
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
                className="info-button"
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
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
