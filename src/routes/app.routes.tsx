import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/Status/NotFound";
import { Route } from "react-router-dom";

const appRoutes = (
    <>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </>
);

export default appRoutes;