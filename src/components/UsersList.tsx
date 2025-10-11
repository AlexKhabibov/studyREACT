import { useEffect, useState } from "react";

function UsersList() {

    interface User {
        id: number;
        name: string;
        age: number;
    };

    const usersArr1: User[] = [
        { id: 1, name: 'Alex', age: 23 },
        { id: 2, name: 'Jake', age: 34 },
        { id: 3, name: 'Alen', age: 40 },
        { id: 4, name: 'Kyle', age: 24 },
    ];

    const [array, setArray] = useState(usersArr1);
    const [isSorted, setIsSorted] = useState(false);

    useEffect(() => {
        if (isSorted) {
            setArray(prev => [...prev].sort((a, b) => a.age - b.age));
        } else {
            setArray(usersArr1);
        }
    }, [isSorted]);

    return (
        <>
            <ul>
                {array.map(user => (
                    <li key={user.id}>
                        {user.name} : {user.age}
                    </li>
                ))}
            </ul>

            <button onClick={() => setIsSorted(prev => !prev)}>
                {isSorted ? "Сбросить сортировку" : "Сортировать по возрасту"}
            </button>
        </>
    );
}

export default UsersList;