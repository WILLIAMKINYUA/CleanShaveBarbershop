import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { Home1Data } from '../Home1';
import { Home2Data } from '../Home2';
import Footer from '../Component/Footer';

const Home = () => {
  const [first, setFirst] = useState(Home1Data);
  const [second, setSecond] = useState(Home2Data);

  const filterFirst = (firsts) => {
    // Filtering logic to update the state with filtered Home1Data
    const filteredFirst = Home1Data.filter((x) => x.id === firsts); // Replace with your actual filtering criteria
    setFirst(filteredFirst);
  };

  const filterSecond = (seconds) => {
    // Filtering logic to update the state with filtered Home2Data
    const filteredSecond = Home2Data.filter((x) => x.id === seconds); // Replace with your actual filtering criteria
    setSecond(filteredSecond);
  };

  return (
    <div className='homepage'>
      {first.map((x) => (
        <div className="bgimages" key={x.id}>
          <img src={x.image} alt="Not Found" className='bgimage' />
        </div>
      ))}

      <h1 className='subtitle'>CleanShave Barbershop</h1>
      <h2 className='title'>Our Hairstyle makes you look elegance</h2>

      <div className="class">
        <section className="two">
          {second.map((x) => (
            <div className="lefthome" key={x.id}>
              <img src={x.image} alt="Not found" className='homeimage' />
            </div>
          ))}
          <div className="righthome">
            <h4 className='caption'>About our company</h4>
            <h5 className='captionhead'>52 YEARS OF EXPERIENCE IN HAIR CUT!</h5>
            <p className='homepara'>
              Brook presents your services with flexible, convenient and cdpoe layouts. You can
              select your favorite layouts & elements for cular ts with unlimited ustomization
              possibilities. Pixel-perfreplication of the designers is intended.
              Brook presents your services with flexible, convefnient and ent anipurpose layouts.
              You can select your favorite.
            </p>
          </div>
        </section>

        <section className='three'>
          <div className="h1">
            <h1>Regain your Confidence<br />Today</h1>
          </div>
          <div className="button">
            <Link to='/service'>
              <button className='homelink'>Make appointment</button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
