import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='fixed flex items-center w-full p-6 bg-white shadow-md z-[99] border-t-4 border-[#ff8214]'>
            <Link to="/" className="text-[30px] font-semibold">Retty</Link>
        </div>
    );
};

export default Header;