import React from "react";
import { Header } from "./components";
import { MainContainer, CreateContainer } from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export const App = () => {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col">
        <Header />
        <main className="mt-20 md:mt-24 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
