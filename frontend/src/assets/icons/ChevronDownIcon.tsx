import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const ChevronDownIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
            <Path
                d="M3.3335 6.6665L8.0002 11.3332L12.6669 6.6665"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}