import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ServiceNav.css";
import { VideosData } from '../Video'; // Assuming VideoData is correctly exported from Video file

const ServiceNav = () => {
  const [vid, setVid] = useState(VideosData);

  const filterVid = (vids) => {
    // Example filtering logic (replace with your actual filtering logic)
    setVid(VideosData.filter((x) =>x.id===vids
  ));
  };

  return (
    <div className='servicepage'>
      {vid.map((x) => (
        <div className="servicesbg" key={x.id}>
          <video src={x.video} style={{ maxHeight: "10%", height: "5%" }} alt="Video not found, Kindly reload...." loop autoPlay muted className='bgservice' />
        </div>
      ))}

      <div className="mergeservice">
        <div className="servicenav">
          <Link to="/massage" className='servicelink'>Massage</Link>
          <Link to="/barber" className='servicelink'>Barber</Link>
          <Link to="/salon" className='servicelink'>Salon</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceNav;
