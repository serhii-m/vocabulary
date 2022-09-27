import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AppWrapper } from "../components/AppWrapper";
import { Vocabulary } from "../features/vocabulary/Vocabulary";

const AddWord = lazy(() => import("../features/vocabulary/AddWordForm"));
const CheckWords = lazy(() => import("../features/vocabulary/CheckWordsPage"));
const TestHistoryPage = lazy(() =>
  import("../features/testHistory/TestHistoryPage"),
);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Vocabulary />} />
          <Route
            path="add-word"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <AddWord />
              </Suspense>
            }
          />
          <Route
            path="check-words"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <CheckWords />
              </Suspense>
            }
          />
          <Route
            path="test-history"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <TestHistoryPage />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <main
              className="min-h-screen 
            flex justify-center 
            items-center text-3xl 
            text-white bg-slate-800"
            >
              <p>404 Page not found!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRouter;
