import { Button, Radio, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
    borderColor: "black",
  },
  "&.Mui-focused fieldset": {
    borderColor: "black",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
});

export const RadioStyle = styled(Radio)({
  "&.Mui-checked": {
    color: "black",
  },
});

export const SendButton = styled(Button)({
  "&.MuiButton-contained": {
    backgroundColor: "#00DCC9",
    color: "white",
    fontWeight: "700",
  },
});
