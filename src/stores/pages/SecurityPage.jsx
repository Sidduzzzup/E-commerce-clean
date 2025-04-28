import React from 'react';
import { Container } from 'react-bootstrap';

const SecurityPage = () => {
  return (
    <Container className="py-5 mt-5">
      <h1>Security</h1>
      <p>Learn about our security features and best practices.</p>
      
      <section className="mt-4">
        <h2>Security Features</h2>
        <ul>
          <li>End-to-end encryption</li>
          <li>Two-factor authentication</li>
          <li>Regular security audits</li>
          <li>Compliance with industry standards</li>
        </ul>
      </section>
      
      <section className="mt-4">
        <h2>Best Practices</h2>
        <ul>
          <li>Use strong passwords</li>
          <li>Enable 2FA when available</li>
          <li>Keep your systems updated</li>
          <li>Monitor your account activity</li>
        </ul>
      </section>
    </Container>
  );
};

export default SecurityPage; 