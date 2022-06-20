
import React from "react";
import { Route, Routes } from "react-router-dom";

const RenderSwitchRoute = (routes) => {
    return (
        <Routes>
            {
                routes.map((value, index) => (
                    <Route key={index} path={value.path} element={value.component} />
                ))
            }
        </Routes>
    );
}
export default RenderSwitchRoute;