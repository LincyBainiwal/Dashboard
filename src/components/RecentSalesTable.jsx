import React,{useState} from 'react'
import {Data} from '../api/info.jsx'

function RecentSalesTable() {
    const handleStatus = status =>{
        switch(status){
            case 'Approved':
                return 'success';
                break;
            case 'Pending':
                return 'warning';
                break;
            case 'Rejected':
                return 'danger';
                break;
            default:
                return 'success';
        }
    };
    const [items] = useState(Data);
   console.log(items.recentsales)
  return (
    <table className="table table-borderless datatable">
        <thead className="table-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {items.recentsales && items.recentsales.length>0 && items.recentsales.map(item =>(
                <tr key={item._id}>
                    <th scope="row">
                        <a href="#">{item.number}</a>
                    </th>
                    <td>{item.customer}</td>
                    <td>
                        <a href="#"className="text-primary">
                            {item.product}
                        </a>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                        <span className={`badge bg-${handleStatus(item.status)}`}>
                            {item.status}
                        </span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default RecentSalesTable
