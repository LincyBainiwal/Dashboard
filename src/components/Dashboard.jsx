import React , { useState } from 'react'
import './dashboard.css'
import Card from './Card.jsx'
import {Data} from '../api/info.jsx'
import Reports from './Reports.jsx';


function Dashboard() {
    const [cards] = useState(Data);
   console.log(cards.cards)
    // const fetchData = () =>{
    //     fetch('http://localhost:4000/cards')
    //     .then(res => res.json())
    //     .then(data => {
    //         setCards(data);
    //     })
    //     .catch(e => console.log(e.message));
    // };

    // useEffect(()=>{
    //     fetchData();
    // } , []);
  return (
   <section className="dasboard section">
      <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {
                cards.cards && cards.cards.length>0 &&
                cards.cards.map(card=><Card key={card._id} card={card}/>)}
                <div className="col-12">
                    <Reports/>
                </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
      </div>
   </section>
  )
}

export default Dashboard
