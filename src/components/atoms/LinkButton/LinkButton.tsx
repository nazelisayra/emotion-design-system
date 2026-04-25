import React from 'react';
import Button from '../Button';
import type { ButtonProps } from '../Button';

// Atom rationale: inline link-styled action that looks like text but acts like a button.
const LinkButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="link" {...props} />
);

export default LinkButton;
