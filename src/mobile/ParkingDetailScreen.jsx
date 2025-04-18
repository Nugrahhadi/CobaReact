import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, MapPin, Car, AlertCircle, Phone, Navigation, Share2 } from 'lucide-react';

const ParkingDetailScreen = () => {
  const [selectedTab, setSelectedTab] = useState('slots');
  
  // Mock parking data
  const parkingDetails = {
    id: 1,
    name: 'Central Mall Parking',
    address: 'Jl. Sudirman No. 123, Jakarta',
    rating: 4.5,
    reviews: 236,
    distance: '1.2 km',
    price: '5.000',
    openHours: '06:00 - 22:00',
    availableSlots: 42,
    totalSlots: 120,
    features: ['CCTV Security', 'Covered Parking', 'EV Charging', 'Disabled Access'],
    contactNumber: '(021) 555-1234'
  };
  
  // Mock available slots
  const availableSlots = [
    { id: 1, level: 'A', number: '12', type: 'Standard', status: 'available' },
    { id: 2, level: 'A', number: '15', type: 'Standard', status: 'available' },
    { id: 3, level: 'A', number: '18', type: 'Disabled', status: 'available' },
    { id: 4, level: 'B', number: '23', type: 'Standard', status: 'available' },
    { id: 5, level: 'B', number: '42', type: 'EV Charging', status: 'available' },
    { id: 6, level: 'B', number: '45', type: 'Standard', status: 'available' },
    { id: 7, level: 'C', number: '08', type: 'Standard', status: 'available' },
    { id: 8, level: 'C', number: '11', type: 'Standard', status: 'available' },
  ];
  
  // Mock reviews
  const reviews = [
    { id: 1, user: 'John D.', rating: 5, date: 'June 10, 2023', comment: 'Great parking spot. Clean and spacious. Easy to find and access.' },
    { id: 2, user: 'Sarah M.', rating: 4, date: 'May 28, 2023', comment: 'Good location, but a bit expensive compared to other nearby options.' },
    { id: 3, user: 'Robert L.', rating: 5, date: 'May 15, 2023', comment: 'Very convenient with the mobile app reservation. Will use again!' },
  ];
  
  // Function to render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map(star => (
          <Star 
            key={star} 
            size={16} 
            className={`${star <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header Image */}
      <div className="relative h-48 bg-blue-600">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        
        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <ArrowLeft size={22} className="text-white" />
          </button>
          
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Share2 size={20} className="text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Star size={20} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Placeholder for image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg font-medium">Parking Image</p>
        </div>
      </div>
      
      {/* Main Content - Scrollable */}
      <div className="flex-grow overflow-auto">
        {/* Parking Info Card */}
        <div className="bg-white -mt-6 rounded-t-3xl shadow-sm px-4 pt-4 pb-2">
          <h1 className="text-xl font-bold">{parkingDetails.name}</h1>
          
          <div className="flex items-center mt-1">
            <MapPin size={16} className="text-gray-500 mr-1" />
            <p className="text-gray-600 text-sm">{parkingDetails.address}</p>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              {renderStars(parkingDetails.rating)}
              <span className="ml-1 text-gray-700 font-medium">{parkingDetails.rating}</span>
              <span className="ml-1 text-gray-500">({parkingDetails.reviews} reviews)</span>
            </div>
            
            <div className="text-gray-600">
              <span className="font-medium">{parkingDetails.distance}</span> away
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3 pb-3 border-b">
            <div className="flex items-center">
              <Clock size={16} className="text-gray-500 mr-1" />
              <span className="text-gray-600">{parkingDetails.openHours}</span>
            </div>
            
            <div className="text-blue-600 font-bold">
              Rp {parkingDetails.price}/hour
            </div>
          </div>
          
          <div className="flex bg-gray-100 rounded-lg p-1 mt-3">
            <button 
              className={`flex-1 py-2 rounded-md text-center text-sm font-medium ${
                selectedTab === 'slots' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setSelectedTab('slots')}
            >
              Available Slots
            </button>
            <button 
              className={`flex-1 py-2 rounded-md text-center text-sm font-medium ${
                selectedTab === 'details' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setSelectedTab('details')}
            >
              Details
            </button>
            <button 
              className={`flex-1 py-2 rounded-md text-center text-sm font-medium ${
                selectedTab === 'reviews' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
              onClick={() => setSelectedTab('reviews')}
            >
              Reviews
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="px-4 py-3">
          {selectedTab === 'slots' && (
            <div>
              <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium text-blue-800">Available Slots</h3>
                  <p className="text-blue-600 mt-1">
                    <span className="font-bold">{parkingDetails.availableSlots}</span>
                    <span> / {parkingDetails.totalSlots} slots available</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Car size={24} className="text-blue-600" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {availableSlots.map(slot => (
                  <div key={slot.id} className="border border-gray-200 rounded-lg p-3 bg-white">
                    <div className="flex justify-between">
                      <div className="font-bold text-gray-800">
                        {slot.level}-{slot.number}
                      </div>
                      <div className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                        Available
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {slot.type} Slot
                    </div>
                    <button className="w-full mt-2 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium">
                      Reserve
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {selectedTab === 'details' && (
            <div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-800 mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-y-2">
                  {parkingDetails.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-800 mb-3">Contact Information</h3>
                <div className="flex items-center">
                  <Phone size={18} className="text-gray-500 mr-2" />
                  <span className="text-gray-700">{parkingDetails.contactNumber}</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-800 mb-3">Location</h3>
                <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <p className="text-gray-500">Map View</p>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-md flex items-center justify-center font-medium">
                  <Navigation size={18} className="mr-2" />
                  Get Directions
                </button>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-3">Parking Rules</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <AlertCircle size={16} className="text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 text-sm">Maximum parking duration is 24 hours</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle size={16} className="text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 text-sm">15 minutes grace period after reservation ends</p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle size={16} className="text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-700 text-sm">Cancellation is free up to 30 minutes before reservation</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {selectedTab === 'reviews' && (
            <div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">Customer Reviews</h3>
                  <div className="flex items-center">
                    {renderStars(parkingDetails.rating)}
                    <span className="ml-2 font-bold">{parkingDetails.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {reviews.map(review => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 mt-2">{review.comment}</p>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-2 mt-3 border border-blue-600 text-blue-600 rounded-md font-medium">
                  See All Reviews
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom Action Button */}
      <div className="p-4 bg-white border-t border-gray-200">
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold">
          Reserve Parking
        </button>
      </div>
    </div>
  );
};

export default ParkingDetailScreen;