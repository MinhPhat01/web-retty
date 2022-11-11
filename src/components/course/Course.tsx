import useToggle from '../../hooks/useToggle';
import CourseList from './CourseList';
import CourseSelected from './CourseSelected';

const Course = () => {
    const { value, handleToggle, setValue } = useToggle()

    return (
        <div className='px-[55px] py-4 mt-5 bg-white'>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='text-textColor text-[16px]'>Please select a <span className='font-bold text-[20px]'>course</span></div>
                </div>
                <button
                    onClick={handleToggle}
                    className='text-[#3c8fdd]'
                >
                    Change
                </button>
            </div>
            {
                value ? <CourseList setValue={setValue} /> : <CourseSelected />
            }
        </div>
    );
};

export default Course;