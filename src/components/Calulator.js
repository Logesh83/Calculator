import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import calulatorbg1 from '../image/calulatorbg.jpg';
import { Row, Col } from 'react-bootstrap';

function Calulator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const calculateResult = () => {
    let result;
    try {
      const operands = input.match(/[+\-*/]|\d+(\.\d+)?/g);
      result = parseFloat(operands[0]);
      for (let i = 1; i < operands.length; i++) {
        const operator = operands[i];
        const operand = parseFloat(operands[i + 1]);

        switch (operator) {
          case '+':
            result += operand;
            break;
          case '*':
            result *= operand;
            break;
          case '/':
            result /= operand;
            break;
          case '%':
            result %= operand;
            break;
          default:
            break;
        }
      }
      setResult(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div>
      <img className='calbg' src={calulatorbg1} />
      <div className='caltxt'>
        <Row>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <div className='contain'>
              <div className='caluate'>
                <form action='' className='form1'>
                  <input className='txtbox' type='text' value={result || input} readOnly /><br />
                  <div className='button' style={{ fontFamily: "cursive" }}>
                    <input type='button' value='AC' className='btn' onClick={clearInput} />
                    <input type='button' value='DEL' className='btn' onClick={handleBack} />
                    <input type='button' value='%' className='btn' onClick={handleInput} />
                    <input type='button' value='/' className='symbol' onClick={handleInput} />
                  </div>
                  <div className='button' style={{ fontFamily: "cursive" }}>
                    <input type='button' value='7' className='btn' onClick={handleInput} />
                    <input type='button' value='8' className='btn' onClick={handleInput} />
                    <input type='button' value='9' className='btn' onClick={handleInput} />
                    <input type='button' value='*' className='symbol' onClick={handleInput} />
                  </div>
                  <div className='button' style={{ fontFamily: "cursive" }}>
                    <input type='button' value='4' className='btn' onClick={handleInput} />
                    <input type='button' value='5' className='btn' onClick={handleInput} />
                    <input type='button' value='6' className='btn' onClick={handleInput} />
                    <input type='button' value='+' className='symbol' onClick={handleInput} />
                  </div>
                  <div className='button' style={{ fontFamily: "cursive" }}>
                    <input type='button' value='1' className='btn' onClick={handleInput} />
                    <input type='button' value='2' className='btn' onClick={handleInput} />
                    <input type='button' value='3' className='btn' onClick={handleInput} />
                    <input type='button' value='-' className='symbol' onClick={handleInput} />
                  </div>
                  <div className='button' style={{ fontFamily: "cursive" }}>
                    <input type='button' value='00' className='btn' onClick={handleInput} />
                    <input type='button' value='0' className='btn' onClick={handleInput} />
                    <input type='button' value='.' className='btn' onClick={handleInput} />
                    <input type='button' value='=' className='symbol' onClick={calculateResult} />
                  </div>
                </form>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>

      </div>
    </div>
  );
}

export default Calulator;
