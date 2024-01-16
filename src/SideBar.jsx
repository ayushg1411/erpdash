import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import YourLogo from '../Logo.jpg'; // Replace with the actual path to your logo image

const appName = 'SAP ERP'; // Replace with your app name

const Sidebar = ({ data }) => {
  const location = useLocation();
  const [collapsedSections, setCollapsedSections] = useState(
    Object.fromEntries(data.map((section) => [section._id, true]))
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTcode, setSelectedTcode] = useState(null);

  useEffect(() => {
    // Your logic to handle the selectedTcode and update the state
    // Example: setSelectedTcode(getSelectedTcodeFromLocation(location.pathname));
  }, [location.pathname]);

  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-800 min-h-screen p-4 overflow-y-auto custom-scrollbar">
      <div className="flex items-center mb-4">
        <img src={YourLogo} alt="Your App Logo" className="mr-2" style={{ width: '40px', height: '40px' }} />
        <h1 className="text-xl text-white font-bold">{appName}</h1>
      </div>

      <input
        type="text"
        className="bg-gray-700 text-white rounded-md w-full p-2 mb-4"
        onChange={handleSearch}
        placeholder="Search Here"
      />
      {data.map((section) => (
        <div key={section._id} className="mb-4">
          <div
            className="cursor-pointer flex items-center justify-between mb-2"
            onClick={() => toggleSection(section._id)}
          >
            <h2 className="text-xl text-white font-bold">{section.name}</h2>
            <span className="text-gray-400">
              {collapsedSections[section._id] ? '▼' : '▲'}
            </span>
          </div>
          {collapsedSections[section._id] ? null : (
            <ul>
              {section.checks
                .filter((page) =>
                  page.tcode.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((page) => (
                  <li key={page._id} className="mb-2">
                    <Link
                      to={`/${section.name.toLowerCase()}/${page.tcode}`}
                      className={`block p-2 rounded-md ${
                        location.pathname ===
                        `/${section.name.toLowerCase()}/${page.tcode}`
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              {selectedTcode && (
                <div>
                  {/* Render the corresponding menu for the selected tcode */}
                  {/* Example: renderMenu(selectedTcode) */}
                </div>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
