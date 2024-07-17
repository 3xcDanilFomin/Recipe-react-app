import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
