import addAvatar from "../assets/img/addAvatar.png"

const Register = () => {
    return (
        <div className="formWrapper">
            <h1>Chat Kuy</h1>
            <span>Register</span>
            <form>
                <input type="text" placeholder="Masukin Nama Kamu" />
                <input type="text" placeholder="Masukin Emailnya Dong.." />
                <input type="password" placeholder="Passwordnya apa" />
                <input type="file" id="fileAvatar" hidden/>
                <label htmlFor="fileAvatar">
                    <img src={addAvatar} alt="" width={25}/>
                    Upload Foto
                </label>
                <button>Sign Up</button>
            </form>
            <p>Sudah punya akun ya? <a href="">Sign In</a></p>
        </div>
    )
}

export default Register
