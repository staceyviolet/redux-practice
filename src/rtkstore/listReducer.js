import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [
        {
            id: Math.random(10000),
            name: 'Диагностика',
            price: 'Бесплатно'
        },
        {
            id: Math.random(10000),
            name: 'Замена стекла',
            price: '21000'
        },
        {
            id: Math.random(10000),
            name: 'Замена дисплея',
            price: '25000'
        }
    ],
    status: 'idle',
    currentFilter: ''
}

const listReducer = createSlice({
    name: 'listReducer',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload)
        },
        deleteItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        editItem(state, action) {
            const { id, newData } = action.payload
            const idx = state.items.findIndex(item => item.id === id)
            state.items[idx] = newData
        },
        setCurrentFilter(state, action) {
           state.currentFilter = action.payload
        }
    }
})

const { actions, reducer } = listReducer
export const { addItem, deleteItem, editItem, setCurrentFilter } = actions
export default reducer