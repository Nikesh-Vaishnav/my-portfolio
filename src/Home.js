import React, { useEffect } from "react";
import "./styles/Home.css";

const Home = () => {
  useEffect(() => {
    const element = document.getElementById("element");
    const words = ["Front-end Developer", "Video Editor", "Digital Marketer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 50;
    const deletingSpeed = 50;

    function typeEffect() {
      if (!element) return;
      
      const currentWord = words[wordIndex];
      element.textContent = currentWord.substring(0, letterIndex); // Reset text properly
      
      if (!isDeleting) {
        if (letterIndex < currentWord.length) {
          letterIndex++;
          setTimeout(typeEffect, typingSpeed);
        } else {
          isDeleting = true;
          setTimeout(typeEffect, 1000);
        }
      } else {
        if (letterIndex > 0) {
          letterIndex--;
          setTimeout(typeEffect, deletingSpeed);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, 500);
        }
      }
    }

    typeEffect();
  }, []);

  return (
    <div className="home">
      <section className="firstsection">
        <div className="leftsection">
          Hi, Myself <span className="purple">Nikesh Vaishnav</span><br />
          and I am Passionate <br />
          <span id="element"></span><br />
        </div>
        <div className="rightsection">
          <img src="/bg.png" alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default Home;
