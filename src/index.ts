import { GrowiCustomThemeSummary, GrowiThemeSchemeType } from "./interfaces/summary";

export const summaries: GrowiCustomThemeSummary[] = [
  {
    name: 'welcome-to-fumiya-room',
    manifestKey: 'src/styles/style.scss',
    schemeType: GrowiThemeSchemeType.BOTH,
    bg: '#00FFFF',
    topbar: 'linear-gradient(to right,#e60000 14%,#f39800 28%,#fff100 42%,#009944 56%,#0068b7 70%,#1d2088 87%,#920783 100%)',
    sidebar: '#00ff00',
    theme: '#607000',
  },
];
