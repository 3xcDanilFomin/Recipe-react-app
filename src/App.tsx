import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  useEffect(() => {
    document.body.requestFullscreen();
  }, []);
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
