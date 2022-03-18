module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2B3749",
        secondary: "#6DBAFF",
        tertiary: "#3682C6",
        error: "#F44336",
        warning: "#FF9800",
        info: "#2196F3",
        success: "#4CAF50",
        "cu-light-pink": {
          300: "#ff9eb0",
          400: "#DD919F",
          700: "#D46C86",
        },
        "cu-grey": "#eaeaea",
        "cu-middle-grey": "#aeaeae",
        "cu-dark-grey": "#8b8b8b",
        "cu-black": "#1e1e1e",
        "cms-grey": "#f8f8f8",
        "cms-middle-grey": "#e4e4e4",
        "cms-dark": "#415066",
        "cms-light": "#7486A1",
        "tertiary-hover": "#115c9e",
        "cu-dark-grey-hover": "#696969",
        "success-hover": "#3a8a3d",
        "error-hover": "#cf3529",
      },
      textColor: {
        "cu-pink": {
          300: "#ff9eb0",
          400: "#DD919F",
          700: "#D46C86",
        },
        "cu-grey": "#eaeaea",
        "cu-middle-grey": "#aeaeae",
        "cu-dark-grey": "#8b8b8b",
        "cu-black": "#1e1e1e",
        "cms-grey": "#f8f8f8",
        "cms-middle-grey": "#e4e4e4",
        white: "#FFFFFF",
      },
      backgroundColor: {
        "cu-pink": {
          300: "#ff9eb0",
          400: "#DD919F",
          700: "#D46C86",
        },
        "cu-grey": "#eaeaea",
        "cu-middle-grey": "#aeaeae",
        "cu-dark-grey": "#8b8b8b",
        "cu-black": "#3F3F40",
        "cms-grey": "#f8f8f8",
        "cms-middle-grey": "#e4e4e4",
        white: "#FFFFFF",
      },
      gradientColorStops: {
        "cu-pink": {
          300: "#ff9eb0",
          400: "#DD919F",
          700: "#D46C86",
        },
        "cu-grey": "#eaeaea",
        "cu-middle-grey": "#aeaeae",
        "cu-dark-grey": "#8b8b8b",
        "cu-black": "#1e1e1e",
        "cms-grey": "#f8f8f8",
        "cms-middle-grey": "#e4e4e4",
      },
      borderColor: {
        secondary: "#6DBAFF",
        "cu-pink": {
          300: "#ff9eb0",
          400: "#DD919F",
          700: "#D46C86",
        },
        "cu-grey": "#eaeaea",
        "cu-middle-grey": "#aeaeae",
        "cu-dark-grey": "#8b8b8b",
        "cu-black": "#1e1e1e",
        "cms-grey": "#f8f8f8",
        "cms-middle-grey": "#e4e4e4",
      },
      maxHeight: {
        0: "0",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
      },
      fontSize: {
        sub1: "14px",
        sub2: "12px",
        body1: "16px",
        body2: "14px",
        button: "14px",
        caption: "10px",
        overline: "8px",
      },
      boxShadow: {
        default: "2px 2px 4px 0 rgba(0,0,0,0.25)",
        card: "2px 2px 2px 0 rgba(0,0,0,0.25)",
        button: "1px 1px 2px 0 rgba(0,0,0,0.25)",
      },
      gridTemplateColumns: {
        card: "repeat(3, minmax(370px, 1fr))",
      },
    },
    screens: {
      xl: { max: "1380px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "420px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
