import React , { useState , useEffect } from 'react'
import './dashboard.css'
import Card from './Card.jsx'
import {Data} from '../api/info.jsx'
import Reports from './Reports.jsx';
import RecentSales from './RecentSales.jsx';
import TopSelling from './TopSelling.jsx';
import RecentActivity from './RecentActivity.jsx';
import BudgetReport from './BudgetReport.jsx';
import WebTraffic from './WebTraffic.jsx';
import News from './News.jsx';


function Dashboard() {
    const [cards] = useState(Data);
   console.log(cards.cards)
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
                <div className="col-12">
                     <RecentSales/>
                </div>
                <div className="col-12">
                    <TopSelling/>
                </div>
            </div>
          </div>
          <div className="col-lg-4">
            <RecentActivity/>
            <BudgetReport/>
            <WebTraffic/>
            <News/>
          </div>
      </div>
   </section>
  )
}

export default Dashboard
