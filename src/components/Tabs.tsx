import React from "react";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";

interface CategoryTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  categorias: string[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ value, onChange, categorias }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant={isSmallScreen ? "standard" : "scrollable"}
      orientation={isSmallScreen ? "vertical" : "horizontal"}
      scrollButtons={isSmallScreen ? false : "auto"}
      aria-label="categorías"
      sx={{
        mb: 4,
        display: isSmallScreen ? "flex" : "block",
        flexDirection: isSmallScreen ? "column" : "row",
        '& .MuiTab-root': {
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-beige)',
          margin: '0 auto',
          borderBottom: isSmallScreen ? 'none' : '2px solid transparent',
          borderLeft: isSmallScreen ? '2px solid transparent' : 'none',
          textAlign: 'left',
        },
        '& .Mui-selected': {
          color: 'var(--color-light-blue) !important',
          fontWeight: 'bold',
          fontFamily: 'var(--font-sans)',
          bgcolor: 'var(--color-black)',
          borderRadius: 2,
          borderBottom: isSmallScreen ? 'none' : '2px solid var(--color-light-blue)',
          borderLeft: isSmallScreen ? '4px solid var(--color-light-blue)' : 'none',
        },
        '& .MuiTabs-indicator': {
          display: 'none',
        },
      }}
    >
      {categorias.map((cat, i) => (
        <Tab key={cat} label={cat} />
      ))}
    </Tabs>
  );
};

export default CategoryTabs;