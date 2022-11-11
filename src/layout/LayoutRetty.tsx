import Header from '../components/header/Header';
import { Outlet } from "react-router-dom";

const LayoutRetty = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default LayoutRetty;