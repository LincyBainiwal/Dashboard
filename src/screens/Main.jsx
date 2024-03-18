import React from 'react';
import '../styles/main.css';
import PageTitle from '../components/PageTitle';
import Dashboard from '../components/Dashboard';

function Main() {
  return (
    <main id="main" className="main" >
      <PageTitle page ="Dashboard" />
      <Dashboard/>
    </main>
  );
}

export default Main;
