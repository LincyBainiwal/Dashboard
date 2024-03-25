import React, { useState } from 'react';
import CardFilter from './CardFilter';
import { Data } from '../api/info';
import RecentActivityItem from './RecentActivityItem';

function RecentActivity() {
  const [items] = useState(Data.recentactivity);
  console.log(Data.recentactivity);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className="card-body">
        <h5 className="card-title">
          Recent Activity<span>| {filter}</span>
        </h5>

        <div className="activity">
          {items && items.length > 0 && items.map((item) => (
            <RecentActivityItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;