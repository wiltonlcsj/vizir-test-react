import React from 'react';

import CallForm from './CallForm';
import Header from '../../components/Header';
import { Container } from './styles';

function DashBoard() {
  return (
    <Container>
      <Header />
      <CallForm />
    </Container>
  );
}

export default DashBoard;
