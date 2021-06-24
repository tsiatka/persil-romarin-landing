import React from 'react';

import Header from '../component/Hero/Header'
import Footer from '../component/Hero/Footer'
import Layout from '../component/Layout';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <Layout />
        <Header />
        <div className="hero_container">
          <div className="hero_content">
            <div className="hero_block">
              <h1>Des plats adaptés à vos besoins, sans en sacrifier le temps ni les saveurs</h1>
              <p>Vous êtes unique et vos besoins aussi.</p>
              <p>Trouvons ensemble quels plats vous correspondent le mieux.</p>
              <button><a href="/quiz">Faites le test</a></button>
              <div className="hero_icon">
                <img src="/time.svg" alt="" />
                <p>~ 2:30min</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}