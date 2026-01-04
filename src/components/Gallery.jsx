import React from 'react';



const Gallery = () => {

  const image = [
    {
      img: 'https://i.ibb.co.com/Kj8x8HNC/medium-shot-smiley-people-posing.jpg',
    },
    {
      img: 'https://i.ibb.co.com/3537SjB1/employee-showing-appreciation-each-other-1.jpg',
    },
    {
      img: 'https://i.ibb.co.com/JRpXnQ0V/friends-dance-together-full-happiness-party-man-with-cool-dancing-moves.jpg',
    },
    {
      img: "https://i.ibb.co.com/SLJ5KTP/school-partnership.jpg"
    },
    {
      img: "https://i.ibb.co.com/mVz22xCm/happy-people-partying-nature.jpg"
    },
    {
      img: 'https://i.ibb.co.com/1x4BNvc/social-quest-game.jpg',
    },
    {
      img: 'https://i.ibb.co.com/1x4BNvc/social-quest-game.jpgv',
    },
    {
      img: 'https://i.ibb.co.com/Txx789b2/pexels-runffwpu-2539281.jpg',
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-3 ">
      {image.map((p, i) => (
        <img
          key={i}
          
          className="grid-img rounded-xl cursor-pointer object-cover object-top  transition-transform duration-500 hover:scale-90 "
          src={p.img}
          alt=""
        />
      ))}
    </div>
  );
};

export default Gallery;