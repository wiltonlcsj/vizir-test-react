import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

function DefaulLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default DefaulLayout;

DefaulLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
