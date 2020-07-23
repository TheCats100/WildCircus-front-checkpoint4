import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import './artists.css'

function Artists() {
  const [allArtists, setAllArtists] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/artists')
      .then((response) => response.data)
      .then((data) => setAllArtists(data))
  })

  return (
    <div className="block">
      {allArtists.map((artists) => {
        return (
          <div className="artistsBlock">
            <p>{artists.name}</p>
            <p>{artists.job}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Artists;