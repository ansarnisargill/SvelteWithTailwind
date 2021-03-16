module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",

    ],
    enabled: true
  },

  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Lato"', 'sans-serif', 'Arial', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'dark': '#001832',
        'sky': {
          '900': '#0b1e32',
          '800': '#153c65',
          '700': '#205997',
          '600': '#2a77ca',
          '500': '#3595FC',
          '400': '#5daafd',
          '300': '#86bffd',
          '200': '#aed5fe',
          '100': '#d7eafe',
          '50': '#ebf4ff',
        },
      },
      boxShadow: {
        skysm: '0 1px 2px 0 rgba(53, 149, 252, 0.1)',
        skyDEFAULT: '0 1px 3px 0 rgba(53, 149, 252, 0.15), 0 1px 2px 0 rgba(53, 149, 252, 0.12)',
        skymd: '0 4px 6px -1px rgba(53, 149, 252, 0.15), 0 2px 4px -1px rgba(53, 149, 252, 0.12)',
        skylg: '0 10px 15px -3px rgba(53, 149, 252, 0.15), 0 4px 6px -2px rgba(53, 149, 252, 0.1)',
        skyxl: '0 20px 25px -5px rgba(53, 149, 252, 0.15), 0 10px 10px -5px rgba(53, 149, 252, 0.08)',
        'sky2xl': '0 25px 50px -12px rgba(53, 149, 252, 0.3)',
        'sky3xl': '0 35px 60px -15px rgba(53, 149, 252, 0.35)',
        skyinner: 'inset 0 2px 4px 0 rgba(53, 149, 252, 0.12)',

      },
      animation: {
        'ping-10': 'ping 3s cubic-bezier(0, 0, 0.4, 1) infinite',
        'ping-20': 'ping 5s cubic-bezier(0, 0, 0.4, 1) infinite',
        'ping-30': 'ping 10s cubic-bezier(0, 0, 0.4, 1) infinite',
      },

    },
  },
  variants: {
    extend: {},
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
}
