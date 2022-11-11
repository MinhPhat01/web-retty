import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getData, setLoading } from '../../redux/retty/rettySlice';
import Loading from '../loading/Loading';
import CourseItem from './CourseItem';

type CourseListProps = {
    setValue: (s: boolean) => void
}

const CourseList = ({ setValue }: CourseListProps) => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.retty.dataRetty)
    const loading = useAppSelector((state) => state.retty.loading)
    useEffect(() => {
        if (data.length === 0) {
            dispatch(setLoading(true))
            dispatch(getData())
        }
        else {
            return;
        }

    }, [data.length, dispatch])

    return (
        <div className='py-4 bg-white '>
            {loading && <Loading />}
            {
                !loading && data.length > 0 && data.map((item) => {
                    return (
                        <CourseItem
                            setValue={setValue}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            img={item.thumbnail}
                        />
                    )
                })
            }
        </div>
    );
};

export default CourseList;