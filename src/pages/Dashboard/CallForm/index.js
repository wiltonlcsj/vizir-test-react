import React, { useState, useEffect } from 'react';

import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import { Container } from './styles';
import api from '../../../services/api';
import Result from '../Result';

function CallForm() {
  const schema = Yup.object().shape({
    origin: Yup.string().length(3).required('O código de origem é obrigatório'),
    destiny: Yup.string()
      .length(3)
      .required('O código de destino é obrigatório'),
    time: Yup.number()
      .typeError('A quantidade minutos deve ser um número')
      .required('A quantidade de minutos é obrigatória')
      .integer({
        message: 'A quantidade de minutos deve ser um inteiro',
      }),
    plan: Yup.number()
      .typeError('O plano de minutagem é obrigatório')
      .required('O plano de minutagem é obrigatório')
      .integer({ message: 'O plano deve ter um valor inteiro' }),
  });

  const [options, setOptions] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    async function getPlans() {
      const response = await api.get('/plans');
      setOptions(
        response.data.plans.map((item) => ({
          id: item.id,
          title: item.name,
        }))
      );
    }
    getPlans();
  }, []);

  function handleSubmitForm(data) {
    api
      .post('/calculate', data)
      .then((response) => {
        setResult(response.data);
      })
      .catch(() => {
        toast.error(
          'Não foram encontrados resultados para os filtros selecionados',
        );
      });
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmitForm}>
          <label htmlFor="origin">
            Código de Origem
            <Input
              type="text"
              maxLength="3"
              name="origin"
              id="origin"
              placeholder="Insira o código de origem"
            />
          </label>
          <label htmlFor="destiny">
            Código de Destino
            <Input
              type="text"
              maxLength="3"
              name="destiny"
              placeholder="Insira o código de destino"
            />
          </label>
          <label htmlFor="time">
            Minutos da Ligação
            <Input
              type="number"
              name="time"
              placeholder="Insira a quantidade de minutos"
            />
          </label>
          <label htmlFor="plan">
            Plano FaleMais
            <Select
              options={options}
              name="plan"
              placeholder="Selecione o plano"
            />
          </label>
          <button type="submit">Comparar</button>
        </Form>
      </Container>
      <Result result={result} />
    </>
  );
}

export default CallForm;
