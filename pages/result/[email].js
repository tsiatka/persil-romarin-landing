import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import _URL from '../../component/url';

import Head from 'next/head';

import Header from '../../component/Result/Header';
import Footer from '../../component/Result/Footer';
import Layout from '../../component/Layout';
import dataPlat from '../../data/dataPlat.json';
import Card from '../../component/Result/Card';


export default function Result(dataUser) {


    console.log(dataUser)

    const router = useRouter()
    const [routerId, setRouterId] = useState([]);
    // const [dataUser, setDataUser] = useState([]);
    const [plat, setPlat] = useState();
    const [idPlat, setIdPlat] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setRouterId(router.query.email)
        setPlat(dataPlat.dataPlat[0])

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
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Layout />
            <Header count={count} />
            <section className="result_hero">
                <div className="container">
                    <p className="thanks">Merci d'avoir fait le test !</p>
                    <h1>Le menu id??al de la semaine pour {dataUser.dataUser.dataRaw?.prenom}, comme au restaurant.</h1>
                    <p>Nos recommandations vous aideront ?? vous sentir plus ??nergique, ainsi qu????? soulager vos troubles du sommeil.</p>
                    <a>
                        <button onClick={scrollDown}>D??couvrir mon nouveau planning</button>
                    </a>
                </div>
            </section>
            <section id="#planning" className="planning_container">
                <div className="result_content">
                    <div className="answers_container">
                        <p className="answers">Vos R??ponses</p>
                        <h2 className="answers_title">Pour R??capituler...</h2>
                        <div className="text_container">
                            <p className="answer">Votre objectif : </p>
                            <p>{dataUser.dataUser.dataRaw?.objectif}</p>
                        </div>
                        <div className="text_container">
                            <p className="answer">Vous ??tes </p>
                            <p>{dataUser.dataUser.dataRaw?.level}</p>
                        </div>
                        <div className="text_container">
                            <p>Vous ??tes allergique</p>
                            <p>au {dataUser.dataUser.dataRaw?.allergies}</p>
                        </div>
                        <div className="text_container">
                            <p>Vous consommez des </p>
                            <p>{dataUser.dataUser.dataRaw?.pref}</p>
                        </div>
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

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${_URL}/clients`)
    const clients = await res.json()


    // Get the paths we want to pre-render based on posts
    const paths = clients.map((client) => ({
        params: { email: client.email },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${_URL}/clients?email=${params.email}`)
    const dataClient = await res.json()

    let dataUser = dataClient[0];

    // Pass post data to the page via props
    return { props: { dataUser } }
}