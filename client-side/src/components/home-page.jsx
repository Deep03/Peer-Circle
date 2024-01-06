import React from 'react';

function HomePage() {
  // Mock data for connected peers (replace this with actual data from your application)
  const connectedPeers = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
  ];

  return (
    <div className="container">
      <div className="top-bar">
        <h1>Find Peers</h1>
        <input type="text" placeholder="Search by User ID" />
      </div>

      <div className="user-id-form">
        <h2>Your User ID</h2>
        <form>
          <input type="text" value="Your User ID" readOnly />
        </form>
      </div>

      <div className="connected-peers">
        <h2>Connected Peers</h2>
        <ul>
          {connectedPeers.map((peer) => (
            <li key={peer.id}>{peer.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;