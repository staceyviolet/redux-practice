import { useDispatch, useSelector } from "react-redux";
import { deleteItem }               from "../../rtkstore/listReducer";

export function ServiceList({ handleEdit, setItem }) {
    const filterStr = useSelector((store) => store.listReducer.currentFilter)

    const storeItems = useSelector((store) => {
        if (!filterStr) {
            return store.listReducer.items
        } else {
            return store.listReducer.items.filter(item => item.name.concat(" ")
                .concat(item.price)
                .toLowerCase()
                .includes(filterStr.toLowerCase()))
        }
    })

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(deleteItem(id))
        handleEdit({name: '', price: ''})
    }

    const edit = (item) => {
        handleEdit(item)
    }

    return (
        <ul>{
            storeItems && storeItems.map(item => (
                <li key={item.id} style={{ marginTop: 10 }}>
                    <div style={{ display: 'inline-block', width: 200 }}>{item.name}</div>
                    <div style={{ display: 'inline-block', width: 100 }}>{item.price}</div>
                    <button onClick={() => { handleRemove(item.id) }}>x</button>
                    <button onClick={() => { edit(item) }}>✎</button>
                </li>
            ))}
        </ul>);
}