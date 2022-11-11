import { useRetty } from "../../context/rettyContext";
import IconArrowDown from "../icons/IconArrowDown";

type CourseProps = {
    id?: number
    title?: string
    img?: string
    price?: number
    setValue: (s: boolean) => void
}

const CourseItem = ({ img, title, price, setValue }: CourseProps) => {
    const { setTitleCourse, setImgCourse, setPriceCrouse } = useRetty()
    const handleGetItem = (title = "", img = "", price = 0) => () => {
        setTitleCourse(title)
        setImgCourse(img)
        setPriceCrouse(price)
        setValue(false)
    }

    return (
        <>
            <div className='flex items-center mt-5 mb-3 pt-4 gap-x-5 border-t-[2px] border-[#eaeaeb]'>
                <div className='w-[100px] h-[100px]'><img className='object-center w-full h-full' src={img} alt="" /></div>
                <div className='w-[600px]'>
                    <div className="flex mb-2 text-sm font-bold gap-x-2 text-colorPrimary">
                        <div className="px-4 py-[2px] border rounded-md border-colorPrimary">2 hours</div>
                        <div className="px-4 py-[2px] border rounded-md border-colorPrimary"> all you can drink</div>
                    </div>
                    <h2 className='text-[#2e2e3a] text-[16px] font-bold leading-5'>
                        {title}
                    </h2>
                    <p className='text-[18px] text-[#d70025] font-bold'>{price} yen (tax included)</p>
                    <div className="flex items-center gap-x-1 text-[#2d88da] cursor-pointer mt-1 text-sm select-none">
                        View course details
                        <IconArrowDown />
                    </div>
                </div>
                <button
                    onClick={handleGetItem(title, img, price)}
                    className="px-8 border border-gray-400 py-[6px] rounded-md font-bold hover:opacity-80 transition-opacity select-none">Choice</button>
            </div>
        </>
    );
};

export default CourseItem;