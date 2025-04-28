import React from 'react';
import { Container } from 'react-bootstrap';

const InfraLogPage = () => {
  return (
    <Container className="py-5 mt-5">
      <h1>Infrastructure Log</h1>
      <p>Track and monitor our infrastructure updates and changes.</p>
      
      <section className="mt-4">
        <h2>Recent Updates</h2>
        <div className="timeline">
          <div className="mb-4">
            <h5>March 15, 2024</h5>
            <p>Upgraded server infrastructure for improved performance</p>
          </div>
          <div className="mb-4">
            <h5>March 10, 2024</h5>
            <p>Implemented new load balancing system</p>
          </div>
          <div className="mb-4">
            <h5>March 5, 2024</h5>
            <p>Enhanced database optimization</p>
          </div>
        </div>
      </section>
      
      <section className="mt-4">
        <h2>Upcoming Maintenance</h2>
        <ul>
          <li>Server upgrades - March 20, 2024</li>
          <li>Network optimization - March 25, 2024</li>
          <li>Security patches - March 30, 2024</li>
        </ul>
      </section>
    </Container>
  );
};

export default InfraLogPage; 