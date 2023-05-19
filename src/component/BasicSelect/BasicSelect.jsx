import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useState } from "react";
import { Stack } from "@mui/system";
import { pink } from "@mui/material/colors";

export default function BasicSelect({
  handleOrderProcessingForm,
  index,
  type,
  Name,
  data,
  width,
}) {
  const handleDropDown = (value, type) => {
    if (type === "select_category") {
      console.log(value, type);
      handleOrderProcessingForm(value, type);
    }
    if (type === "select_tags") {
      console.log(value, type);
      handleOrderProcessingForm(value, type);
    }
    if (type === "select_subCategory") {
      console.log(value);
      handleOrderProcessingForm(value, type);
    }
    if (type === "select_title") {
      console.log(value, type);
      handleOrderProcessingForm(value, type);
    }
  };
  const defaultProps = {
    options: data,
    getOptionLabel: (option) => {
      switch (Name) {
        case "select_category":
          return option.label;
          break;
        case "select_subCategory":
          return option;
          break;
        case "select_tags":
          return option;
          break;
        case "select_title":
          return option.label;
          break;
      }
    },
  };

  return (
    <Stack spacing={1} className={"!w-full"}>
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        onChange={(event, value, index) => handleDropDown(value, Name)}
        renderInput={(params) => (
          <TextField {...params} variant="standard" sx={{ width: width }} />
        )}
      />
    </Stack>
  );
}
