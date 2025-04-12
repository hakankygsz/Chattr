import { Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import Projects from "@/pages/Projects/Projects";
import NotFound from "@/pages/Status/NotFound";

const appRoutes = (
    <>
        <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </>
);

export default appRoutes;