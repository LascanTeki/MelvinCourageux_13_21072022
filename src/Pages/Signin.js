import Form from '../Components/Form'
import { connect } from 'react-redux';

function Signin() {
    return (
        <main className='main bg-dark'>
        <Form/>
        </main>
    )
  }

  connect()(Form)

  export default Signin