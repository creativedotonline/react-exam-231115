export default function UncontrolledForm(){
    const submitHandler = (e) =>{
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(formData.get('username'))
        console.log(formData.get('password'))
    }

    return(
        <section className="uncontrolledForm_section layout_padding">
        <h1>Uncontrolled Form</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username" >Username:</label>
                <input type="text" name="username" id="username" />
            </div>
            <div>
                <label htmlFor="password" >Username:</label>
                <input type="text" name="password" id="password" />
            </div>
            <div>
                <input type="submit" value="Register"></input>
            </div>
        </form>
        </section>
    );
}