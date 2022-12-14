import React from "react";
import { Routes as BrowserRoutes, Route } from "react-router-dom";
import { Home, Event, CreateEvent } from "./pages";

export const Routes = () => {
  return (
    <BrowserRoutes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
      </>
    </BrowserRoutes>
  );
};
