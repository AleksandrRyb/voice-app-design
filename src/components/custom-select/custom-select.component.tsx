import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText
} from "@material-ui/core";

interface iProps {
  labelId: string;
  name: string;
  value: string;
  onChange(e: any): void;
  children: any;
  labelChildren: string;
  helperChildren: string;
}

const CustomSelect: React.SFC<iProps> = ({
  labelId,
  name,
  children,
  helperChildren,
  labelChildren,
  value,
  onChange
}) => (
  <FormControl>
    <InputLabel id={labelId}>{labelChildren}</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      color="secondary"
      name={name}
      labelId="voice-label"
    >
      {children}
    </Select>
    <FormHelperText>{helperChildren}</FormHelperText>
  </FormControl>
);

export { CustomSelect };
