import React, { useEffect, useState } from "react";

//Header component
export default function Header() {
  const text = "Peenacony Grocery List";
  const speed = 75;
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);
  return (
    <header>
      <div className="container-header">
        <h3 className="header__username" id="grocery">
          {displayText}
        </h3>
        <h1 className="header__title">Shopping List</h1>
      </div>
    </header>
  );
}
