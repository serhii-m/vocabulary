import { Link, Outlet, useLocation } from "react-router-dom";

export function AppWrapper() {
  const location = useLocation();

  return (
    <div className="h-full p-5">
      <header>
        <nav className="text-sky-400 flex items-center gap-5 sm:text-2xl mb-6">
          {location.pathname !== "/" && <Link to="/">Home</Link>}
          {location.pathname !== "/add-word" && (
            <Link to="add-word">Add word</Link>
          )}
          {location.pathname !== "/check-words" && (
            <Link to="check-words">Check words</Link>
          )}
          {location.pathname !== "/test-history" && (
            <Link to="test-history">Test history</Link>
          )}
        </nav>
      </header>
      <div className="flex flex-col items-center text-white">
        <Outlet />
      </div>
    </div>
  );
}
