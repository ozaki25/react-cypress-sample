import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Typography from './components/Typography';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Container from './components/Container';
import { isUniformNumber } from './utils';
import { members } from './constants/members';

function App() {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const [result, setResult] = useState(null);
  const onChange = e => setValue(e.target.value.trim());
  const onClick = () => {
    const isValid = isUniformNumber(value);
    setValid(isValid);
    setResult(null);
    if (isValid) {
      console.log({ members });
      setResult({ name: members[value], number: value });
      setValue('');
    }
  };
  return (
    <div>
      <Title>ファイターズ選手名鑑2019</Title>
      <Container>
        {!valid && <Typography error>背番号を入力して下さい</Typography>}
        <Typography>
          背番号が
          <TextInput onChange={onChange} value={value} />
          の選手は誰?
        </Typography>
        <Button onClick={onClick}>送信</Button>
        {result && (
          <Typography className="result">
            {`背番号 ${result.number} 番の選手は ${
              result.name ? `${result.name} です` : 'いません'
            }`}
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default App;
