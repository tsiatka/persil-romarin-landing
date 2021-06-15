import Question from "../component/Question";
import quizData from '../data/data.json';


export default function Quiz() {
    return (
        <div className="app">
            <Question data={quizData} />
        </div>
    )
}
