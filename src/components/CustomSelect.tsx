import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent) => void;
  options: string[];
  fullWidth?: boolean;
}

const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  fullWidth = false,
}: CustomSelectProps) => (
  <FormControl
    variant="outlined"
    sx={{
      minWidth: fullWidth ? "100%" : 220,
      bgcolor: "transparent",
      borderRadius: 2,
      border: "1px solid var(--color-black)",
      boxShadow: 2,
      fontFamily: "var(--font-sans)",
    }}
    fullWidth={fullWidth}
  >
    <InputLabel
      sx={{
        fontFamily: "var(--font-sans)",
        color: "var(--color-light)",
        "&.Mui-focused": {
          color: "var(--color-light-blue)",
        },
      }}
    >
      {label}
    </InputLabel>
    <Select
      value={value}
      label={label}
      onChange={onChange}
      sx={{
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        color: "var(--color-light)",
        "& .MuiSelect-select": {
          padding: "12px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--color-black)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--color-light-blue)",
        },
        "& .MuiSelect-icon": {
          color: "var(--color-light)",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 300,
            bgcolor: "var(--color-beige)",
            fontFamily: "var(--font-sans)",
            color: "var(--color-black)",
            borderRadius: 2,
            border: "2px solid var(--color-black)",
            boxShadow: 3,
          },
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      }}
    >
      {options.map((opt) => (
        <MenuItem
          key={opt}
          value={opt}
          sx={{
            fontFamily: "var(--font-sans)",
            fontWeight: opt === value ? 600 : 400,
            fontSize: "0.95rem",
            "&:hover": {
              backgroundColor: "var(--color-light)",
              color: "var(--color-black)",
            },
          }}
        >
          {opt}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default CustomSelect;
