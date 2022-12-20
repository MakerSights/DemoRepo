import React from "react";

// Styles.
import "./Footer.scss";

export const Footer = () => {
  const link = "https://www.makersights.com/";

  const goToLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="footer">
      <button onClick={goToLink}>Go to our main page</button>
    </div>
  );
};
