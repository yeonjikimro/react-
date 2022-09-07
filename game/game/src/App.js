import HandIcon from './HandIcon';
import HandButton from './HandButton';
import Button from './Button';
import { compareHand, generateRandomHand } from './utils';
import { useState } from 'react';
import './App.css';



const INITIAL_VALUE = 'rock';

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return '승리';
    if (comparison < 0) return '패배';
    return '무승부';
}



function App() {
    // hand와 otherHand를 state로 바꾸어 주세요
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);


    const handleButtonClick = (nextHand) => {
    // hand의 값을 nextHand 로 바꿔주세요
    // otherHand의 값을 generateRandomHand()의 리턴 값으로 바꿔주세요
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해주세요
    //기존 배열에서 새로운 배열을 만들려면 [...gameHistory, nextHistoryItem] 과 같이 Spread 문법으로 할 수 있습니다
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherHand(otherScore + bet);
};

    const handleClearClick = () => {
 // hand와 otherHand의 값을 'rock' 으로 변경해주세요
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        // gameHistory를 비워주세요
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    };

    const handleBetChange = (e) => {
        let num = Number(e.target.value);
        if (num > 9) num %= 10;
        if (num < 1) num = 1;
        num = Math.floor(num);
        setBet(num);
    };

    

    return (
    <div className='App'>
    <h1 className='App-heading'>가위바위보</h1>
        <img onClick={handleClearClick} className='App-reset' src="./assets/ic-reset.svg" alt="초기화" />

        <div className='Score'>
            <div className='Score-num'>{score}</div>
            <div className='Score-name'>나</div>
        </div>
        <div className='App-versus'>:</div>
        <div className="Score">
            <div className='Score-num'>{otherScore}</div>
            <div className='Score-name'>상대</div>
        </div>
        <div className='Box App-box'>
            <div className='Box-inner'>
                <div className='App-hands'>
                    <div className='Hand'>
                     <HandIcon value={hand} />
                    </div>
                    <div className='App-versus'>VS</div>
                    <div className='Hand'>
                        <HandIcon value={otherHand} />
                    </div>
                </div>
                <div className='App-bet'>
                    <span>배점</span>
                    <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
                </div>
                <div className='App-history'>
                    <h2>승부기록</h2>
                    <p>{gameHistory.join(',')}</p>
                </div>
            </div>
        </div>
            <HandButton  value="rock" onClick={handleButtonClick}/>
            <HandButton value="scissor" onClick={handleButtonClick}/>
            <HandButton value="paper" onClick={handleButtonClick}/>         
    </div>
    );
}

export default App;