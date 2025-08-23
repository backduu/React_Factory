import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import './App.css';


const Timer : React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);

    const startTimer = () => {
        if(intervalRef.current) return; // 이미 실행 중이면 무시함

        intervalRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    }

    const stopTimer = () => {
        if(intervalRef.current) {
            clearInterval(intervalRef.current); // 타이머 정지 및 메모리 누수 방지지
            intervalRef.current = null;
        }
    }

    // 언마운트 시 정리리
    useEffect(() => {
        return () => {
            stopTimer();
        };
    }, []);

    return (
        <div className="board">
            <h4>타이머 : {seconds} 초 </h4>
            <Button onClick={startTimer}>시작</Button>
            <Button onClick={stopTimer}>정지</Button>
        </div>
    )
}


export default Timer;