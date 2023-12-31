const inputStyles1 = {
  padding: "11px 15px",
  height: "50px",
  background: "#F5F8FC",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: 600,
  border: "1px solid #F0F4FA",
  _placeholder: {
    color: "#BECAD7",
  },
};
const inputStyles2 = {
  padding: "23px 16px",
  borderRadius: "10px",
  backgroundColor: "#F5F8FC",
  fontWeight: "normal",
  fontSize: "14px",
  _placeholder: {
    color: "#697077",
  },
  _focus: {
    border: "2px solid rgb(234,242,252)",
    boxShadow: "none",
  },
  _hover: {
    borderColor: "transparent",
  },
  border: "2px solid",
  borderColor: "transparent",
};

const formInput = {
  padding: "11px 14px",
  color: "#05101D",
  fontSize: "14px",
  background: "#FCFDFF",
  borderRadius: "10px",
  border: "1px solid #F0F4FA !important",
  height: "48px",
  fontWeight: 600,
  width: "100%",
  _focus: {
    outline: "2px solid #409eff",
    boxShadow: "none !important",
    border: "none",
  },
  _placeholder: {
    color: "#05101D",
    fontWeight: 600,
  },
};

const announceInput = {
  background: "#f0f4fa",
  border: "none !important",
  color: "#05101d",
  fontWeight: 700,
  p: "11px 12px",
  fontSize: "14px",
  borderRadius: "6px",
  transition: ".1s all",
  _focus: {
    outline: "1px solid #409eff",
    boxShadow: "none !important",
    border: "none",
  },
  _placeholder: {
    color: "#bdcad7",
  },
};

const filterInput = {
  ...announceInput,
  background: "#F3F6F9",
  fontWeight: 400,
};

const labelStyles2 = {
  fontSize: "16px",
  color: "#181C32",
  fontWeight: "600",
};

const announceLabel = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#506277",
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
};

const defaultLabel = {
  fontSize: "14px",
  fontWeight: 700,
  color: "#506277",
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
};

const formLabel = {
  color: "#181C32",
  fontSize: "16px",
  fontWeight: 700,
};

const appendInputStyles = (stylesName) => {
  switch (stylesName) {
    case "styles2":
      return inputStyles2;
    case "announceInput":
      return announceInput;
    case "formInput":
      return formInput;
    case "filterInput":
      return filterInput;
    default:
      return inputStyles1;
  }
};

const appendLabelStyles = (stylesName) => {
  switch (stylesName) {
    case "styles2":
      return labelStyles2;
    case "announceLabel":
      return announceLabel;
    case "defaultLabel":
      return defaultLabel;
    case "formLabel":
      return formLabel;
    default:
      return {};
  }
};

const appendStyles = (element, stylesName) => {
  switch (element) {
    case "input":
      return appendInputStyles(stylesName);
    case "label":
      return appendLabelStyles(stylesName);
    default:
      return {};
  }
};

export default appendStyles;
