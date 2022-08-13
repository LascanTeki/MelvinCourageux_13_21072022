
import '../Style/Form.css'
import { login } from '../Redux';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


function Form() {


    var username
    var password

    const dispatch = useDispatch();
    const history = useNavigate();


    const HandleLogin = (e) => {
        e.preventDefault();

        //takes values from form
        username = document.getElementById('username').value;
        password = document.getElementById('password').value;

        //sends the inputed username and password to the API and takes it's response
        fetch("http://localhost:3001/api/v1/user/login", {
            body: `{ "email": "${username}" , "password": "${password}"}`,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then(response => response.json())
            .then((response) => {
                //if the API says that de login is correct send authorization token to the API to reccuperate user informations
                if (response.status === 200) {
                    var token = response.body.token
                    fetch("http://localhost:3001/api/v1/user/profile", {
                        body: "",
                        headers: { Accept: "application/json", "Authorization": `Bearer ${token}` },
                        method: "POST"
                    }).then(response => response.json())
                        .then((response) => {
                            if (response.status === 200) {
                                dispatch(login({response, token}))
                                history('/User')
                            }
                            //else, alerts the user of the error occuring
                            else{
                                alert("An error happened in our server, please try again later");
                            }
                        });
                }
                else if (response.status === 400){
                    alert("Username or Password invalid");
                }
                else if (response.status === 500){
                    alert("An error happened in our server, please try again later");
                }

            });

    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={HandleLogin}>
                <div className="input-wrapper">
                    <label htmlFor="username">username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <input className="sign-in-button" type="submit" value="Sign In" />
            </form>
        </section>
    )
}

export default Form