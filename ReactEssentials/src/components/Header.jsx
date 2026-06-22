import './Header.css'
import {LOGO_URL} from './../utils/links';

export const HeaderComponent = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo"/>
            </div>
            <div className="header-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>
                      <img src="/src/assets/shopping-cart.png" alt="cart" />
                    </li>
                </ul>
            </div>
          
        </div>
    )
}