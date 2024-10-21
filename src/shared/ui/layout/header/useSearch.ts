import { useEffect, useState } from "react";

export function useSearch() {
  const [value, setValue] = useState("");

  const setInitialSearch = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get("s");
    if (searchParam) {
      setValue(searchParam);
    }
  };

  useEffect(() => {
    setInitialSearch();
  }, []);

  const updateSearchParam = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("s", value);
    url.searchParams.set("page", "1");
    window.history.pushState({}, "", url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    updateSearchParam();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateSearchParam();
    }
  };

  return {
    value,
    handleInputChange,
    handleButtonClick,
    handleKeyDown,
  };
}
