import React from 'react';

import PropTypes from 'prop-types';
import { ResultDiv } from './styles';

function Result({ result }) {
  return (
    <ResultDiv clear={result.cost_with_plan === undefined}>
      <div
        className={
          result.cost_with_plan === undefined ? 'no-result' : 'has-result'
        }
      >
        <span className="has-plan">
          <strong>Com FaleMais:</strong>
          <br />
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(result.cost_with_plan)}
        </span>
        <span className="without-plan">
          <strong>Sem FaleMais:</strong>
          <br />
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(result.cost_without_plan)}
        </span>
      </div>
    </ResultDiv>
  );
}

Result.propTypes = {
  result: PropTypes.shape({
    cost_with_plan: PropTypes.number,
    cost_without_plan: PropTypes.number,
  }).isRequired,
};

export default Result;
