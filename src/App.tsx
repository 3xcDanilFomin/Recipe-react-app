import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  useEffect(() => {
    const root = document.querySelector("#root");
    if (root) root.requestFullscreen({ navigationUI: "hide" });
  }, []);

  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
