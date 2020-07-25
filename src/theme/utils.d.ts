export declare const getRgb: (color: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const isDark: (color: string) => boolean;
export declare const getAutoColorsForTheme: (colors: {
    [key: string]: string;
}) => {
    [x: string]: string;
};
