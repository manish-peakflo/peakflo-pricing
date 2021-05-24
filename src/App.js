import React from "react";
import {
  withStyles,
  Slider,
  Grid,
  Box,

  Typography,
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import NumberFormat from "react-number-format";
import theme from "./theme";
import "./App.css";

const pricing = (props) => {
  if (props < 10000000) {
    return 499;
  } else if (props < 50000000) {
    return 499 + (0.001 * (props - 10000000)) / 12;
  } else if (props < 1000000000) {
    return (
      499 +
      (0.001 * (50000000 - 10000000)) / 12 +
      (0.0005 * (props - 50000000)) / 12
    );
  } else {
    return (
      499 +
      (0.001 * (50000000 - 10000000)) / 12 +
      (0.0005 * (100000000 - 50000000)) / 12 +
      (0.00025 * (props - 100000000)) / 12
    );
  }
};



const GreyTextTypography = withStyles({
  root: {
    color: fade("rgb(0,0,0)", 0.8),
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
})(Typography);

const WhiteTextTypography = withStyles({
  root: {
    color: "rgb(0,0,0)",
  },
})(Typography);

const CaptionTextTypography = withStyles({
  root: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
})(Typography);

function App() {


  const [state, setState] = React.useState({
    price: 10,
  });

  const handleChange = (name) => (e, value) => {
    if (state[name] !== value) {
      setState({
        ...state,
        [name]: value, // --> Important bit here: This is how you set the value of sliders
      });
    }
  };

  let peakfloPrice = state.price * 1000000;
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid  container direction="row">
          <Grid item xs={8}>
            <CaptionTextTypography variant="h5">
              Annual credit sales
            </CaptionTextTypography>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="right">
              <CaptionTextTypography variant="h5">
                ${state.price}M
              </CaptionTextTypography>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <IOSSlider
            name="price"
            step={1}
            aria-label="price slider"
            min={0}
            max={200}
            value={state.price}
            marks={marks}
            onChange={handleChange("price")}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" >
        <Grid item xs={12} container direction="row">
          <Grid item xs={8}>
            <GreyTextTypography align="left" variant="h6">
              Peakflo Pricing
            </GreyTextTypography>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="right">
              <WhiteTextTypography variant="h6">
                <NumberFormat
                  value={pricing(peakfloPrice)}
                  displayType="text"
                  thousandSeparator
                  decimalScale={0}
                  prefix="$"
                />{" "}
                /mo
              </WhiteTextTypography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}
const marks = [
  /* {
    value: 0,
    label:'$0M'
  },
  {
    value: 200,
    label:'$200M'

  }, */
];

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
  root: {
    color: theme.palette.secondary.main,
    height: 4,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 7,
  },
  rail: {
    height: 7,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
})(Slider);

export default App;
