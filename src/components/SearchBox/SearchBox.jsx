import { useId } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from './SearchBox.module.css'

export default function SearchBox() {
    const searchId = useId();
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);
    const handleFilterChange = (e) => dispatch(changeFilter(e.target.value));

    return (
        <div className={s.searchBox}>
            <label className={s.label} htmlFor={searchId}>
                Find contacts by name
            </label>
            <input className={s.inputBox} 
                type="name"
                id={searchId}
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
}