import React, { useState, useMemo } from 'react';
// useMemo는 특정 값이나 함수가 변경될 때만 연산을 재실행해 성능을 최적화한다. 첫 번째 인자는 계산할 콜백 함수이고, 두번째 인자는 의존성 배열이다.
// 이 배열에 있는 값이 변경될 때만 해당 함수가 재실행된다. excal은 count 값이 변경될 때만 count * 2의 연산이 재계산되며, 그 외에는 캐싱된 값을 사용한다.
const HookMemo: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [show, setShow] = useState<boolean>(true);

    const excal = useMemo<number>(()=>{
        console.log('Calculation....');

        return count * 2;
    }, [count]);

    return (
        <div>
            <p>계산결과: {excal}</p>
            <button onClick={()=>setCount(count+1)}>카운트 증가</button> 
            {/* count값을 증가시키는 버튼으로, 클릭하면 count + 1의 연산으로 count 값이 변경되면 useMemo가 재실행되어 excal값을 재계산한다. */}
            <button onClick={()=>setShow(!show)}>토글 버튼</button>
            {show && <p>show is true</p>}
        </div>
    )
}
export default HookMemo;