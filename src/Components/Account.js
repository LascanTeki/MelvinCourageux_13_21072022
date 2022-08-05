

function Account(props) {

    let titl = props.titl
    let amount = props.amount
    let description = props.description

    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank {titl}</h3>
          <p className="account-amount">${amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    )
}

export default Account