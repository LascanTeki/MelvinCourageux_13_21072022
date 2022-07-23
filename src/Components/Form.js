
import '../Style/Form.css'
import Input from './Input'

function Form() {

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <Input id="username" type="text"/>
                <Input id="password" type="password"/>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="./user.html" className="sign-in-button">Sign In</a>
            </form>
        </section>
    )
}

export default Form