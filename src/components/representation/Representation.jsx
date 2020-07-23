import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import './representations.css'

const mapStateToProps = (state) => ({
  token: state.token,
  wildpoints: state.wildpoints,
  id: state.id
});


function Representation({ token, wildpoints, id, dispatch }) {
  const [allRepresentations, setAllRepresentations] = useState([]);
  const [myRepresentations, setMyRepresentations] = useState([]);

  const getRepresentations = () => {
    Axios.get('http://localhost:8000/representations')
      .then((response) => response.data)
      .then((data) => setAllRepresentations(data))
  };

  const getMyRepresentations = () => {
    Axios.get(`http://localhost:8000/buy/${id}/representations`)
      .then((response) => response.data)
      .then((data) => setMyRepresentations(data))
  }

  useEffect(() => {
    getRepresentations();
    getMyRepresentations();
  }, [])

  return (
    <div className="block">
      <section>
        <h1 className="colorText">Representation :</h1>
        {allRepresentations.map((representation) => {
          return (
            <div className="representationsBlock">
              <p>{representation.localisation}</p>
              <p>{representation.date_rep}</p>
              <button type="button" onClick={() => {
                if (!token) {
                  alert('you need to be connected')
                }
                if (token) {
                  if (wildpoints >= 100) {
                    Axios.put(`http://localhost:8000/users/${id}`, { wildpoints: wildpoints - 100 })
                      .then(() => dispatch({ type: "LESSWILD"}))
                      .then(() =>
                        Axios.post(`http://localhost:8000/buy/${id}/representations`, { users_id: id, representations_id: representation.id })
                          .then(() => getMyRepresentations())
                          .catch((err) => console.log(err))
                      )
                      .catch((err) => console.log(err))
                  } else {
                    alert(`You have just ${wildpoints} wildpoints...`)
                  }
                }
              }}>Buy ticket: 100 wildpoints</button>
            </div>
          )
        })}
      </section>
      {
        (token) &&
        <section>
          <h1 className="colorText">My representations :</h1>
          {myRepresentations.map((representation) => {
            return (
              <div className="colorText">
                <p>{representation.localisation}</p>
                <p>{representation.date_rep}</p>
              </div>
            )
          })}
        </section>
      }
    </div>
  )
};

export default connect(mapStateToProps)(Representation);