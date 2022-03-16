import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const ExitIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path
                d="M8.46445 15.5354L15.5355 8.46436"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
            <Path
                d="M8.46446 8.46458L15.5355 15.5356"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round" />
        </Svg>
    )
}