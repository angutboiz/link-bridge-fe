import { routers } from "./route";
import { useRoutes } from "react-router-dom";

function AllRouter() {
    const render = useRoutes(routers);
    return render;
}
export default AllRouter;
