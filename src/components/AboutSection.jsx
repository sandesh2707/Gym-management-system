// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1>Welcome to Pulse Fitness Gym</h1>
        <p>
          At Pulse Fitness Gym, we're more than just a gym—we're a community focused on empowering you to reach your full potential. Whether you're just starting your fitness journey or you're an experienced athlete, we have everything you need to succeed.
        </p>
        <p>
          Our mission is simple: to inspire and support you in every step of your fitness journey. With state-of-the-art equipment, expert trainers, and a motivating environment, we make it easy for you to push your limits and celebrate your progress.
        </p>
        <div className="about-image">
          <img src="/public/about.webp" alt="Pulse Fitness Gym" style={{ width: "600px", height: "auto" }} />
        </div>

        <p>
          Join Pulse Fitness Gym today and be part of a community that believes in you. Start your journey towards a stronger, healthier, and more confident you!
        </p>
      </div>

    </section>
  );
};

export default About;
