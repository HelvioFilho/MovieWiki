import React from 'react';
import logoImage from '../../../assets/LogoEmpire.png';
import { LogoImage } from './styles';

const sizes = {
  small: 28,
  large: 64,
}

interface LogoProps {
  size?: keyof typeof sizes;
}

export function Logo({ size }: LogoProps) {

  return (
    <LogoImage source={logoImage} size={sizes[size || 'large']} />
  );
}