import React,{useState} from 'react'
import { Data } from '../api/info';

function TopSellingItem({item}) {
    const [items] = useState(Data);
    console.log(Data.topselling)
  return (
    <tr>
        <th scope="row">
            <a href='#'>
                <img src={item.preview} alt=""/>
            </a>
        </th>
        <td>
            <a href='#' className="text-primary fr-bold">
                {item.name}
            </a>
        </td>
        <td>${item.price.toFixed(2)}</td>
        <td className="fw-bold">{item.sold}</td>
        <td>${(item.price * item.sold).toLocaleString('en-US')}</td>
    </tr>
  )
}

export default TopSellingItem
