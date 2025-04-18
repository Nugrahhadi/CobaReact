import React, { useState } from 'react';
import { MapPin, Clock, CreditCard, Car, Search, Menu, Filter, AlertCircle } from 'lucide-react';

const SmartParkingApp = () => {
  const [activeTab, setActiveTab] = useState('map');
  
  const mockParkingLocations = [
    { id: 1, name: 'Central Mall Parking', available: 42, total: 120, distance: '1.2', price: '5.000' },
    { id: 2, name: 'City Plaza Parking', available: 15, total: 80, distance: '0.8', price: '7.000' },
    { id: 3, name: 'Station Parking', available: 8, total: 60, distance: '2.1', price: '4.000' },
  ];

  // Active reservation mock data
  const activeReservation = {
    location: 'Central Mall Parking',
    slot: 'B-42',
    timeRemaining: '1:32:45',
    until: '15:30'
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* App Header */}
      <div className="px-4 py-3 bg-blue-600 text-white flex justify-between items-center">
        <div className="flex items-center">
          <Menu size={24} className="mr-2" />
          <h1 className="text-xl font-bold">Smart Parking</h1>
        </div>
        <div className="flex items-center">
          <AlertCircle size={24} className="mr-2" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      
      {/* Active Reservation Banner (if any) */}
      {activeReservation && (
        <div className="bg-green-100 p-3 border-l-4 border-green-500 mx-4 my-3 rounded shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold text-green-800">Active Reservation</h3>
              <p className="text-green-600">{activeReservation.location} - Slot {activeReservation.slot}</p>
            </div>
            <div className="text-right">
              <p className="text-green-800 font-mono font-bold">{activeReservation.timeRemaining}</p>
              <p className="text-green-600 text-sm">Until {activeReservation.until}</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <Search size={20} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search for parking locations" 
            className="flex-grow outline-none text-gray-700"
          />
          <Filter size={20} className="text-blue-500 ml-2" />
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-grow relative overflow-hidden">
        {activeTab === 'map' ? (
          <div className="h-full bg-gray-200 relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p className="mb-2">Map View</p>
                <p className="text-sm">Showing nearby parking locations</p>
              </div>
            </div>
            
            {/* Bottom Sheet with Parking Locations */}
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg px-4 py-3">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <h2 className="text-lg font-bold mb-3">Nearby Parking (3)</h2>
              
              <div className="space-y-3">
                {mockParkingLocations.map((location) => (
                  <div key={location.id} className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">{location.name}</h3>
                        <div className="flex items-center mt-1">
                          <MapPin size={14} className="text-gray-500 mr-1" />
                          <span className="text-sm text-gray-500">{location.distance} km away</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-600">Rp {location.price}/hour</p>
                        <p className="text-sm mt-1">
                          <span className="text-green-600 font-bold">{location.available}</span>
                          <span className="text-gray-500">/{location.total} available</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex">
                      <button className="flex-1 bg-blue-500 text-white py-2 rounded-l-md font-medium">Details</button>
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-r-md font-medium">Reserve</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full p-4 overflow-auto">
            {/* Content for other tabs would go here */}
            <div className="flex items-center justify-center h-full text-gray-500">
              {activeTab === 'reservations' && "My Reservations Content"}
              {activeTab === 'payments' && "Payments Content"}
              {activeTab === 'profile' && "Profile Content"}
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom Navigation */}
      <div className="flex justify-around bg-white shadow-up border-t border-gray-200">
        <button 
          onClick={() => setActiveTab('map')}
          className={`flex flex-col items-center p-3 w-1/4 ${activeTab === 'map' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <MapPin size={24} />
          <span className="text-xs mt-1">Map</span>
        </button>
        <button 
          onClick={() => setActiveTab('reservations')}
          className={`flex flex-col items-center p-3 w-1/4 ${activeTab === 'reservations' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <Clock size={24} />
          <span className="text-xs mt-1">Reservations</span>
        </button>
        <button 
          onClick={() => setActiveTab('payments')}
          className={`flex flex-col items-center p-3 w-1/4 ${activeTab === 'payments' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <CreditCard size={24} />
          <span className="text-xs mt-1">Payments</span>
        </button>
        <button 
          onClick={() => setActiveTab('profile')}
          className={`flex flex-col items-center p-3 w-1/4 ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}
        >
          <Car size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default SmartParkingApp;