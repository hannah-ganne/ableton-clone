import ListItem from "./ListItem"
import logo from '../assets/logo.svg'

export default function Footer() {
    return (
        <>
            <div className="container"></div>
            <footer>
                <h1>Ableton</h1>
                <section className="footer-main">
                    <div className="footer-main-row">
                        <ListItem list={['Register Live or Push', 'About Ableton', 'Jobs']} />
                        <ListItem title="Education" list={['Offers for students and teachers', 'Ableton for the Classroom', 'Ableton for Colleges and Universities']} />
                        <div className="footer-main-item">
                            <h3>Sign up to our newsletter</h3>
                            <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <input type="submit" value="Sign up" />
                            </form>
                        </div>
                    </div>
                    <div className="footer-main-row">
                        <ListItem title="Community" list={['Find Ableton User Groups', 'Find Certified Training', 'Become a Certified Trainer']} />
                        <ListItem title="Distributors" list={['Find Distributors', 'Try Push in-store']} />
                        <div className="footer-main-item">
                            <h3>Language and Location</h3>
                            <select>
                                <option value="English">English</option>
                                <option value="Deutsch">Deutsch</option>
                                <option value="Français">Français</option>
                            </select>
                            <select>
                                <option value="United States">United States</option>
                                <option value="Germany">Germany</option>
                                <option value="France">France</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className="footer-secondary">
                    <ListItem list={['Contact Us', 'Press Resources', 'Legal Info', 'Privacy Policy', 'Cookie Settings', 'Imprint']} flexRow={true} />
                    <div>
                        <p>Made in Berlin</p>
                        <img src={logo} alt="logo of ableton" />
                    </div>
                </section>
            </footer>
        </>
    )
}