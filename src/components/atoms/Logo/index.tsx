import React from 'react';
import logoImage from '../../../assets/LogoEmpire.png';
import { LogoProps, sizes } from '../../../utils/interface';
import { LogoImage } from './styles';

export function Logo({ size }: LogoProps) {
  return (
    <LogoImage source={logoImage} size={sizes[size || 'large']} />
  );
}