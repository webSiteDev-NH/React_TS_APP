import React from 'react';

export const THEMES = {
  light: {
    color:'black',
    backgroundColor:'white'
  },
  dark: {
    color:'white',
    backgroundColor:'#222222'
  }
}

// Context
// propsの受け渡しを解消できる
// Context.Provider で設定した value をそれ以下のコンポーネントで使用できる
export const ThemeContext = React.createContext([THEMES.dark, () => {}]);
