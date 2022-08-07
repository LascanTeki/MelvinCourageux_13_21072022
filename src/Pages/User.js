import Account from '../Components/Account'
import '../Style/User.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import { editing } from '../Redux';

function User() {

    const history = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector(state => state.control)

    var firstname
    var lastname

    useEffect(() => {
        if (state.token === "") {
            history('/')
            return ("")
        }
    });

    const HandleEdit = (e) => {

        e.preventDefault();

        firstname = document.getElementById('firstname').value;
        lastname = document.getElementById('lastname').value;

        fetch("http://localhost:3001/api/v1/user/profile", {
            body: `{ "firstName": "${firstname}" , "lastName": "${lastname}"}`,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${state.token}`,
                "Content-Type": "application/json"
            },
            method: "PUT"
        }).then(() => {
            dispatch(editing({ firstname, lastname }))
        });

        document.getElementsByClassName("header")[0].style.display = "block";
        document.getElementsByClassName("edit")[0].style.display = "none";
    }

    function edit() {

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
                    <input className="sign-in-button" type="submit" value="Sumbit" />
                </div>
            </form>
            <Account titl="Checking (x8349)" amount="2,082.79" description="Available Balance" />
            <Account titl="Savings (x6712)" amount="10,928.42" description="Available Balance" />
            <Account titl="Credit Card (x8349)" amount="184.30" description="Current Balance" />
        </main>
    )

}
export default User