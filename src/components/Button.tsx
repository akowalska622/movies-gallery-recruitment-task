import React from 'react';
import {Text, Pressable, PressableProps} from 'react-native';
import styled, {css} from 'styled-components/native';

interface ButtonProps extends PressableProps {
  size?: 'small' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
}

const sizeButtonStyles = {
  wrapper: {
    small: css`
      padding: 12px 24px;
    `,
    large: css`
      padding: 16px 32px;
    `,
  },
  text: {
    small: css`
      font-size: ${({theme: {fontSizes}}) => fontSizes.small};
    `,
    large: css`
      font-size: ${({theme: {fontSizes}}) => fontSizes.medium};
    `,
  },
};

const variantStyles = {
  wrapper: {
    contained: css`
      background-color: ${({theme: {colors}}) => colors.primary};
      border: 1px solid ${({theme: {colors}}) => colors.primary};
    `,
    outlined: css`
      background-color: transparent;
      border: 1px solid ${({theme: {colors}}) => colors.primary};
    `,
    text: css`
      background-color: transparent;
      border: none;
    `,
  },
  text: {
    contained: css`
      color: ${({theme: {colors}}) => colors.white};
    `,
    outlined: css`
      color: ${({theme: {colors}}) => colors.primary};
    `,
    text: css`
      color: ${({theme: {colors}}) => colors.primary};
    `,
  },
};

const ButtonContainer = styled(Pressable)<ButtonProps>`
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  ${({size}) => sizeButtonStyles.wrapper[size || 'small']}
  ${({variant}) => variantStyles.wrapper[variant || 'contained']}
`;

const ButtonText = styled(Text)<ButtonProps>`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  ${({size}) => sizeButtonStyles.text[size || 'small']}
  ${({variant}) => variantStyles.text[variant || 'contained']}
`;

export const Button = ({
  size = 'small',
  variant = 'contained',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer size={size} variant={variant} {...rest}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonContainer>
  );
};
