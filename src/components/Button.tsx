import React from 'react';
import {Text, Pressable, PressableProps} from 'react-native';
import styled, {css} from 'styled-components/native';

interface ButtonProps extends PressableProps {
  color?: string;
  fontColor?: string;
  fontFamily?: string;
  size?: 'small' | 'large';
  variant?: 'contained' | 'outlined' | 'text';
}

const sizeButtonStyles = {
  wrapper: {
    small: css`
      padding: 14px 20px;
    `,
    large: css`
      padding: 16px 32px;
    `,
  },
  text: {
    small: css`
      font-size: ${({theme}) => theme.fontSizes.small};
    `,
    large: css`
      font-size: ${({theme}) => theme.fontSizes.medium};
    `,
  },
};

const variantStyles = {
  wrapper: {
    contained: css`
      background-color: ${({color, theme}) => color || theme.colors.primary};
      border: 1px solid ${({color, theme}) => color || theme.colors.primary};
    `,
    outlined: css`
      background-color: transparent;
      border: 1px solid ${({color, theme}) => color || theme.colors.primary};
    `,
    text: css`
      background-color: transparent;
      border: none;
    `,
  },
  text: {
    contained: css`
      color: ${({theme}) => theme.colors.white};
    `,
    outlined: css`
      color: ${({theme}) => theme.colors.primary};
    `,
    text: css`
      color: ${({theme}) => theme.colors.primary};
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
  font-family: ${({fontFamily, theme}) => fontFamily || theme.fonts[0]};
  ${({size}) => sizeButtonStyles.text[size || 'small']}
  ${({variant}) => variantStyles.text[variant || 'contained']}
`;

export const Button = ({
  size = 'small',
  variant = 'contained',
  children,
  fontFamily,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer size={size} variant={variant} {...rest}>
      <ButtonText variant={variant} fontFamily={fontFamily}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
};
