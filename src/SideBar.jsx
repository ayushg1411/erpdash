import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ data }) => {
  const location = useLocation();
  const [collapsedSections, setCollapsedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

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
    <div className="bg-gray-400 min-h-screen  top-0 p-4 overflow-y-auto custom-scrollbar">
      <input
        type="text"
        className="bg-gray-100 rounded-md w-[260px]"
        onChange={handleSearch}
        placeholder="Search Here"
      />
      {data.map((section) => (
        <div key={section._id}>
          <div
            className="cursor-pointer mb-2"
            onClick={() => toggleSection(section._id)}
          >
            <h2 className="text-xl text-white font-bold">{section.name}</h2>
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
                      className={`${
                        location.pathname ===
                        `/${section.name.toLowerCase()}/${page.tcode}`
                          ? 'text-blue-500'
                          : ''
                      }`}
                    >
                      <h1 className="text-xs font-semibold">{page.name}</h1>
                    </Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
