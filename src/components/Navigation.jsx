// Navigation.js
import React from 'react';
import './Navigation.css';

const tabs = [
  { label: 'Tutti', value: 'tutti' },
  { label: 'Completati', value: 'completato' },
  { label: 'In Corso', value: 'in-corso' },
  { label: 'Wishlist', value: 'wishlist' },
  { label: 'Abbandonati', value: 'abbandonato' }
];

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="navigation">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`nav-tab ${activeTab === tab.value ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
