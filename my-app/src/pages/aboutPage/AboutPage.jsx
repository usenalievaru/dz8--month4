import React, { useState, useRef } from 'react';
import ModalWindow from "../../components/modalWindow/ModalWindow";

function AboutPage(props) {
    const [users, setUsers] = useState([]);
    const refName = useRef();
    const refUsername = useRef();
    const refEmail = useRef();

    const handleClickCreate = () => {
        const newUser = {
            name: refName.current.value,
            username: refUsername.current.value,
            email: refEmail.current.value
        };
        setUsers(prevUsers => [...prevUsers, newUser]);
        refName.current.value = '';
        refUsername.current.value = '';
        refEmail.current.value = '';
    };

    return (
        <div>
            <ModalWindow
                content={
                    <div style={{
                        marginTop: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 30
                    }}>
                        <input
                            placeholder={'name'}
                            ref={refName}
                        />
                        <input
                            placeholder={'username'}
                            ref={refUsername}
                        />
                        <input
                            placeholder={'email'}
                            ref={refEmail}
                        />
                        <button onClick={handleClickCreate}>Create</button>
                    </div>
                }
            />
            <div>
                <h2>Users:</h2>
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            <p>Name: {user.name}</p>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;
