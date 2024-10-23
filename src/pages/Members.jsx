import React from 'react';
import './Members.css';
import UclaNavbar from '../component/UclaNavbar';

function Members() {
  return (
    <>
      <UclaNavbar />
      <div className="members-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Members</h1>
        <div className="members-list bg-white p-6 rounded shadow-md w-full max-w-4xl">
          <div className="member-item mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Member Name 1</h2>
            <p className="text-gray-700">Role: Member Role 1</p>
          </div>
          <div className="member-item mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Member Name 2</h2>
            <p className="text-gray-700">Role: Member Role 2</p>
          </div>
          <div className="member-item mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Member Name 3</h2>
            <p className="text-gray-700">Role: Member Role 3</p>
          </div>
          {/* Add more members as needed */}
        </div>
      </div>
    </>
  );
}

export default Members;