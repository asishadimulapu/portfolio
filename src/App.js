import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="header">
        <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }}>👨‍💻 Asish's Portfolio</motion.h1>
        <p>AI & ML Enthusiast | Full Stack Developer</p>
      </header>

      <section className="section">
        <motion.h2 whileHover={{ scale: 1.05 }}>About Me</motion.h2>
        <p>
          Hi, I’m <strong>Asish</strong> – a 3rd-year B.Tech AIML student at <strong>Anurag University</strong>. I love building smart and scalable apps using the <strong>MERN stack, Java, and Python</strong>.
        </p>
        <p>
          I solve real-world problems with clean code, scalable APIs, and beautiful UI/UX designs.
        </p>
      </section>

      <section className="section">
        <motion.h2 whileHover={{ scale: 1.05 }}>Projects</motion.h2>

        <motion.div className="card" whileHover={{ scale: 1.02 }}>
          <h3>🔢 Handwritten Digit Recognition</h3>
          <ul>
            <li>Python + TensorFlow/Keras + CNN on MNIST</li>
            <li>Live prediction GUI using Tkinter</li>
            <li>High accuracy with real-time inference</li>
          </ul>
        </motion.div>

        <motion.div className="card" whileHover={{ scale: 1.02 }}>
          <h3>🤖 Gemini API Chatbot</h3>
          <ul>
            <li>MERN + Google Gemini API</li>
            <li>JWT Auth, WebSocket Messaging</li>
            <li>Chat History in MongoDB, CRUD Features</li>
          </ul>
        </motion.div>
      </section>

      <section className="section">
        <motion.h2 whileHover={{ scale: 1.05 }}>Tech Stack</motion.h2>
        <ul>
          <li><strong>Languages:</strong> Java, C, JavaScript, HTML, CSS, Python</li>
          <li><strong>Frameworks:</strong> React, Node.js, Express.js, MongoDB, Tailwind CSS</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, MongoDB Atlas, uv</li>
        </ul>
      </section>

      <section className="section">
        <motion.h2 whileHover={{ scale: 1.05 }}>Certifications</motion.h2>
        <ul>
          <li>NPTEL – Introduction to Machine Learning</li>
          <li>Google AI for India Certification</li>
        </ul>
      </section>

      <footer className="footer">
        <p><em>“Build with purpose, deploy with vision.” – Asish</em></p>
      </footer>
    </motion.div>
  );
}

export default App;
