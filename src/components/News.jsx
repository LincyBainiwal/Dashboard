import React , {useState } from 'react'
import './news.css'
import {Data} from '../api/info'
import NewsPostItem from './NewsPostItem';
import CardFilter from './CardFilter';

function News() {
    const [items] = useState(Data.news);
  console.log(items);
    // const [news,setNews] = useState([]);
    const [filter,setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    };
  return (
   <div className="card">
    <CardFilter filterChange={handleFilterChange}/>
    <div className="card-body pb-0">
        <h5 className="card-title">
            News &amp; Updates <span>| {filter}</span>
        </h5>

        <div className="news">
            {items && 
            items.length > 0 &&  
            items.map((item) =>
             (<NewsPostItem key={item._id} item={item} />))}
        </div>
    </div>
   </div>
  );
}

export default News
