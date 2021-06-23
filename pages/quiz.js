import react, { useState } from 'react';
import Head from 'next/head';

import _URL from "../component/url";
import Question from "../component/Question";
import Layout from '../component/Layout';


export default function Quiz({ questions }) {

    const [activeQuestion, setActiveQuestion] = useState(1);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Layout />
            <>
                <div className="app">
                    <>
                        <Question
                            data={questions?.filter(item => item.ordre === activeQuestion)[0]}
                            datas={questions}
                            numberOfQuestions={questions?.filter(data => data.progress === true).length}
                            activeQuestion={activeQuestion}
                            onSetActiveQuestion={setActiveQuestion}
                        />
                    </>
                </div>
            </>
        </>
    )
}

export const getServerSideProps = async () => {

    var headers = new Headers();
    headers.append("accept", "application/json");
    headers.get("accept");
    const myInit = {
        headers: headers,
    };

    const res = await fetch(`${_URL}/questions`, myInit)
    const questions = await res.json();

    return {
        props: {
            questions,
        },
    }
}



