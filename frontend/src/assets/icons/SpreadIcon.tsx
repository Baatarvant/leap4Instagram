import Svg, { Circle } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const SpreadIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Circle cx="6.5" cy="11.5" r="1.5" fill={color} />
            <Circle cx="12" cy="11.5" r="1.5" fill={color} />
            <Circle cx="17.5" cy="11.5" r="1.5" fill={color} />
        </Svg>
    )
}