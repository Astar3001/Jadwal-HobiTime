const colors = {
  primary: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
  secondary: (opacity = 1) => `rgba(3, 218, 198, ${opacity})`,
  white: (opacity = 1) => `rgba(255,255,255,${opacity})`,
  black: (opacity = 1) => `rgba(0,0,0,${opacity})`,
  grey: (opacity = 1) => `rgba(120,120,120,${opacity})`,
};

export default colors;