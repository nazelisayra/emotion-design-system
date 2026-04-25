import React from 'react';
import Button from '../Button';
import type { ButtonProps } from '../Button';

// Atom rationale: simple, single-purpose button variant wrapper used across the UI.
const SuccessButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="success" {...props} />
);

export default SuccessButton;
