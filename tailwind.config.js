/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'dark-blue': '#070724',
      'dark-grey': '#38384F',
      'light-grey': '#838391',
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
      'spartan': 'Spartan'
    },
    fontSize: {
      'xs': '11px',
      'sm': '12px',
      'base': '14px',
      'lg': '40px',
      'xl': '80px'
    },
    letterSpacing: {
      'tight': '-1.5px',
      'wide': '1px',
      'wider': '2.6px'
    }
  },
  plugins: [],
}

