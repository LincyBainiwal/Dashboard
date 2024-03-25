import React  , {useState} from 'react'
import { Data } from '../api/info';

function NewsPostItem({item}) {
    const [items] = useState(Data);
    console.log(Data.news)
  return (
    <div className="post-item clearfix">
        <img src={item.img} alt=""/>
        <h4>
            <a href="#">{item.title}</a>
        </h4>
        <p>{item.subtitle}...</p>
    </div>
  );
}

export default NewsPostItem
