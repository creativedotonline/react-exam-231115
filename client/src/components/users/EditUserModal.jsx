import "../forms/FormsStyle.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const EditUserModal = ({
    hideModal,
    onEdit,
    onClose,
}) => {
    const {userId}=useParams();
	const [user, setUser] = useState({
		email:'',
		userName:'',
		imageUrl:'',
		phoneNumber:'',
	});
    const onChange = (e) => {
		setUser(state => ({
			...state,
			[e.target.name]: e.target.value
		}));
	};
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Add User</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form id="register" onSubmit={onEdit}>
                        <div>
                            <label htmlFor="firstName">Email</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-user"></i></span>
                                <input
                                    type="text"
                                    id="email-register"
                                    name="email"
                                    value={user.email}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="firstName">Username</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-user"></i></span>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={user.userName}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="firstName">User Image</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-image"></i></span>
                                <input
                                    type="text"
                                    id="userimg"
                                    name="userimg"
                                    value={user.userImg}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="firstName">Phone</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-phone"></i></span>
                                <input
                                    type="number"
                                    id="phone"
                                    name="userphone"
                                    value={user.userPhone}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="pass">Password</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-lock"></i></span>
                                <input
                                    type="password"
                                    id="register-password"
                                    name="password"
                                    value={user.password}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm-pass">Confirm Password</label>
                            <div className="input-wrapper">
                                <span><i className="fa-solid fa-lock"></i></span>
                                <input
                                    type="password"
                                    id="comfirm-password"
                                    name="comfirm-password"
                                    value={user.password}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <div id="form-actions">
                            <input className="btn submit btn-green-gradient" type="submit" value="Register" />
                        </div>
                        </form>
                    {/* <form onSubmit={onCreate}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="text" 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userName">Username</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input 
                                        id="userName" 
                                        name="userName" 
                                        type="text" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="imageUrl">User Avatar</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-image"></i></span>
                                    <input 
                                        id="imageUrl" 
                                        name="imageUrl" 
                                        type="text"
                                     />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="phoneNumber" name="phoneNumber" type="text" />
                                </div>
                            </div>
                        </div>
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;