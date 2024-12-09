// eslint-disable-next-line no-unused-vars
import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Our Best Workout Programs</h1>
        <p>
          Explore our most popular and effective workout programs, designed to
          help you achieve peak performance. Whether you're looking to lose weight,
          gain muscle, or improve your fitness level, we have the perfect session
          for you. Crafted by expert trainers, our programs push you to achieve
          more every day.
        </p>
        <img src="/img5.jpg" alt="workout session" />
      </div>
      <div className="wrapper">
        <h1>Featured Bootcamps & Training</h1>
        <p>
          Join our curated bootcamps for a transformative fitness journey.
          Tailored for all fitness levels, each bootcamp focuses on a specific
          goal, whether it’s endurance, strength, or agility. Get ready to train
          with some of the best trainers in the industry.
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Bootcamp</h4>
            <p>
              Push your limits with our High-Intensity Interval Training (HIIT)
              sessions. Short, intense bursts followed by recovery help burn fat
              fast while improving endurance.
            </p>
          </div>
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Focus on muscle growth and strength with exercises targeting major
              muscle groups. Great for those who want to increase their strength
              and improve their overall fitness.
            </p>
          </div>
          <div>
            <h4>Cardio Kickboxing</h4>
            <p>
              Get fit with cardio kickboxing! Improve your agility, speed, and
              stamina through a powerful combination of martial arts techniques
              and intense cardio.
            </p>
          </div>
          <div>
            <h4>Functional Fitness</h4>
            <p>
              Mimic real-world movements with exercises that build strength,
              mobility, and flexibility. Perfect for improving balance and
              overall functionality.
            </p>
          </div>
          <div>
            <h4>Heavy Weight Lifting</h4>
            <p>
              For those who want to push their limits, our Heavy Lifting Challenge
              will help you build muscle and strength through compound lifts and
              high-intensity training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
