import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import Nav from "./Nav";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./RelayEnv";

const showErrorOverlay = (err: any) => {
  // must be within function call because that's when the element is defined for sure.
  const ErrorOverlay = customElements.get("vite-error-overlay");

  // don't open outside vite environment
  if (!ErrorOverlay) {
    return;
  }

  const formattedError = `Runtime error: ${err.message} in ${err.fileName} on column ${err.columnNumber}, line ${err.lineNumber}. \n\nStack trace: ${err.stack}`;

  console.error(formattedError);

  const overlay = new ErrorOverlay(err);

  document.body.appendChild(overlay);
};

if (import.meta.env.DEV) {
  window.addEventListener("error", ({ error }) => showErrorOverlay(error));
}

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <div className="App">
        <header>
          <Nav />
        </header>
        <Routes>
          <Route path="/TestPage" element={<TestPage />} />
        </Routes>
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
