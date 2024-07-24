import React from 'react';
import {Pressable} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {themeConfig} from '../Theme';

type Props = {
  onPress: () => void;
  icon: React.ComponentType<SvgProps>;
  color?: string;
};

export const IconButton = ({onPress, color, icon: IconComponent}: Props) => (
  <Pressable onPress={onPress}>
    <IconComponent
      width={24}
      height={24}
      fill={color || themeConfig.colors.black}
    />
  </Pressable>
);
