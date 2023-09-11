import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply ,divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/Calculate';
// import add from '../../Utils/Calculate';

const Sunglass = () => {
    const first=55;
    const second=45;
    const sum=add(first,second);
    const mult= multiply(first,second);
    const baag=divide(first,second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;