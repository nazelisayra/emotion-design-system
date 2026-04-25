import React from 'react';
import Button from '../Button';
import type { ButtonProps } from '../Button';

// Atom rationale: semantic danger action wrapper for destructive actions.
const DangerButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button variant="danger" {...props} />
);

export default DangerButton;
