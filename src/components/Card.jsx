import '../App.css';
import React, { useState, useEffect } from 'react'
import axios from "axios"

function Card(){
  const [Users, setUsers] = useState([]) //API
  const [toChangeColorIndex, setToChangeColorIndex] = useState("") //input

  useEffect(() => {
      axios.get("https://hub.dummyapis.com/employee?noofRecords=3&idStarts=1001") 
          .then(res => {
              setUsers(res.data)}
              )   
          .catch(err => console.log(err))                           
  }, [])

  return (
    <div className="content">
      <div className="form">
        Insert an ID: <input type="number" className='input__number' min="0" max="3" value={toChangeColorIndex} onChange={(e) => setToChangeColorIndex(e.target.value)} />
      </div>  
      <div className='container__cards'>
        {
          Users.map(element => {
            return (
              <div key={element.id} className="card" style={{background: element.id - 1000 == toChangeColorIndex ? "yellow" : "lightgray"}}>
                <img className="card__item-img" src={element.imageUrl} alt="Portrait" />
                <h4>{element.firstName} {element.lastName}</h4>
                <p className='card__item-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore saepe eos rem hic voluptatum</p>
                <ul className='card__item-list'>
                  <li><i className="item__list fa-brands fa-facebook"></i></li>
                  <li><i className="item__list fa-brands fa-twitter"></i></li>
                  <li><i className="item__list fa-brands fa-linkedin"></i></li>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Card;

