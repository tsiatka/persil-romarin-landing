import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import _URL from '../component/url';

import Header from '../component/Result/Header';
import Footer from '../component/Result/Footer';
import Layout from '../component/Layout';
import dataPlat from '../data/dataPlat.json';
import Card from '../component/Result/Card';


export default function Result() {

    const router = useRouter()
    const [routerId, setRouterId] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [plat, setPlat] = useState();
    const [idPlat, setIdPlat] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setRouterId(router.query.email)
        setPlat(dataPlat.dataPlat[0])

        var headers = new Headers();
        headers.append("accept", "application/json");
        headers.get("accept");
        const myInit = {
            headers: headers,
        };

        async function getEmail() {
            const response = await fetch(`${_URL}/clients?email=${routerId}`, myInit)
            const data = await response.json();
            setDataUser(data)
            console.log(data, "data")
        };
        getEmail();
    }, [router])

    function scrollDown() {
        window.scrollTo({ top: 600, behavior: 'smooth' })
    }

    const clickHandle = () => {
        setCount(count + 1)
    }
    const dayHandle = (e) => {
        setIdPlat(e.target.id)
        if (e.target.id == 1) {
            setPlat(dataPlat.dataPlat[0])
        }
        if (e.target.id == 2) {
            setPlat(dataPlat.dataPlat[1])
        }
        if (e.target.id == 3) {
            setPlat(dataPlat.dataPlat[2])
        }
        if (e.target.id == 4) {
            setPlat(dataPlat.dataPlat[3])
        }
        if (e.target.id == 5) {
            setPlat(dataPlat.dataPlat[4])
        }
        if (e.target.id == 6) {
            setPlat(dataPlat.dataPlat[5])
        }
        if (e.target.id == 7) {
            setPlat(dataPlat.dataPlat[6])
        }
    }

    return (
        <>
            <Layout />
            <Header count={count} />
            <section className="result_hero">
                <div className="container">
                    <p className="thanks">Merci d'avoir fait le test !</p>
                    <h1>Le menu idéal de la semaine pour "Mathieu", comme au restaurant.</h1>
                    <p>Nos recommandations vous aideront à vous sentir plus énergique, ainsi qu’à soulager vos troubles du sommeil.</p>
                    <a>
                        <button onClick={scrollDown}>Découvrir mon nouveau planning</button>
                    </a>
                </div>
            </section>
            <section id="#planning" className="planning_container">
                <div className="result_content">
                    <div className="answers_container">
                        <p className="answers">Vos Réponses</p>
                        <h2 className="answers_title">Pour Récapituler...</h2>
                        <div className="text_container">
                            <p className="answer">Votre objectif : </p>
                            <p>{dataUser[0]?.dataRaw.objectif}</p>
                        </div>
                        <div className="text_container">
                            <p className="answer">Vous êtes </p>
                            <p>{dataUser[0]?.dataRaw.level}</p>
                        </div>
                        <div className="text_container">
                            <p>Vous êtes allergique</p>
                            <p>à : {dataUser[0]?.dataRaw.allergies}</p>
                        </div>
                        {dataUser[0]?.dataRaw?.alliments &&
                            <div className="text_container">
                                <p>Vous ne consommez pas de : </p>
                                <p>{dataUser[0]?.dataRaw?.alliments}</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="planning">
                    <div className="planning_head">
                        {
                            dataPlat.dataPlat.map((plat, i) => (
                                <div id={plat.id} className="item" onClick={(e) => dayHandle(e)} key={i}>{plat.day}</div>
                            ))
                        }
                    </div>
                    <div className="planning_content">
                        {plat !== undefined &&
                            <Card plat={plat} click={clickHandle} />
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

// export const getServerSideProps = async ({ routerId }) => {


//     var headers = new Headers();
//     headers.append("accept", "application/json");
//     headers.get("accept");
//     const myInit = {
//         headers: headers,
//     };

//     const res = await fetch(`${_URL}/clients?email=${routerId}`, myInit)
//     const data = await res.json();
//     console.log(`${_URL}/clients?email=${routerId}`)
//     console.log(routerId, "data")

//     return {
//         props: {
//             data,
//         },
//     }
// }