import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    if (container instanceof HTMLElement) {
      container.requestFullscreen().catch((err) => {
        console.error(
          "Error attempting to enable full-screen mode:",
          err.message
        );
      });
    }
  }, []);

  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
