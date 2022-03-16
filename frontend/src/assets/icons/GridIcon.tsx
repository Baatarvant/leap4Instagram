import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const GridIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24">
            <Path
                d="M9.44762 4V20M4.19048 14.5524L20.1905 14.5524M14.4 4V20M4.19048 9.6L20.1905 9.6M4 4H20V20H4V4Z"
                stroke={color}
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </Svg>
    )
}