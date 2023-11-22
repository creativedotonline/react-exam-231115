import { useState, useRef, useEffect } from 'react';

import styles from '../ControlledForm.module.css';

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'm',
    swimming: false,
    shopping: false,
    running: false,
};

export default function ControlledForm({
    formRef,
}) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }

        console.log('Form is updated')
    }, [formValues]);

    const changeHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    };

    const ageValidator = () => {
        if (formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120',
            }));
        } else {
            if (errors.age) {
                setErrors(state => ({ ...state, age: '' }));
            }
        }
    }

    return (
        <>
		<form ref={formRef} onSubmit={submitHandler}>
			<div className='form-row'>
				<div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
						<input
							ref={usernameInputRef}
							type="text"
							id="username"
							name="username"
							value={formValues.username}
							onChange={changeHandler}
							onBlur={() => console.log('onBlur')}
						/>
					</div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
						<input
							type="password"
							id="password"
							name="password"
							value={formValues.password}
							onChange={changeHandler}
						/>
					</div>
                </div>
			</div>
			<div className='form-row'>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
                    <input
                        type="number"
                        id="ages"
                        name="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age && (
                        <p className={styles.errorMessage}>{errors.age}</p>
                    )}
					</div>
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Geneder</label>
                    <div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
						<select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
							<option value="f">F</option>
							<option value="m">M</option>
						</select>
					</div>
				</div>
			</div>	
			<div className='form-row'>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler} />
                    <label htmlFor="shopping">Shopping</label>
                    <input type="checkbox" name="shopping" id="shopping" checked={formValues.shopping} onChange={changeHandler} />
                    <label htmlFor="running">Running</label>
                    <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={changeHandler} />
			</div>
            <div className='form-row'>
                <button className="btn btn-green-gradient" type="submit" disabled={Object.values(errors).some(x => x)} >Register</button>
                <button className="btn btn-PINK-gradient" type="button" onClick={resetFormHandler}>Reset</button>
            </div>
            </form>
        </>
    );
}
