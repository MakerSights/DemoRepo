import React from "react";
// Component.
import { Search } from "./Search";
// Styles.
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <Search />
      <div className="avatar"></div>
    </div>
  );
};
