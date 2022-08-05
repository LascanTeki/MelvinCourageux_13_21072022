import Account from '../Components/Account'
import '../Style/User.css'

function User() {
    return (
        <main className='main bg-dark'>
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <Account titl="Checking (x8349)" amount="2,082.79" description="Available Balance"/>
            <Account titl="Checking (x8349)" amount="2,082.79" description="Available Balance"/>
            <Account titl="Checking (x8349)" amount="2,082.79" description="Available Balance"/>
        </main>
    )
}
export default User