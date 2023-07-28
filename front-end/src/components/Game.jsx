import {useState} from 'react';
import axios from 'axios';

const Game = () => {

    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [gameIsFinished, setGameIsFinished] = useState(false);
    const [questionState, setQuestionState] = useState(0);

    const [caracterResult, setCaracterResult] = useState({
        superheroname: '',
        realname: '',
        description: '',
        age: 0,
        powers: ['', '', ''],
        image: ''
    });

    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);

    const goToNextQuestion = () => {

        if (questionState === 5) {
            endGame();
            return;
        }

        let obj = {
            question_number: questionState + 1
        }
        
        setGameIsStarted(true);
        setQuestionState(questionState + 1); // attention c'est asynchrone

        axios.post('http://localhost:4000/get-question-answers', JSON.stringify(obj), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            setQuestion(res.data.question);
            setAnswers(res.data.answers);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const chooseAnswer = (answer_index) => {
        let obj = {
            question_number: questionState,
            answer_number: answer_index + 1 
        }
        
        axios.post('http://localhost:4000/answer-question', JSON.stringify(obj), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

        goToNextQuestion();
    }

    const endGame = () => {
        setGameIsStarted(false);
        setGameIsFinished(true);
        setQuestionState(0);

        axios.post('http://localhost:4000/get-result')
        .then((res) => {
            const data = res.data.caracter[0];
            setCaracterResult({
                superheroname: data['super-hero-name'],
                realname: data['real-name'],
                description: data.description,
                age: data.age,
                powers: data.powers,
                image: data.image
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    const resetGame = () => {
        setGameIsStarted(false);
        setGameIsFinished(false);
        setQuestionState(0);
        setCaracterResult({
            superheroname: '',
            realname: '',
            description: '',
            age: 0,
            powers: ['', '', ''],
            image: ''
        });
    }

    return (
        <>
            {(!gameIsStarted && !gameIsFinished) && 
            <>
                <div className="flex flex-col h-screen items-center justify-center gap-24">
                    <div className="bg-neutral-300 rounded-xl py-4 px-6">
                        <img src="./game-title.png" width={500} alt="game-title"/>
                    </div>
                    <div className="h-auto mt-4">
                        <button onClick={goToNextQuestion} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                            Commencer à jouer
                        </button>
                    </div>
                </div>
            </>
            }
            {gameIsStarted && 
            <>
                <div className="flex flex-col items-center justify-start gap-24 pt-8">
                    <div className="bg-neutral-300 rounded-xl py-4 px-6 w-2/5 text-center">
                        <h1 className="text-2xl font-bold text-center">Question : <br></br>{question}</h1>
                    </div>
                    <div className="mt-8 flex flex-row gap-16">
                        {answers.map((answer, index) => {
                            return (
                                <div key={index} className="bg-gray-700 rounded-xl py-5 px-6 border-gray-200 border-2 cursor-pointer max-w-md flex items-center justify-center h-full" onClick={() => chooseAnswer(index)}>
                                    <h1 className="text-2xl text-white font-bold text-center">{answer}</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className="absolute bottom-8">
                        <button onClick={resetGame} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                            Rejouer
                        </button>
                    </div>
                </div>
            </>}
            {gameIsFinished && 
            <>
                <div className="flex justify-center items-center py-4">
                    <button onClick={resetGame} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded">
                        Rejouer
                    </button>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-1/3 flex justify-center">
                        <img src={caracterResult.image} className="w-3/5 rounded-xl" alt="superhero-image"/>
                    </div>
                    <div className="w-2/3 pl-4 text-white">
                        <h2 className="text-8xl font-medium mb-10">{caracterResult.superheroname}</h2><br></br>
                        <p className="text-2xl font-medium"><strong className="underline">Nom réel :</strong> {caracterResult.realname}</p>
                        <p className="text-xl font-medium"><strong className="underline">Age :</strong> {caracterResult.age}</p>
                        <p className="text-xl font-medium w-2/3 text-justify"><strong className="underline">Description :</strong> {caracterResult.description}</p>
                        <p className="text-xl font-medium"><strong className="underline">Pouvoirs :</strong></p>
                        <ul>
                            <li className="text-2xl font-medium ml-5 mt-8">{caracterResult.powers[0]}</li>
                            <li className="text-2xl font-medium ml-5 mt-3">{caracterResult.powers[1]}</li>
                            <li className="text-2xl font-medium ml-5 mt-3">{caracterResult.powers[2]}</li>
                        </ul>
                    </div>
                </div>
            </>}
        </>
        
    );
}

export default Game;