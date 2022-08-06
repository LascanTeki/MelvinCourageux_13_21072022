import Account from '../Components/Account'
import '../Style/User.css'
import { useSelector, useDispatch } from "react-redux";

function User() {

    const state = useSelector(state => state.control)

    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{state.firstname} {state.lastname}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <Account titl="Checking (x8349)" amount="2,082.79" description="Available Balance"/>
            <Account titl="Savings (x6712)" amount="10,928.42" description="Available Balance"/>
            <Account titl="Credit Card (x8349)" amount="184.30" description="Current Balance"/>
        </main>
    )
}
export default User