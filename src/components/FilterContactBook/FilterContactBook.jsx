import { React } from 'react';
import PropTypes from 'prop-types';

import { Input } from './FilterContactBook.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    <Input type="text" placeholder="Search" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
};
