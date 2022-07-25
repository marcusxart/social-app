import { useEffect } from "react";
export const handleSetHeight = (e) => {
  e.target.style.height = "30px";
  let scHeight = e.target.scrollHeight;
  e.target.style.height = `${scHeight}px`;
};
