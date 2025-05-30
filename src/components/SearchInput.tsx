import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxWidth?: number;
}

const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
    placeholder = "Buscar...",
    maxWidth = 400,
}) => {
    return (
        <TextField
            fullWidth
            sx={{
                flex: 1,
                maxWidth,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                "& .MuiOutlinedInput-root": {
                    backgroundColor: "var(--color-black)",
                    borderRadius: 2,
                    color: "var(--color-light)",

                    // Color del texto cuando escribes
                    "& input": {
                        color: "var(--color-light)", // <-- color al escribir
                        padding: "12px",
                    },

                    // Hover sobre el input completo
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--color-light)",
                    },

                    // Focus
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "var(--color-light-blue)",
                    },

                    // Color del ícono por defecto
                    "& .MuiInputAdornment-root": {
                        color: "var(--color-beige)",

                        // Cambio de color del ícono al hacer hover sobre el campo
                        "&:hover": {
                            color: "var(--color-light)",
                        },
                    },
                },
            }}
            variant="outlined"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchInput;
