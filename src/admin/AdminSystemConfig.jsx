import React, { useState } from 'react';
import { 
  Save, 
  Plus, 
  Trash, 
  Edit, 
  Clock, 
  DollarSign, 
  Settings,
  MapPin,
  ToggleLeft,
  ToggleRight,
  Link,
  Database,
  Mail,
  Phone
} from 'lucide-react';

const AdminSystemConfig = () => {
  const [activeTab, setActiveTab] = useState('parkingAreas');
  
  // Mock parking areas data
  const parkingAreas = [
    {
      id: 1,
      name: 'Central Mall Parking',
      address: 'Jl. Sudirman No. 123, Jakarta',
      totalSlots: 120,
      status: 'active',
      coordinates: '-6.2088, 106.8456'
    },
    {
      id: 2,
      name: 'City Plaza Parking',
      address: 'Jl. Thamrin No. 45, Jakarta',
      totalSlots: 80,
      status: 'active',
      coordinates: '-6.1944, 106.8230'
    },
    {
      id: 3,
      name: 'Station Parking',
      address: 'Jl. Gatot Subroto No. 67, Jakarta',
      totalSlots: 60,
      status: 'maintenance',
      coordinates: '-6.2256, 106.8019'
    }
  ];
  
  // Mock pricing configurations
  const pricingConfigs = [
    {
      id: 1,
      location: 'Central Mall Parking',
      name: 'Weekday Standard',
      baseRate: 5000,
      hourlyRate: 3000,
      maxDaily: 50000,
      appliesTo: 'All slots',
      timeStart: '06:00',
      timeEnd: '18:00',
      daysApplied: 'Monday - Friday'
    },
    {
      id: 2,
      location: 'Central Mall Parking',
      name: 'Weekday Evening',
      baseRate: 3000,
      hourlyRate: 2000,
      maxDaily: 30000,
      appliesTo: 'All slots',
      timeStart: '18:00',
      timeEnd: '06:00',
      daysApplied: 'Monday - Friday'
    },
    {
      id: 3,
      location: 'Central Mall Parking',
      name: 'Weekend Rate',
      baseRate: 7000,
      hourlyRate: 4000,
      maxDaily: 60000,
      appliesTo: 'All slots',
      timeStart: 'All day',
      timeEnd: '-',
      daysApplied: 'Saturday - Sunday'
    }
  ];
  
  // Mock integration settings
  const integrationSettings = {
    paymentGateways: [
      {
        name: 'Stripe',
        status: 'active',
        lastSync: '15 minutes ago'
      },
      {
        name: 'PayPal',
        status: 'inactive',
        lastSync: 'Never'
      },
      {
        name: 'Local Payment Provider',
        status: 'active',
        lastSync: '2 hours ago'
      }
    ],
    mapServices: {
      provider: 'Google Maps',
      apiKey: '••••••••••••••••••••••••••',
      status: 'active'
    },
    notifications: {
      email: {
        provider: 'SendGrid',
        status: 'active',
        templates: 4
      },
      sms: {
        provider: 'Twilio',
        status: 'active',
        templates: 3
      },
      push: {
        provider: 'Firebase',
        status: 'active',
        templates: 5
      }
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">System Configuration</h2>
        <p className="text-gray-600">Manage parking areas, pricing, and integrations</p>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex px-4 space-x-6">
          <button 
            className={`py-4 px-1 ${activeTab === 'parkingAreas' 
              ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('parkingAreas')}
          >
            <div className="flex items-center">
              <MapPin size={18} className="mr-2" />
              <span>Parking Areas</span>
            </div>
          </button>
          
          <button 
            className={`py-4 px-1 ${activeTab === 'pricing' 
              ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('pricing')}
          >
            <div className="flex items-center">
              <DollarSign size={18} className="mr-2" />
              <span>Pricing</span>
            </div>
          </button>
          
          <button 
            className={`py-4 px-1 ${activeTab === 'integrations' 
              ? 'border-b-2 border-blue-500 text-blue-600 font-medium' 
              : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            onClick={() => setActiveTab('integrations')}
          >
            <div className="flex items-center">
              <Link size={18} className="mr-2" />
              <span>Integrations</span>
            </div>
          </button>
        </nav>
      </div>
      
      {/* Content based on active tab */}
      <div className="p-4">
        {/* Parking Areas Tab */}
        {activeTab === 'parkingAreas' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Parking Areas</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <Plus size={16} className="mr-2" />
                Add Parking Area
              </button>
            </div>
            
            <div className="space-y-4">
              {parkingAreas.map(area => (
                <div key={area.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-lg">{area.name}</h4>
                      <p className="text-gray-600">{area.address}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      area.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {area.status.charAt(0).toUpperCase() + area.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Total Slots</p>
                      <p className="font-medium">{area.totalSlots}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Coordinates</p>
                      <p className="font-medium">{area.coordinates}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      View Slots
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 flex items-center">
                      <Edit size={16} className="mr-1" />
                      Edit
                    </button>
                    <button className="px-3 py-1 border border-red-300 rounded-md text-red-600 flex items-center">
                      <Trash size={16} className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Pricing Configuration</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <Plus size={16} className="mr-2" />
                Add Pricing Rule
              </button>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">Filter by Location</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>All Locations</option>
                <option>Central Mall Parking</option>
                <option>City Plaza Parking</option>
                <option>Station Parking</option>
              </select>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-600 text-sm">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium">Rule Name</th>
                    <th className="py-3 px-4 text-left font-medium">Location</th>
                    <th className="py-3 px-4 text-left font-medium">Base Rate</th>
                    <th className="py-3 px-4 text-left font-medium">Hourly Rate</th>
                    <th className="py-3 px-4 text-left font-medium">Applied Time</th>
                    <th className="py-3 px-4 text-left font-medium">Days</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pricingConfigs.map(price => (
                    <tr key={price.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{price.name}</td>
                      <td className="py-3 px-4 text-gray-600">{price.location}</td>
                      <td className="py-3 px-4">Rp {price.baseRate.toLocaleString()}</td>
                      <td className="py-3 px-4">Rp {price.hourlyRate.toLocaleString()}/hour</td>
                      <td className="py-3 px-4 text-gray-600">{price.timeStart} - {price.timeEnd}</td>
                      <td className="py-3 px-4 text-gray-600">{price.daysApplied}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="p-1 hover:bg-gray-100 rounded-full">
                            <Edit size={16} className="text-blue-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded-full">
                            <Trash size={16} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Special Pricing Rules</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Dynamic Pricing</p>
                    <p className="text-sm text-gray-600">Adjust prices based on demand</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-gray-200">
                    <div className="absolute right-0 w-6 h-6 rounded-full bg-white border border-gray-300 shadow"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Loyalty Discounts</p>
                    <p className="text-sm text-gray-600">Special rates for regular users</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-blue-500">
                    <div className="absolute right-0 w-6 h-6 rounded-full bg-white border border-gray-300 shadow"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Holiday Rates</p>
                    <p className="text-sm text-gray-600">Special pricing for holidays</p>
                  </div>
                  <div className="relative inline-block w-12 h-6 rounded-full bg-blue-500">
                    <div className="absolute right-0 w-6 h-6 rounded-full bg-white border border-gray-300 shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Integrations Tab */}
        {activeTab === 'integrations' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">System Integrations</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
            </div>
            
            {/* Payment Gateways */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 flex items-center">
                <DollarSign size={18} className="mr-2 text-green-500" />
                Payment Gateways
              </h4>
              
              <div className="space-y-3">
                {integrationSettings.paymentGateways.map((gateway, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{gateway.name}</p>
                      <p className="text-sm text-gray-600">Last sync: {gateway.lastSync}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        gateway.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {gateway.status.charAt(0).toUpperCase() + gateway.status.slice(1)}
                      </span>
                      <button className="p-1 hover:bg-gray-100 rounded-full">
                        <Settings size={16} className="text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}
                
                <button className="border border-dashed border-gray-300 rounded-lg p-3 w-full text-blue-600 flex items-center justify-center">
                  <Plus size={16} className="mr-2" />
                  Add Payment Gateway
                </button>
              </div>
            </div>
            
            {/* Map Service */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 flex items-center">
                <MapPin size={18} className="mr-2 text-blue-500" />
                Map Service
              </h4>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{integrationSettings.mapServices.provider}</p>
                    <p className="text-sm text-gray-600 mt-1">API Key: {integrationSettings.mapServices.apiKey}</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                
                <div className="mt-3 flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm">
                    Test Connection
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 text-sm">
                    Update API Key
                  </button>
                </div>
              </div>
            </div>
            
            {/* Notification Services */}
            <div>
              <h4 className="font-medium mb-3 flex items-center">
                <Mail size={18} className="mr-2 text-purple-500" />
                Notification Services
              </h4>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Mail size={20} className="text-gray-500 mr-2" />
                      <p className="font-medium">Email</p>
                    </div>
                    <div className="relative inline-block w-10 h-5 rounded-full bg-blue-500">
                      <div className="absolute right-0 w-5 h-5 rounded-full bg-white border border-gray-300 shadow"></div>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Provider: {integrationSettings.notifications.email.provider}</p>
                    <p className="text-sm text-gray-600">Templates: {integrationSettings.notifications.email.templates}</p>
                  </div>
                  
                  <button className="mt-3 w-full py-1 border border-gray-300 rounded-md text-gray-700 text-sm">
                    Configure
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Phone size={20} className="text-gray-500 mr-2" />
                      <p className="font-medium">SMS</p>
                    </div>
                    <div className="relative inline-block w-10 h-5 rounded-full bg-blue-500">
                      <div className="absolute right-0 w-5 h-5 rounded-full bg-white border border-gray-300 shadow"></div>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Provider: {integrationSettings.notifications.sms.provider}</p>
                    <p className="text-sm text-gray-600">Templates: {integrationSettings.notifications.sms.templates}</p>
                  </div>
                  
                  <button className="mt-3 w-full py-1 border border-gray-300 rounded-md text-gray-700 text-sm">
                    Configure
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <Bell size={20} className="text-gray-500 mr-2" />
                      <p className="font-medium">Push</p>
                    </div>
                    <div className="relative inline-block w-10 h-5 rounded-full bg-blue-500">
                      <div className="absolute right-0 w-5 h-5 rounded-full bg-white border border-gray-300 shadow"></div>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Provider: {integrationSettings.notifications.push.provider}</p>
                    <p className="text-sm text-gray-600">Templates: {integrationSettings.notifications.push.templates}</p>
                  </div>
                  
                  <button className="mt-3 w-full py-1 border border-gray-300 rounded-md text-gray-700 text-sm">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSystemConfig;