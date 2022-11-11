import { options } from '../../constants/optionsPeople';
import { useRetty } from '../../context/rettyContext';
import useClickOutside from '../../hooks/useClickOutSide';
import Dropdown from '../dropdown/Dropdown';
import List from '../dropdown/List';
import Option from '../dropdown/Option';
import Select from '../dropdown/Select';
import IconUser from '../icons/IconUser';

const SelectPeople = () => {
    const { setAmountPeople, amountPeople } = useRetty()
    const handleGetPeople = (amount: string) => () => {
        setAmountPeople(amount)
    }
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
                    icon={<IconUser />}
                    placeholder={amountPeople ? amountPeople + " people" : "Select people"}
                />
                <List show={show}>
                    {options.map((item) => {
                        return (
                            <Option setShow={setShow} key={item.id} onClick={handleGetPeople(item.name)}>{item.name} People</Option>
                        )
                    })}
                </List>
            </Dropdown>
        </div >
    );
};

export default SelectPeople;