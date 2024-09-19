import {useState} from 'react';

export default function UseHook(){
    const [inputText , setText] = useState('hello');
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <>
            <input value={inputText} onChange={handleChange} />
            <p>You entered : {inputText}</p>
            <button onClick={() => {setText('hello')}}>
                reset
            </button>
        </>
    );

}