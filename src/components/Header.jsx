import logo from '../assets/logo.svg'
import NavList from './NavList'

export default function Header() {
    return (
        <header>
            <section>
                <img src={logo} alt="logo of ableton" />
                <NavList list={['Live', 'Push', 'Link', 'Shop', 'Packs', 'Help', 'More +']} />
                <NavList list={['Try Live for free', 'Log in or register']} />
            </section>
            <section>
                <NavList list={['About', 'Jobs', 'Apprenticeships']} />
            </section>
        </header>
    )
}