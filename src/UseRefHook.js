import { useRef } from 'react';

export default function UseRefHook(){

    
    const inputEl = useRef(null);

    const onButtonClick = () => {
      inputEl.current.focus();
    };
    return (
      <>
      <h1>
            useRef Hook implementation
        </h1>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
