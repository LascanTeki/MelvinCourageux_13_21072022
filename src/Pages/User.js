import Account from '../Components/Account'
import '../Style/User.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { editing } from '../Redux';

function User() {

    //makes the user change page
    const history = useNavigate();

    const dispatch = useDispatch();

    const state = useSelector(state => state.control)

    var firstname
    var lastname

    //checks if the user is loged in and redirects them if they're not
    useEffect(() => {
        if (state.token === "") {
            history('/')
            return ("")
        }
    });

    const HandleEdit = (e) => {

        e.preventDefault();

        //takes the values inserted into the form
        firstname = document.getElementById('firstname').value;
        lastname = document.getElementById('lastname').value;

        //sends user inputed new name to the API as well as the token taken during login
        fetch("http://localhost:3001/api/v1/user/profile", {
            body: `{ "firstName": "${firstname}" , "lastName": "${lastname}"}`,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${state.token}`,
                "Content-Type": "application/json"
            },
            method: "PUT"
        }).then(() => {
            //changes the values of firstname and lastname in redux
            dispatch(editing({ firstname, lastname }))
        });

        //reverts back to the classic message "Welcome back" on the page
        document.getElementsByClassName("header")[0].style.display = "block";
        document.getElementsByClassName("edit")[0].style.display = "none";
    }

    function edit() {

        //shows the form to change the username
        document.getElementsByClassName("header")[0].style.display = "none";
        document.getElementsByClassName("edit")[0].style.display = "flex";
    }

    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{state.firstname} {state.lastname}!</h1>
                <button className="edit-button" onClick={edit}>Edit Name</button>
            </div>
            <form onSubmit={HandleEdit}>
                <div className='edit'>
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" />
                    </div>
                    <input className="sign-in-button" type="submit" value="Submit" />
                </div>
            </form>
            <Account titl="Checking (x8349)" amount="2,082.79" description="Available Balance" />
            <Account titl="Savings (x6712)" amount="10,928.42" description="Available Balance" />
            <Account titl="Credit Card (x8349)" amount="184.30" description="Current Balance" />
        </main>
    )

}
export default User