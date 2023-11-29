import { Link, Outlet } from "react-router-dom";
export default function RootLayout() {
    return (
        <>
            <div className="flex py-8 mx-4">
                <Link to="/" className="text-5xl">
                    Remarque
                </Link>
                <div className="my-auto ml-auto">
                    <button className="px-4 py-2 rounded-md bg-P300 hover:bg-P200">
                        Log In
                    </button>
                    <button className="px-4 py-2 ml-4 rounded-md bg-A300 hover:bg-A200">
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="container mx-auto">
                <Outlet />
            </div>
        </>
    );
}
