import React from 'react';
import bannerimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 h-full mt-10 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse mt-10 lg:gap-28">
    <img
      src={bannerimg}
      className="w-[400px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-primary mt-10">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;