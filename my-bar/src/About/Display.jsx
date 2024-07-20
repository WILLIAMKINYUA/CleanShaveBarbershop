import React, { useState } from 'react';
import "./Display.css";
import { Link } from 'react-router-dom';
import { AboutData } from '../About'; // Assuming AboutData is correctly exported from About file

const Display = () => {
  const [abt, setAbt] = useState(AboutData);

  const filterAbt = (abts) => {
    // Filtering logic to update the state with filtered about data
    const filteredAbout = AboutData.filter((x) => x.id === abts); // Replace with your actual filtering criteria
    setAbt(filteredAbout);
  };

  return (
    <div className='display'>
      {abt.map((x) => (
        <div className='dis' key={x.id}>
          <img src={x.image} alt="non-exist" className='displayimage' />
        </div>
      ))}
     
      <div className="content">
        <p className="displayhead">Have a date with us to transform you to be the cutest in town</p>
        {/* Add onClick handlers to call filterAbt with appropriate IDs */}
        <Link to="/service" className='btwn' >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Display;
