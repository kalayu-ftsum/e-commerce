import { LogoFacebook, LogoTwitter, LogoInstagram, LogoLinkedin } from 'react-ionicons'
import './index.css'

function Logos({
    height = "1rem",
    width = "1rem",
    color="var(--text-clr)"
}) {
    return (
        <>
            <div className="header__one__container">
                <ul className='socialmedia__list'>
                    <li className="socialmedia__icon">
                        <LogoFacebook
                            color={color}
                            height={height}
                            width={width}
                        />
                    </li>
                    <li className="socialmedia__icon">
                        <LogoTwitter
                            color={color}
                            height={height}
                            width={width}
                        />
                    </li>
                    <li className="socialmedia__icon">
                        <LogoInstagram
                            color={color}
                            height={height}
                            width={width}
                        />
                    </li>

                    <li className="socialmedia__icon">
                        <LogoLinkedin
                            color={color}
                            height={height}
                            width={width}
                        />
                    </li>
                </ul>

                <p className="header__one__text">
                    <span>FREE SHIPPING</span> THIS WEEK ORDER OVER - $55
                </p>

                <div className="select__container">
                    <select name="currency" id="currency">
                        <option value="usd">USD $</option>
                        <option value="eur">EUR €</option>
                    </select>

                    <select name="language" id="language">
                        <option value="en-US">English</option>
                        <option value="es-ES">Español</option>
                        <option value="fr">Français</option>
                    </select>
                </div>

            </div>

        </>
    );
}

export default Logos;