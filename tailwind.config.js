/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'dark-blue': '#070724',
      'dark-grey': '#38384F',
      'grey': '#838391',
      'light-grey': '#979797',
      'blue-green': '#419EBB',
      'yellow-mustard': '#EDA249',
      'dark-violet': '#6f2ed6',
      'light-orange': '#D14C32',
      'red': '#D83A34',
      'orange': '#CD5120',
      'green': '#1ec2a4',
      'blue': '#2d68f0'
    },
    fontFamily: {
      'antonio': 'Antonio',
      'spartan': 'League Spartan'
    },
    fontSize: {
      'xs': '11px',
      'sm': '12px',
      'base': '14px',
      'lg': '20px',
      'xl': '24px',
      '2xl': '28px',
      '4xl': '40px',
      '8xl': '80px'
    },
    letterSpacing: {
      'tighter': '-1.5px',
      'tight': '-1.05px',
      'wide': '1px',
      'wider': '2.6px'
    }
  },
  plugins: [],
}

