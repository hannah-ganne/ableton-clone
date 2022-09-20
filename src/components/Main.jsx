import hero from '../assets/soundtrap-5Wj_tk8_Ens-unsplash.jpg'
import TextBloc from './TextBloc'
import ImageBloc from './ImageBloc'
import pad from '../assets/tamas-pap-sLubgyNR31Y-unsplash.jpg'
import guyPassing from '../assets/linkedin-sales-solutions-4ImnFgDZjVQ-unsplash.jpg'

export default function Main() {
    return (
        <main>
            <div className="hero-container">
                <img src={hero} className="hero" alt="a woman writing music" />
                <span>Ableton</span>
            </div>
            <TextBloc>
                <h3>
                    We make <a href="#">Live</a>, <a href="#">Push</a> and <a href="#">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                </h3>
                <p>
                    Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.
                </p>
            </TextBloc>
            <ImageBloc>
                <img
                    src={pad}
                    alt="a person manipulating a pad" 
                    style={{ width: '60%', position: 'absolute', top: 120, left: '10%', zIndex: 10}}
                />
                <img
                    src={guyPassing}
                    alt="a guy crossing road" 
                    style={{ width: '30%', position: 'absolute', top: 260, right: '10%', zIndex: 10}}    
                />
                <div
                    style={{
                        width: 800,
                        height: 800,
                        backgroundColor: '#fbffa7',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        zIndex: 0
                    }}></div>
            </ImageBloc>
            <TextBloc>
                <h3>
                    Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.
                </h3>
                <p>
                    We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
                </p>
            </TextBloc>
        </main>
    )
}