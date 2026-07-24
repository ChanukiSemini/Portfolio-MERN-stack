function About() {
  return (
    <section className="about-page">
      <div className="card intro-card">
        <h1>About Me</h1>
        <p>
          I am a passionate Computer Science student and full-stack developer with a
          love for meaningful digital products. My experience spans front-end
          development, backend APIs, and product design. I enjoy solving complex user
          problems through clean code and intuitive interfaces.
        </p>
      </div>

      <div className="about-grid">
        <div className="card">
          <h2>Education</h2>
          <ul>
            <li>BSc (Hons) Computer Science &mdash; University of Westminster (UK)</li>
            <li>BSc Information &amp; Communication Technology &mdash; University of Sri Jayewardenepura</li>
          </ul>
        </div>

        <div className="card">
          <h2>Skills</h2>
          <div className="tag-list">
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Express</span>
            <span className="tag">MongoDB</span>
            <span className="tag">HTML &amp; CSS</span>
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">Figma</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Contact</h2>
        <p>Email: Chanukisemini.me@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/chanuki-semini</p>
        <p>GitHub: github.com/ChanukiSemini</p>
      </div>
    </section>
  );
}

export default About;
