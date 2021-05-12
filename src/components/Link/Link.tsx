import React from 'react';
import { LinkStyled } from './LinkStyled';

interface LinkProps {
  to: string;
  children: string;
  signup?: boolean | undefined;
}

export const Link: React.FC<LinkProps> = ({ to, children, signup }) => {
  return (
    <LinkStyled href={to} signup={signup}>
      {children}
    </LinkStyled>
  );
};
