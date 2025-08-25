import React, { useState, useCallback } from 'react';
/*
리액트 함수 컴포넌트는 상태가 업데이트 될 때마다 리렌더링된다. 이때 컴포넌트 내부에 있는 함수인 increment와 같은 함수는 리렌렌더링될 때마다 불필요하게 새로  생성된다. 
하지만 useCallback을 사용하면 increment 함수가 메모이제이션되므로 컴포넌트가 다시 렌더링되더라도 increment 함수는 새로 생성되지 않는다.
이렇게 불필요한 함수 생성을 방지하여 성능을 최적화할 수 있다.
*/
const HookCallback: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase</button>
        </div>
    );
}

export default HookCallback;