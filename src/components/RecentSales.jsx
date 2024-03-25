import React , {useState,useEffect} from 'react';  
import './recentSales.css';
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';
import {Data} from '../api/info';

function RecentSales() {
    const[items]= useState([]);    
    const[filter,setFilter]= useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    };

  return (
    <div className="card recent-sales overflow-auto">
        <CardFilter filterChange={handleFilterChange}/>

        <div className="card-body">
            <h5 className="card-title">
                Recent Sales <span>| {filter}</span>
            </h5>
            <RecentSalesTable items={Data.recentsales}/>
        </div>
    </div>
  )
}

export default RecentSales
