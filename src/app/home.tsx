import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0 auto', padding: '20px', maxWidth: '800px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1></h1>
        <h3>Undergraduate in Computing and Information Systems</h3>
        <h4>Sabaragamuwa University of Sri Lanka</h4>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am currently pursuing a degree in Computing and Information Systems at Sabaragamuwa University of Sri Lanka.
          Passionate about web development, programming, and working on exciting projects that solve real-world problems.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Web Development: HTML, CSS, JavaScript, TypeScript, React</li>
          <li>Back-End Development: Node.js, Express</li>
          <li>Database Management: MySQL, MongoDB</li>
          <li>Programming Languages: Java, Python, C++</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Self-Reading Electricity Bill System:</strong> A system with advanced image recognition and digital bill management.</li>
          <li><strong>Sinhala Text Recognition System:</strong> A project aimed at developing an OCR system for Sinhala text.</li>
          <li><strong>AudiRAB:</strong> An audiobook mobile and web application with features like story generation and music integration.</li>
        </ul>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>Connect with me on <a href="https://www.linkedin.com/">LinkedIn</a></p>
      </footer>
    </div>
  );
};

export default Home;
