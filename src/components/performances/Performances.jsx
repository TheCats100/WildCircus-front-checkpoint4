import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import './performances.css';

function Performances() {
  const [allPerformances, setAllPerformances] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8000/performances')
      .then((res) => res.data)
      .then((data) => setAllPerformances(data))
  });

  return (
    <div className="block">
      {allPerformances.map((performance) => {
        return (
          <div className="performancesBlock">
            <h2>{performance.title}</h2>
            <p>{performance.description}</p>
          </div>
        )
      })}
    </div>
  )
};

export default Performances;