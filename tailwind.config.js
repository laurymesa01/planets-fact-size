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
      'mercury': '#419EBB',
      'venus':  '#EDA249',
      'earth':  '#6f2ed6',
      'mars' : '#D14C32',
      'jupiter': '#D83A34',
      'saturn' :'#CD5120',
      'uranus' :'#1ec2a4',
      'neptune': '#2d68f0'
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

