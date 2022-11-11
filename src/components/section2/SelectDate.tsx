import { format } from 'date-fns';
import { useState } from 'react';
import useClickOutside from '../../hooks/useClickOutSide';
import CalendarMain from '../calendar/CalendarMain';
import Dropdown from '../dropdown/Dropdown';
import ListCalendar from '../dropdown/ListCalendar';
import Select from '../dropdown/Select';
import IconCalendar from '../icons/IconCalendar';

const SelectDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    currentDate.getDay();
    const dayOfWeekName = currentDate.toLocaleString(
        'default', { weekday: 'long' }
    );
    const weekName = dayOfWeekName.slice(0, 3)
    const { show, setShow, nodeRef } = useClickOutside()
    const handleSetShow = () => {
        setShow(!show)
    }

    return (
        <div className="w-[392px]" ref={nodeRef}>
            <Dropdown>
                <Select
                    show={show}
                    handleSetShow={handleSetShow}
                    icon={<IconCalendar />}
                    placeholder={`${format(currentDate, "dd")} (${weekName})`}
                />
                <ListCalendar show={show} className='bg-[#f4f4f5]'>
                    <CalendarMain currentDate={currentDate} setCurrentDate={setCurrentDate} />
                </ListCalendar>
            </Dropdown>

        </div >
    );
};

export default SelectDate;