import { useEffect, useState } from "react";
import * as userService from "/src/services/userService";
import CreateUserModal from "/src/components/users/CreateUserModal";
import EditUserModal from "/src/components/users/EditUserModal"
import "/src/components/users/TableStyle.css";
import UserInfoModal from "/src/components/users/UserInfoModal"
import UserDeleteModal from "/src/components/users/UserDeleteModal"
import Spinner from "/src/components/spiner/Spinner";
import { Link } from "react-router-dom";

import Account from "./account/Account";
import AminBg from "./animbg/AnimBg";

export default function PageAccountOld(
    userId,
    firstName,
    lastName,
    email,
    phoneNumber,
    createdAt,
    imageUrl,
) {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [user, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        //const data = localStorage.getItem("auth");


        // const currentUser = JSON.parse(data);
        //userService.getOne(currentUser._id)
        userService.getOne("847ec027-f659-4086-8032-5173e2f9c93a")
            .then(result => setUser(result))

            .catch(err => console.log(err))
            .finally(() => setIsLoading(false));

    }, []);
    // const createUserClickHendler = () => {
    //     setShowCreateModal(true);
    // };

    const hideCreateUserModal = () => {
        setShowCreateModal(false);
    };

    const onUserCreateHandler = async (e) => {
        // stop page from reload
        e.preventDefault();

        setShowCreateModal(false);

        // Get data from data
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Create new user to the server
        const newUser = await userService.create(data);

        // Add newly create user at the local state
        setUsers(state => [...state, newUser]);

        // Close the modal
        setShowCreateModal(false);
    }
    /* edit */
    const editUserClickHendler = () => {
        setShowEditModal(true);
    };

    const hideEditUserModal = () => {
        setShowEditModal(false);
    };
    const onUserEditHandler = async (e) => {
        // stop page from reload
        e.preventDefault();

        setShowEditModal(false);

        // Get data from data
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Create new user to the server
        const newUser = await userService.create(data);

        // Add newly create user at the local state
        setUsers(state => [...state, newUser]);

        // Close the modal
        setShowEditModal(false);
    }


    /* end edit */
    const userInfoClickHandler = async (userId) => {
        setSelectedUser(userId);
        setShowInfo(true);
    };

    const deleteUserClickHandler = (userId) => {
        setSelectedUser(userId);
        setShowDelete(true);
    }

    const deleteUserHandler = async () => {
        // remove user from severv
        await userService.remove(selectedUser);

        // remove user form state
        setUsers(state => state.filter(user => user._id !== selectedUser));


        //Close the delete modal
        setShowDelete(false);
        console.log(`delete {userId}`)
    }
    return (
        <>
            {showCreateModal && (
                <CreateUserModal
                    onClose={hideCreateUserModal}
                    onCreate={onUserCreateHandler}
                />
            )}
            {showEditModal && (
                <EditUserModal
                    onClose={hideEditUserModal}
                    onEdit={onUserEditHandler}
                />
            )}

            {isLoading && (<Spinner />)}
            {showInfo && (
                <UserInfoModal
                    onClose={() => setShowInfo(false)}
                    userId={selectedUser}
                />
            )}

            {showDelete && (
                <UserDeleteModal
                    onClose={() => setShowDelete(false)}
                    onDelete={deleteUserHandler}
                />
            )}
            <main className="main">
                <section className="account-page">
                    <div className="container width-half">
                        <Account
                            key={user._id}
                        />
                    </div>
                </section>
            </main>

            <AminBg />
            {/*         
        <Link className="btn btn-add btn-green-gradient" onClick={createUserClickHendler}>
			<i className="fa-solid fa-user-plus"></i>
		</Link>         */}
        </>
    );
};

