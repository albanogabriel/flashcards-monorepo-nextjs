import type { Config } from 'tailwindcss'
import { colors, spacing, radii, fonts, boxShadow } from 'tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: { ...colors, current: 'currentColor'},
    spacing,
    borderRadius: radii,
    fontWeight: fonts.fontWeights,
    fontFamily: {
        sans: fonts.fontFamilies.default
    },
    fontSize: fonts.fontSizes,
    lineHeight: fonts.lineHeight,
    boxShadow: boxShadow
  },
  plugins: [],
}
export default config