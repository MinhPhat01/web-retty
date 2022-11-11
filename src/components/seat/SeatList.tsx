import { Fragment, useEffect } from 'react';
import { v4 } from 'uuid';
import { useRetty } from '../../context/rettyContext';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getData, setLoading } from '../../redux/seat/seatSlice';
import Loading from '../loading/Loading';
import SeatItem from './SeatItem';

type SeatListProps = {
    setValue: (s: boolean) => void
}

const SeatList = ({ setValue }: SeatListProps) => {
    const dispatch = useAppDispatch()
    const data = useAppSelector((state) => state.seat.dataSeat)
    const loading = useAppSelector((state) => state.seat.loading)
    const { amountPeople } = useRetty()
    useEffect(() => {
        if (data.length === 0) {
            dispatch(setLoading(true))
            dispatch(getData())
        } else {
            return;
        }
    }, [data.length, dispatch])

    return (
        <div className='py-4 bg-white '>
            {loading && <Loading />}
            {
                !loading && data.length > 0 && data.map((item) => {
                    return (
                        <Fragment key={v4()}>
                            {item.numberPeople === Number(amountPeople) && <SeatItem setValue={setValue} key={item.id} listSeatToday={item.seats} />}
                        </Fragment>
                    )
                })
            }
        </div>
    );
};

export default SeatList;


