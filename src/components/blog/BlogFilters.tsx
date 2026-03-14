import SearchInput from "../ui/arquitectura/SearchInput";
import CustomSelect from "../ui/arquitectura/CustomSelect";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  resetPage: () => void;
}

const BlogFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  resetPage,
}: Props) => {

  return (
    <div className="flex justify-evenly items-center flex-wrap gap-10 px-1 my-8">

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Buscar artículo o palabra clave"
      />

      <div className="min-w-55">

        <CustomSelect
          label="Categoría"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            resetPage();
          }}
          options={[
            "Todas",
            "ciberseguridad",
            "scripts",
            "formación",
            "casos",
          ]}
          fullWidth
        />

      </div>

    </div>
  );
};

export default BlogFilters;