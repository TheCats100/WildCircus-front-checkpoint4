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
        <p>{artists.name}</p>
        )
      })}
    </div>
  )
};

export default Artists;