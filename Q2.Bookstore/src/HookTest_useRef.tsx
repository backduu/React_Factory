import React, { useRef } from 'react';

// useRef를 사용하면 컴포넌트가 리렌더링되더라도 유지된다. 따라서 useRef를 통해 inputRef에 할당된 참조는 컴포넌트가 리렌더링 되더라도 유지된다.
// 따라서 inputRef.current를 통해서 <input>요소에 계속해서 접근할 수 있다.
const HookRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={focusInput}>포커스 설정</button>
        </div>
    );
};

export default HookRef;