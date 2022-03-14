import Svg, { Line } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const BurgerIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000", focused = false } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill={focused ? color : 'none'}>
            <Line x1="4" y1="5" x2="20" y2="5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <Line x1="4" y1="11" x2="20" y2="11" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <Line x1="4" y1="17" x2="20" y2="17" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </Svg>
    )
}