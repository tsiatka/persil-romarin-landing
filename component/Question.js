import react from 'react';

function Question(props) {

    const { data } = props;

    console.log(data.data[0])

    return (
        <div className="card_container">
            <h2>{data.data[0].question}</h2>
            <div className="choices_container">
                {data.data[0].choices.map((choice, i) => (
                    <div className="choices" key={i}>
                        <img src="logo.svg" alt="" />
                        {choice}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Question;