import React, { useState } from 'react';
function App() {
    const [inputNumber, setInputNumber] = useState(0);
    const [result, setResult] = useState('');
    const checkPalindrome = () => {
        let num = inputNumber;
        let reversedNum = 0;
        while (num > 0) {
            reversedNum = reversedNum * 10 + (num % 10);
            num = (num - (num % 10)) / 10; }
        if (inputNumber === reversedNum) {
            setResult(inputNumber + ' is a palindrome.');
        } else {
            setResult(inputNumber + ' is not a palindrome.'); }};
    return (
        <div><h1>Palindrome Checker</h1>
 <input type="number" value={inputNumber}onChange={(e) => setInputNumber(Number(e.target.value))}placeholder="Enter a number"/>
            <button onClick={checkPalindrome}>Check</button>
            <p>{result}</p></div>);}
export default App;
