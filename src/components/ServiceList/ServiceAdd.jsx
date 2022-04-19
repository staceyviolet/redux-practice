import { useDispatch } from "react-redux";
import { addItem, editItem } from "../../rtkstore/listReducer";

export function ServiceAdd({ item, setItem }) {
    const handleChange = (event) => {
        const { name, value } = event.target
        setItem({ ...item, [name]: value })
    }

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!item.name || !item.price) {
            return
        }

        if (!!item.id) {
            dispatch(editItem({
                id: item.id,
                newData: {
                    id: item.id,
                    name: item.name,
                    price: item.price
                }
            }))
        } else {
            dispatch(addItem({
                id: Math.random(10000),
                name: item.name,
                price: item.price
            }))
        }

        setItem({ name: '', price: '' })
    }

    const handleCancel = () => {
        setItem({ name: '', price: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name"
                onChange={handleChange}
                value={item.name}
                style={{ width: 200 }} />


            <input name="price"
                onChange={handleChange}
                value={item.price}
                style={{ width: 200 }} />

            <button onClick={handleSubmit} type="primary">Save</button>
            <button onClick={handleCancel} type="primary">Cancel</button>
        </form>);
}
