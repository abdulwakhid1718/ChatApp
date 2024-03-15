const Login = () => {
    return (
        <div className="formWrapper">
            <h1>Chat Kuy</h1>
            <span>Login</span>
            <form action="">
                <input type="text" placeholder="Masukin Emailnya Dong.." />
                <input type="password" placeholder="Passwordnya apa" />
                <button>Sign In</button>
            </form>
            <p>Belum punya akun ya? <a href="">Sign Up</a></p>
        </div>
    )
}

export default Login;