import React from 'react';
import styled from 'styled-components/macro';
import { rem, lighten } from 'polished';

import { colors, screenSizes } from '../../styles/base';

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${screenSizes.largeMobile}) {
    margin: ${rem(30)} 0;
  }
`;

const InputName = styled.p`
  margin: 0;
  text-transform: capitalize;
`;

const StyledTextInput = styled.input`
  padding: ${rem(1)} ${rem(10)};
  width: 70%;
  border: ${rem(2)} solid ${colors.beta};
  border-radius: ${rem(10)};
  color: ${colors.alpha};
  background-color: ${colors.gamma};
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${lighten(0.1, colors.gamma)};
  }
`;

interface FormTextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTextInput: React.FC<FormTextInputProps> = ({ name, value, onChange }) => (
  <StyledLabel>
    <InputName>{name}</InputName>
    <StyledTextInput type="text" value={value} onChange={onChange} />
  </StyledLabel>
);

export default FormTextInput;
