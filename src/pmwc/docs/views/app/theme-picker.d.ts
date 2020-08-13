import { h } from 'preact';
export declare class ThemePicker extends React.Component<{
    selectedThemeName: string;
    onThemeClick: (themeName: string) => void;
}> {
    state: {
        open: boolean;
        activeTabIndex: number;
    };
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export declare const getTheme: (themeName: string) => {
    [key: string]: string;
};
