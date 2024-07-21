import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="text-center p-4">
        <h1 className="text-2xl">404 - Page Not found</h1>
        <Link to='/' className="text-blue-500">Go Home</Link>
    </div>
);

export default NotFound;
