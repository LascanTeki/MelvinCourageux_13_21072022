import Banner from '../Components/Banner'
import Info from '../Components/Info'
import chat from '../Asset/icon-chat.png'
import money from '../Asset/icon-money.png'
import security from '../Asset/icon-security.png'

function Home() {
    return (
        <div>
        <Banner/>
        <div className='features'>
        <Info title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." image={chat}/>
        <Info title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" image={money}/>
        <Info title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." image={security}/>
        </div>
        </div>
    )
  }
  export default Home