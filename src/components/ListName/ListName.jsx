
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function ListName() {

    const [newListName, setNewListName] = useState('');

    // dispatch variable
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`New Name:`, newListName);
        const action = { type: 'SET_LIST_NAME', payload: newListName}
        dispatch(action);
    }


    return (
        <form onSubmit={handleSubmit}>
            {/* Two way data binding */}
            <input value={newListName} onChange={(e) => setNewListName(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    )
}

export default ListName;