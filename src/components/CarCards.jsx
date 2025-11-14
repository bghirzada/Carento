import React from "react";
import Card from "./Card";

const cars = [
  {
    title: "Audi A3 1.6 TDI S line",
    location: "Manchester, England",
    rating: 4.96,
    reviews: 672,
    miles: 25100,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 498.25,
    image: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-1.png"
  },
  {
    title: "Mercedes-Benz C220d",
    location: "Manchester, England",
    rating: 4.96,
    reviews: 672,
    miles: 25100,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 498.25,
    image: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-2.png"
  },
  {
    title: "Volkswagen Golf GTD 2.0 TDI",
    location: "Manchester, England",
    rating: 4.96,
    reviews: 672,
    miles: 25100,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 498.25,
    image: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-3.png"
  },
  {
    title: "Volvo S60 D4 R-Design",
    location: "New South Wales, Australia",
    rating: 4.96,
    reviews: 672,
    miles: 25100,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 498.25,
    image: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-1/car-4.png"
  },
  {
    title: "Jaguar XE 2.0d R-Sport",
    location: "Manchester, England",
    rating: 4.96,
    reviews: 672,
    miles: 25100,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 498.25,
    image: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-2/car-5.png"
  },
  {
    title: "Lexus IS 300h F Sport",
    location: "Manchester, England",
    rating: 4.96,
    reviews: 672,
    miles: 25100,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 498.25,
    image: "https://carento-nextjs.vercel.app/assets/imgs/cars-listing/cars-listing-2/car-6.png"
  }
];

const CarCards = () => {

  return (
    <div className='grid grid-cols-3 gap-8'>
      {cars.map((car, index) => {
        return <Card key={index} car={car} />;
      })}
    </div>
  );
};


export default CarCards;
