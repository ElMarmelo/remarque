import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

//Router config
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/edit/id" element={<EditTask />} />
        </Route>
    )
);
function App() {
    return (
        <div className="min-h-screen text-[#cccccc] bg-gradient-to-b from-B500 to-B300">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
