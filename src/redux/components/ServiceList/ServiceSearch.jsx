import { useState } from "react";
import { useDispatch }      from "react-redux";
import { setCurrentFilter } from "../../rtkstore/listReducer";

export function ServiceSearch() {
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch()

   const handleChange = (e) => {
        setSearchString(e.target.value)
        dispatch(setCurrentFilter(e.target.value))
    }

    return (
        <label htmlFor="search" title="Search">Search: 
            <input name="search"
                onChange={handleChange}
                value={searchString}
                style={{ marginBottom: 10, marginLeft: 5, width: 450 }} />
        </label>
    );
}
