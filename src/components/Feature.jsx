import "./Features.css"
import Navbar from './Navbar'
import Footer from './Footer'
import msg from '../assets/images/msg.png'
import heart from '../assets/images/heart.png'
import apple from '../assets/images/apple.png'
function Feature() {
    return (
        <>
            <Navbar />
            <div className='features'>
                <h1 className='heading'>Features of the Program</h1>
                <p className='para'>Everything you need for a complete </p>
                <p className='para'>mind-body transformation</p>
                <div className="centercard">
                    <div className='card_container'>
                        <div className="card1">
                            <img
                                src="https://ajanm.ai/wp-content/uploads/2019/12/app6-icon3.png"
                                className="scale-with-grid"
                                alt="app6-icon3"
                            />
                            <div className="cardt">
                                <h2 className='card-title'><b>Micro-Habits</b></h2>
                                <p className='card-text'>Build sustainable habits step by step.
                                    .</p>
                            </div>
                        </div>
                        <div className="card1">
                            <img
                                src="https://ajanm.ai/wp-content/uploads/2019/12/app6-icon6.png"
                                className="scale-with-grid"
                                alt="app6-icon6"
                            />
                            <div className="cardt">
                                <h2 className='card-title'><b>Tailored Wellness</b></h2>
                                <p className='card-text'>Plans crafted to match your health needs.</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img
                                src="https://ajanm.ai/wp-content/uploads/2019/12/app6-icon1.png"
                                className="scale-with-grid w-20 h-20"
                                alt="app6-icon1"
                            />
                            <div className="cardt">
                                <h2 className='card-title'><b>Time Efficient
                                </b></h2>
                                <p className='card-text'>Just 30 minutes a day to transform your life.</p>
                            </div>

                        </div>
                        <div className="card1">
                            <img
                                src="https://ajanm.ai/wp-content/uploads/2019/12/app6-icon5.png"
                                className="scale-with-grid"
                                alt="app6-icon5"
                            />
                            <div className="cardt">
                                <h2 className='card-title'><b>Proven Results</b></h2>
                                <p className='card-text'>Address conditions like diabetes, hypertension, and PCOS..</p>
                            </div>
                        </div>

                        <div className="card1">
                            <img
                                src="https://ajanm.ai/wp-content/uploads/2019/12/app6-icon4.png"
                                className="scale-with-grid"
                                alt="proven-result"
                            />
                            <div className="cardt">
                                <h2 className='card-title'><b>Comprehensive Health Tracking</b></h2>
                                <p className='card-text'>Sync with health devices for a holistic view of your progress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="health-section">
                <div className="section-overlay"></div>

                <div className="section-wrapper">
                    <div className="heading-wrapper">
                        <h3 className="main-title">
                            Health Conditions We Target
                        </h3>

                        <h4 className="sub-title">
                            From chronic illnesses to lifestyle challenges, Ajanm addresses:
                        </h4>
                    </div>

                    <div className="health-grid">

                        <div className="health-card">
                            <div className="icon-wrapper">
                                <img src={heart} alt="" className="icon-img" />
                            </div>

                            <h4 className="card-title">Physical Health</h4>

                            <p className="card-desc">
                                Diabetes, hypertension, PCOD/PCOS, chronic pain
                            </p>
                        </div>

                        <div className="health-card">
                            <div className="icon-wrapper">
                                <img src={msg} alt="" className="icon-img" />
                            </div>

                            <h4 className="card-title">Mental Health</h4>

                            <p className="card-desc">
                                Anxiety, depression, stress
                            </p>
                        </div>

                        <div className="health-card">
                            <div className="icon-wrapper">
                                <img src={apple} alt="" className="icon-img" />
                            </div>

                            <h4 className="card-title">Lifestyle Concerns</h4>

                            <p className="card-desc">
                                Obesity, smoking, alcohol dependence.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Feature;