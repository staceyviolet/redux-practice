import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editItem } from "../../rtkstore/listReducer";

export function ServiceList({handleEdit}) {
    const storeItems = useSelector((store) => store.listReducer.items)
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(deleteItem(id))
    }

    const edit = (item) => {
        handleEdit(item)
    }

    return (
        <ul>{
            storeItems && storeItems.map(item => (
                <li key={item.id} style={{marginTop: 10}}>
                    <div style={{display: 'inline-block', width: 200}}>{item.name}</div>
                    <div style={{display: 'inline-block', width: 100}}>{item.price}</div>
                    <button onClick={() => {handleRemove(item.id)}}>x</button>
                    <button onClick={() => {edit(item)}}>✎</button>
                </li>
            ))}
        </ul>);
}