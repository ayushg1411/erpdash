import React from 'react';

function Profile() {

    const user = JSON.parse(localStorage.getItem("currentUser"))
    const handleLogout = () => {
    // Clear all local storage
    localStorage.clear();
    // Redirect to the login page or any other desired page
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="mb-4">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="mb-4">
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className="mb-4">
          <strong>Login Id:</strong> {user.email}
        </div>
        <button className="bg-gray-200 mx-1 p-1" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
