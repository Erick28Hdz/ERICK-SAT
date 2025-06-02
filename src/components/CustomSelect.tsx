import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
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
      minWidth: fullWidth ? "70%" : "clamp(200px, 40vw, 300px)",
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
        fontSize: "clamp(0.9rem, 0.9vw + 0.4rem, 1.1rem)",
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
        fontSize: "clamp(0.95rem, 1vw + 0.3rem, 1.2rem)",
        "& .MuiSelect-select": {
          padding: "clamp(8px, 1.5vh, 12px)",
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
          horizontal: "left",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left",
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
            fontSize: "clamp(0.85rem, 1vw + 0.3rem, 1.05rem)",
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
