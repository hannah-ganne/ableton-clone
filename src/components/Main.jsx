import hero from '../assets/soundtrap-5Wj_tk8_Ens-unsplash.jpg'
import TextBloc from './TextBloc'
import ImageBloc from './ImageBloc'
import pad from '../assets/tamas-pap-sLubgyNR31Y-unsplash.jpg'
import guyPassing from '../assets/linkedin-sales-solutions-4ImnFgDZjVQ-unsplash.jpg'
import MediaBloc from './MediaBloc'
import womanWriting from '../assets/barney-yau-BbGuVc9YTaw-unsplash.jpg'
import manMixing from '../assets/tom-pottiger-l5XnUP7-M4w-unsplash.jpg'
import building from '../assets/dorsa-masghati-jyNlrIiObWQ-unsplash.jpg'
import producing from '../assets/oscar-ivan-esquivel-arteaga-7ggVlsBGruY-unsplash.jpg'
import office from '../assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'
import meeting from '../assets/austin-distel-rxpThOwuVgE-unsplash.jpg'
import office2 from '../assets/proxyclick-visitor-management-system-l90zRbWvCoE-unsplash.jpg'

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
            <MediaBloc>
                <figure>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/9SbnhgjeyXA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                    <figcaption>Why Ableton - Juanpe Bolivar</figcaption>
                </figure>
            </MediaBloc>
            <TextBloc>
                <h3>
                    We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
                </h3>
                <p>
                    Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.
                </p>
            </TextBloc>
            <ImageBloc>
                <img
                    src={womanWriting}
                    alt="a woman writing on the whiteboard"
                    style={{ width: '35%', position: 'absolute', top: '7%', left: '10%', zIndex: 10}}
                    
                />
                <img 
                    src={manMixing}
                    alt="a man mixing music in the studio"
                    style={{ width: '40%', position: 'absolute', top: '27%', right: '10%', zIndex: 10}}
                />
                <img 
                    src={building}
                    alt="building number"
                    style={{ width: '35%', position: 'absolute', top: '53%', left: '10%', zIndex: 10}}
                />
                <div style={{
                        width: 900,
                        height: 1000,
                        backgroundColor: '#b6ffc0',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 0,
                    }}>    
                </div>
            </ImageBloc>
            <TextBloc>
                <h3 style={{marginTop: 150}}>
                    We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
                </h3>
                <p>
                    Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
                </p>
            </TextBloc>
            <MediaBloc>
                <img src={producing} alt="computer screen with producing program" />
            </MediaBloc>
            <TextBloc>
                <h3>
                    We're passionate about what we do, but we're equally passionate about improving who we are.
                </h3>
                <p>
                    We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.
                </p>
                <p>
                    Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
                </p>
            </TextBloc>
            <ImageBloc>
                <img
                    src={office}
                    alt="women talking to each other in the office" 
                    style={{ width: '35%', position: 'absolute', top: 260, left: '10%', zIndex: 10}}
                />
                <img
                    src={meeting}
                    alt="people in a meeting" 
                    style={{ width: '60%', position: 'absolute', top: '22%', right: '-20%', zIndex: 10}}
                />
                <div
                    style={{
                        width: 900,
                        height: 900,
                        backgroundColor: '#d5b3ff',
                        position: 'absolute',
                        top: 0,
                        left: '18%',
                        zIndex: 0,
                    }}
                ></div>
            </ImageBloc>
            <TextBloc>
                <h3>
                    We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
                </h3>
                <p>
                    If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.
                </p>
            </TextBloc>
            <MediaBloc>
                <img src={office2} alt="startup company's office" style={{zIndex: 0}} />
                <div style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: '#b1c5ff',
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    zIndex: 2,
                    padding: '7em'
                }}>
                    <h3>
                        We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
                    </h3>
                    <a href="#">See latest jobs &gt;</a>
                </div>              
            </MediaBloc>
        </main>
    )
}