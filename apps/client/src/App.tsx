import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";
import Nav from "./Nav";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./RelayEnv";
import Modal from "react-modal";
import { Suspense } from "react";

const runtimeErrorOverlay = (err: any) => {
  // must be within function call because that's when the element is defined for sure.
  const ErrorOverlay = customElements.get("vite-error-overlay");

  // don't open outside vite environment
  if (!ErrorOverlay) {
    return;
  }

  const errorMessage = err.message ? `Runtime error: ${err.message} ` : "";
  const errorFilename = err.fileName ? `In ${err.fileName} ` : "";
  const errorColumnNumber = err.columnNumber
    ? `On column ${err.columnNumber} `
    : "";
  const errorLineNumber = err.lineNumber ? `On line ${err.lineNumber}. ` : "";
  const errorStacktrace = err.stack ? `\n\nStack trace: ${err.stack}` : "";

  const formattedError = (
    errorMessage +
    errorFilename +
    errorColumnNumber +
    errorLineNumber +
    errorStacktrace
  ).trim();

  console.error(formattedError);

  const overlay = new ErrorOverlay(err);

  document.body.appendChild(overlay);
};

if (import.meta.env.DEV) {
  window.addEventListener("error", ({ error }) => runtimeErrorOverlay(error));
}

Modal.setAppElement("#root");

function App() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

export default App;
