import logo from '../assets/logo.svg'
import NavList from './NavList'
import { useEffect, useState } from 'react'

export default function Header() {
    const [topValue, setTopValue] = useState(0)


    useEffect(() => {
        const body = document.body
        const scrollUp = "scroll-up"
        const scrollDown = "scroll-down"
        let lastScroll = 0;
        
        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 83) {
                body.classList.remove(scrollUp);

                return;
            }

            // if (currentScroll <= 0) {
            //     body.classList.remove(scrollUp);

            //     return;
            // }

            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
              // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);

            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
              // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }

            lastScroll = currentScroll;
        });
    })

    return (
        <header>
            <section>
                <div>
                    <img src={logo} alt="logo of ableton" />
                    <NavList list={['Live', 'Push', 'Link', 'Shop', 'Packs', 'Help', 'More +']} />
                </div>
                <NavList list={['Try Live for free', 'Log in or register']} />
            </section>
            <div className="divider"></div>
            <div className="container"></div>
            <section className="header-secondary">
                <NavList list={['About', 'Jobs', 'Apprenticeships']} />
            </section>
        </header>
    )
}