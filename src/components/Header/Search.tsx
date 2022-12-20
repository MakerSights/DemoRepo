import React, { useRef } from "react";
import { useContentContext } from "../../context/ContentContext";

export const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setSearchName } = useContentContext();

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setSearchName(inputRef.current?.value ?? "");
  };

  return (
    <form onSubmit={(ev) => onSubmit(ev)}>
      <fieldset>
        <input
          onChange={(ev) => onChange(ev)}
          ref={inputRef}
          type="text"
          name="name"
          placeholder="Search..."
          autoComplete="off"
        />
      </fieldset>
    </form>
  );
};
