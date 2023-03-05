import { ChangeEvent, useState } from "react";
interface SearchProps {
  onAddClick: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onAddClick }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onValid();
  };

  const onClick = () => {
    if (onValid()) {
      onAddClick(value);
      setValue("");
    }
  };

  const onValid = () => {
    if (!value) {
      setError("value is empty!");
      return false;
    } else {
      setError(null);
      return true;
    }
  };
  return (
    <section>
      {/* backdrop-blur-sm bg-black/30 */}
      <div className="flex w-full relative rounded overflow-hidden drop-shadow-xl">
        <input
          value={value}
          required
          maxLength={20}
          className={`py-2 rounded-bl pl-3 flex-1 h-14 focus:invalid:border-pink-500 mb-10`}
          onChange={(e) => handleChange(e)}
          onBlur={() => {
            onValid();
          }}
        />
        <span className="text-[#fa676b] absolute bottom-3">{error}</span>

        <button
          onClick={onClick}
          className="text-white h-14 font-extrabold text-xl rounded-none border-none hover:border-none w-[150px] bg-[#00c2ff] hover:bg-opacity-60"
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default Search;
