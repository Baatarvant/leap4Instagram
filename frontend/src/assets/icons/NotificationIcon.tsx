import Svg, { Path, Circle } from 'react-native-svg';
import React from 'react';
import { IconProps } from './type';

export const NotificationIcon = (props: IconProps) => {
    const { width = 24, height = 24, color = "#000" } = props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M12.5 3.02297C10.8333 2.87405 7 3.38038 5 6.59707C2.5 10.6179 5 19.1065 1.5 20H12.5"
                stroke={color}
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <Path
                d="M11.5 3.02297C13.1667 2.87405 17 3.38038 19 6.59707C21.5 10.6179 19 19.1065 22.5 20H11.5"
                stroke={color}
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <Path
                d="M9 22C9.50495 23.1773 10.6582 24 12 24C13.3418 24 14.495 23.1773 15 22H9Z"
                fill={color}
            />
            <Circle
                cx="12"
                cy="2"
                r="2"
                fill={color}
            />
        </Svg>
    )
}