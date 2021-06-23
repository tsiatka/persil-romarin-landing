import React from 'react';

import Header from '../component/Result/Header'
import Footer from '../component/Result/Footer'
import Layout from '../component/Layout'

export default function Hero() {
    return (
        <>
            <Layout />
            <Header />
            <section className="result_hero">
                <div className="container">
                    <p>Merci d'avoir fait le test !</p>
                    <h1>Le menu idéal de la semaine pour "Mathieu", comme au restaurant.</h1>
                    <p>Nos recommandations vous aideront à vous sentir plus énergique, ainsi qu’à soulager vos troubles du sommeil.</p>
                    <a href="">
                        <button>Découvrir mon nouveau planning</button>
                    </a>
                </div>
            </section>
            <section className="planning_container">
                <div className="result_content">

                </div>
                <div>

                </div>
            </section>
            <Footer />
        </>
    );
}