import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Representation() {
  const [allRepresentations, setAllRepresentations] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8000/representations')
      .then((response) => response.data)
      .then((data) => setAllRepresentations(data))
  })

  return (
    <div className="block">
      {allRepresentations.map((representation) => {
        return (
          <>
            <p>{representation.localisation}</p>
            <p>{representation.date_rep}</p>
          </>
        )
      })}
    </div>
  )
};

export default Representation;