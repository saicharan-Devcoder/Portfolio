export const colors = {
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9', 
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  black: {
    50: '#f7f7f7',
    100: '#e3e3e3',
    200: '#c8c8c8',
    300: '#a4a4a4',
    400: '#808080',
    500: '#666666',
    600: '#4d4d4d',
    700: '#333333',
    800: '#1a1a1a',
    900: '#000000',
  }
};

export const themeColors = {
  background: {
    primary: colors.slate[900],
    secondary: colors.slate[800],
    accent: colors.black[900],
  },
  text: {
    primary: colors.slate[100],
    secondary: colors.slate[200],
    muted: colors.slate[400],
    accent: colors.slate[200],
  },
  border: {
    primary: colors.slate[700],
    accent: colors.black[800],
  },
  button: {
    primary: colors.black[500],
    primaryHover: colors.black[600],
    secondary: 'transparent',
    secondaryHover: colors.black[500] + '1A', // 10% opacity
  }
};