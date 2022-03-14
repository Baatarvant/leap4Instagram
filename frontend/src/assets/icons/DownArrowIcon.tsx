import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const DownArrowIcon = (props: IconProps) => {
    const { width = 17, height = 19, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 17 19" fill="none">
            <Path d="M5.5 7L8.61127 10.1113L11.7225 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg >
    )
}