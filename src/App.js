import React, { useState } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Typography from './components/Typography';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Container from './components/Container';
import { isUniformNumber } from './utils/index';

function App() {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(true);
  const onChange = e => setValue(e.target.value.trim());
  const onClick = () => {
    const isValid = isUniformNumber(value);
    setValid(isValid);
    if (isValid) {
      setValue('');
      alert(value);
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
      </Container>
    </div>
  );
}

export default App;
