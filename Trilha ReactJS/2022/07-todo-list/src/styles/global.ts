import { globalCss } from "../lib/stitches.config";

export const GlobalStyles = globalCss({
    '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        fontFamily: 'Inter, sans-serif',
      },
    
      body: {
        backgroundColor: '$gray-600',
        color: '$gray-100',
        '-webkit-font-smoothing': 'antialiased',
      },
})