import hero from '../assets/soundtrap-5Wj_tk8_Ens-unsplash.jpg'
import TextBloc from './TextBloc'
import ImageBloc from './ImageBloc'
import pad from '../assets/tamas-pap-sLubgyNR31Y-unsplash.jpg'
import guyPassing from '../assets/linkedin-sales-solutions-4ImnFgDZjVQ-unsplash.jpg'

export default function Main() {
    return (
        <main>
            <div>
                <img src={hero} alt="a woman writing music" />
            </div>
            <TextBloc>
                <h3>We make <a href="#">Live</a>, <a href="#">Push</a> and <a href="#">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h3>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </TextBloc>
            <ImageBloc>
                <img src={pad} alt="a person manipulating a pad" />
                <img src={guyPassing} alt="a guy crossing road" />
            </ImageBloc>
        </main>
    )
}