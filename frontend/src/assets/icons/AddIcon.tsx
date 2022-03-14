import Svg, { Rect, Line } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const AddIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Rect x="3" y="3" width={0.75 * width} height={0.75 * height} rx="5" stroke={color} strokeWidth="1.8" />
            <Line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
            <Line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </Svg>
    )
}