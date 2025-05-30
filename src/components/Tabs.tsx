import React from "react";
import { Tabs, Tab } from "@mui/material";

interface CategoryTabsProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  categorias: string[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ value, onChange, categorias }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="categorías"
      sx={{
        mb: 4,
        '& .MuiTab-root': {
          fontFamily: 'var(--font-sams)',
          color: 'var(--color-beige)',
          margin: '0 auto',
          
        },
        '& .Mui-selected': {
          color: 'var(--color-light-blue) !important',
          fontWeight: 'bold',
          fontFamily: 'var(--font-sans)',
          bgcolor: 'var(--color-black)',
          borderRadius: 2,
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'var(--color-light-blue)',
          height: '3px',
          borderRadius: '2px',
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