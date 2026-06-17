import React from 'react'
import "./Blogs.css"
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import img from "../assets/blogs-image/spine.png"
import hormon from "../assets/blogs-image/hormon.png"
import sleep from "../assets/blogs-image/sleep.png";
import life from "../assets/blogs-image/life.png";
import reverse from "../assets/blogs-image/reverse.png";


const matter = [
    {
        id: 1,
        image: hormon,
        para1: 'Hormonal disorders affect countless individuals globally, manifesting as thyroid issues, diabetes, adrenal fatigue, and reproductive conditions like polycystic ovary syndrome (PCOS) and endometriosis. These imbalances can disrupt daily life, causing symptoms from fatigue and weight fluctuation to severe mood swings and infertility. Traditional treatments often include medication or invasive procedures, but yoga offers a natural, gentle alternative to help regulate and balance hormones.',
        title1: 'Understanding Hormonal Disorders',
        para2: "Hormones are the body's chemical messengers, influencing nearly every physiological process, including growth, metabolism, fertility, and mood. When hormones are out of balance, it can lead to significant health issues. Hormonal disorders can stem from various causes, including stress, poor diet, environmental toxins, and genetics.",
        title2: 'How Yoga Helps in Hormonal Regulation',
        subheading1: '1. Reduces Stress: ',
        subpara1: "Many hormonal disorders are exacerbated by stress, particularly those related to the adrenal glands and reproductive system. Yoga's calming practices, like meditation and pranayama (breath work), reduce cortisol levels, which may help restore hormone balance.",
        subheading2: '2. Stimulates Gland Function: ',
        subpara2: "Specific yoga poses can stimulate the glands responsible for hormone production. For instance, poses that involve the neck, such as Shoulder Stand and Fish Pose, can help regulate thyroid hormones, while twists and forward bends can improve liver function and aid detoxification.",
        subheading3: '3. Improves Metabolism: ',
        subpara3: "Yoga helps in boosting the metabolism, which is crucial for balancing hormones. Active forms of yoga increase heart rate and improve blood circulation, aiding in the efficient use of insulin and glucose.",
        subheading4: '4. Supports Reproductive Health: ',
        subpara4: "Poses like Cobbler’s Pose and Camel Pose increase blood flow to the pelvic region, supporting better reproductive health and balancing sex hormones.",
        subheading5: '5. Encourages Healthy Lifestyle Choices: ',
        subpara5: "Regular yoga practice fosters mindfulness, which can lead to healthier eating and lifestyle choices that support hormonal balance.",
        title3: "Yoga Practices for Hormonal Health",
        subh1: "- Asanas: ",
        subp1: "Incorporate poses that target glandular function and support hormone balance. For thyroid health, try incorporating poses like the Plow Pose and Bridge Pose. For adrenal health, focus on restorative poses like Child’s Pose and Legs-Up-The-Wall.",
        subh2: "- Pranayama: ",
        subp2: " Breathing exercises can profoundly impact the endocrine system. Techniques like Bhramari Pranayama (Bee Breath) and Kapalabhati (Skull Shining Breath) can help reset the body's stress response and support overall endocrine function.",
        subh3: "- Meditation and Relaxation: ",
        subp3: "Daily meditation can help manage stress hormones like cortisol and adrenaline. Yoga Nidra, a guided relaxation, can be particularly beneficial for deep rest and hormonal balance.",
        title4: "Integrating Yoga into Daily Life",
        para3: "To effectively manage hormonal disorders with yoga, consistency is key. A daily practice that includes a mix of poses, breathing exercises, and relaxation or meditation can provide the best results. It’s also important to tune into the body's responses and adjust the practice as needed, possibly with the guidance of a healthcare provider or a yoga therapist specializing in hormonal health.",
        conclusion: "Conclusion",
        conp: "Yoga provides a holistic approach to managing hormonal disorders, offering physical, mental, and emotional benefits. By incorporating specific asanas, breathing techniques, and meditative practices into your daily routine, you can naturally help restore hormonal balance and improve your overall well-being."

    },
    {
        id: 2,
        image: sleep,
        para1: 'Sleep disorders, which include issues like insomnia, sleep apnea, restless leg syndrome, and irregular sleep-wake cycles, affect millions of people worldwide. These issues can significantly impact overall health, reducing quality of life and increasing the risk of various health problems. Yoga, with its holistic approach to health and well-being, offers a gentle yet effective means to improve sleep quality and resolve sleep disturbances.',
        title1: 'Understanding Sleep Disorders',
        para2: "Sleep is critical for physical health and effective brain function. However, many people struggle with sleep for various reasons including stress, anxiety, physical health issues, and environmental factors. Poor sleep can lead to a weakened immune system, weight gain, depression, and increased anxiety, making it a vital aspect of health to address.",
        title2: 'How Yoga Can Help',
        subheading1: '1.Reduces Stress and Anxiety: ',
        subpara1: "Yoga helps to alleviate stress and anxiety, which are common causes of sleep disorders. Through mindful breathing and relaxation techniques, yoga can calm the nervous system, making it easier to fall asleep and stay asleep.",
        subheading2: '2.Improves Physical Health: ',
        subpara2: "Various yoga poses can help alleviate physical pain that might be interfering with sleep. For example, gentle stretching can reduce muscle tension and discomfort, which can prevent restful sleep.",
        subheading3: '3.Balances the Nervous System: ',
        subpara3: "Yoga promotes balance in the nervous system through its influence on the parasympathetic nervous system (the rest and digest system), which helps the body relax and prepare for sleep.",
        subheading4: '4.Encourages Healthy Routines: ',
        subpara4: " Practicing yoga can help create a routine around bedtime, signaling to the body that it's time to wind down and prepare for sleep. Incorporating yoga into your evening routine can set the stage for a calm and restful night.",
        title3: "Yoga Practices for Better Sleep",
        subh1: "- Gentle Asanas: ",
        subp1: "Include gentle yoga poses in the evening to relax the body. Poses like Forward Bend, Cat-Cow, and Child’s Pose can be particularly effective.",
        subh2: "- Pranayama: ",
        subp2: "Breathing exercises, or Pranayama, such as the 4-7-8 breathing technique or Anuloma Viloma (alternate nostril breathing), are excellent for calming the mind and preparing the body for sleep.",
        subh3: "- Yoga Nidra: ",
        subp3: "Known as yogic sleep, this guided meditation can be performed before bed to deeply relax each part of the body and calm the mind, enhancing sleep quality.",
        subh4: "- Meditation: ",
        subp4: "Meditation helps to quiet the mind and can be a powerful tool for combating insomnia. Even a few minutes can make a significant difference.",
        title4: "Integrating Yoga into Your Nightly Routine",
        para3: "To benefit from yoga for sleep disorders, consistency is key. A simple, regular routine can be more effective than a sporadic but intense practice. Start with as little as 10 minutes near bedtime and gradually increase as needed. The goal is to relax the body and mind to prepare for sleep, so focus on gentle and soothing practices.",
        conclusion: "Conclusion",
        conp: "Yoga offers a holistic and accessible approach to combating sleep disorders. By integrating yoga practices into your evening routine, you can improve your sleep quality and, by extension, your overall health and well-being. Embrace yoga as a peaceful journey to better nights and brighter days."
    },
    {
        id: 3,
        image: life,
        para1: "In the modern world, where the pace of life is continually accelerating, lifestyle disorders such as stress, obesity, diabetes, and cardiovascular diseases have become increasingly common. These conditions are primarily influenced by daily habits and choices, particularly physical inactivity, poor diet, stress, and improper sleep patterns. However, yoga, an ancient practice rooted in Indian philosophy, offers a holistic approach to combating these disorders by promoting a balanced lifestyle and improving overall health.",
        title1: 'Understanding Lifestyle Disorders',
        para2: "Lifestyle disorders are ailments that stem from habitual behaviors which negatively impact our health. These include:",
        title2: 'How Yoga Addresses Lifestyle Disorders',
        subheading1: '1.Stress Reduction: ',
        subpara1: "Yoga incorporates various relaxation techniques, including deep breathing exercises and meditation, which can significantly lower stress levels. Techniques like Pranayama (breathing exercises) calm the mind and reduce the physiological effects of stress by slowing down the heart rate and lowering blood pressure.",
        subheading2: '2.Weight Management: ',
        subpara2: " Yoga can be an effective tool for weight loss and management. Regular practice of dynamic yoga styles, such as Vinyasa or Ashtanga, burns calories, while even gentler forms improve digestion and metabolism which aid in weight control.",
        subheading3: '3.Improved Sleep Patterns: ',
        subpara3: "Yoga helps to alleviate insomnia by relaxing the nervous system. Practices like Yoga Nidra (yogic sleep) promote deep rest and improve the quality of sleep.",
        subheading4: '4.Enhanced Physical Fitness: ',
        subpara4: "Yoga improves flexibility, strengthens muscles, and boosts stamina. This not only helps in reducing the risk of injuries but also alleviates chronic pain conditions associated with a sedentary lifestyle.",
        subheading5: '5.Promotion of Mindfulness: ',
        subpara5: "The meditative aspect of yoga encourages mindfulness, which can lead to better choices in terms of diet and lifestyle, fostering overall health.",
        title3: "Implementing Yoga in Daily Life",
        subh1: "- Consistency is Key: ",
        subp1: "Make yoga a regular part of your daily schedule. Even 15-20 minutes can be beneficial.",
        subh2: "- Choose the Right Style: ",
        subp2: "Different styles of yoga cater to different needs—Hatha yoga is great for beginners due to its slower pace, while Kundalini yoga focuses more on spiritual and physical energy.",
        subh3: "- Mindful Eating: ",
        subp3: "Combine your yoga practice with mindful eating to enhance digestive health and manage weight.",
        title4: "Meditation and Breathing: ",
        para3: "Dedicate time for meditation and pranayama to combat stress and enhance mental clarity.",
        conclusion: "Conclusion",
        conp: "Yoga offers a viable solution to the challenges posed by lifestyle disorders, addressing not just the physical symptoms but also the mental and emotional sides of these conditions. By adopting yoga as a holistic treatment, individuals can lead healthier lives, free from the ailments brought on by modern lifestyle choices."
    },
    {
        id: 4,
        image: reverse,
        para1: 'Aging is an inevitable process, but how we age is profoundly influenced by our lifestyle choices. While various products and procedures promise the secret to eternal youth, yoga offers a holistic and sustainable approach to not only slowing down the aging process but also reversing some of its effects. Through a combination of physical postures, breathing exercises, and meditation, yoga nurtures the body, mind, and spirit, offering a blueprint for aging gracefully and healthily.',
        title1: 'The Science Behind Yoga and Anti-Aging',
        subheading1: '1.Cellular Health: ',
        subpara1: "Yoga helps in reducing oxidative stress in the body, which is a major contributor to aging at the cellular level. Practices like deep breathing and meditation enhance the body’s ability to detoxify, promoting cell regeneration and longevity.",
        subheading2: '2.Hormonal Balance: ',
        subpara2: "Yoga stimulates the glands responsible for hormone production, such as the thyroid and adrenals, balancing hormones that play a critical role in aging, like cortisol and thyroid hormones. Regular practice helps maintain a youthful endocrine system, which can improve skin elasticity, decrease the appearance of wrinkles, and boost vitality.",
        subheading3: '3.Flexibility and Mobility: ',
        subpara3: "As we age, our joints and muscles tend to become stiffer and less flexible, leading to decreased mobility and more pain. Yoga’s asanas (poses) improve flexibility, strengthen muscles, and lubricate joints, reversing the stiffness and immobility associated with aging.",
        subheading4: '4.Mental Acuity: ',
        subpara4: "Yoga involves concentration and mental exercises that can help sharpen the mind and improve cognitive function. Meditation and mindfulness practices enhance mental clarity, memory, and focus, which are often affected by aging.",
        subheading5: '5.Stress Reduction: ',
        subpara5: "Chronic stress accelerates the aging process by affecting physical and mental health. Yoga’s emphasis on relaxation and meditation not only reduces stress but also lowers blood pressure and has a calming effect on the entire body, promoting a youthful state of physical health and mental well-being.",
        title3: "Incorporating Yoga into Your Anti-Aging Regimen",
        subh1: "- Asanas: ",
        subp1: "Focus on poses that promote flexibility, strength, and balance. Poses like the Tree Pose, Warrior series, and Sun Salutations are excellent for building strength and flexibility. Inversions such as the Headstand or Shoulderstand are particularly beneficial for improving circulation and detoxifying the body.",
        subh2: "- Pranayama (Breath Control): ",
        subp2: "Include breathing exercises like Kapalabhati (Skull Shining Breath) and Anulom Vilom (Alternate Nostril Breathing) to improve respiratory capacity and energize the body.",
        subh3: "- Meditation: ",
        subp3: "Spend time in meditation to reduce stress and enhance mental clarity. Even a few minutes daily can have profound anti-aging effects.",
        title4: "Diet and Lifestyle: ",
        para3: "Complement your yoga practice with a balanced diet rich in antioxidants and hydrating fluids. Maintain a healthy lifestyle that includes sufficient sleep and minimal stress.",
        conclusion: "Conclusion",
        conp: "Yoga offers more than just physical benefits; it is a lifestyle choice that can significantly counteract the aging process. By integrating yoga into your daily life, you can maintain vitality, reduce the risk of age-related diseases, and enjoy a higher quality of life as you age. Embrace yoga as your fountain of youth—a tool to keep your body young, your mind sharp, and your spirit calm."
    },
    {
        id: 5,
        image: img,
        para1: 'The human spine is a crucial yet often overlooked component of overall health and well-being. Acting as the main structural support for the body, it protects the spinal cord, supports the head, and provides flexibility and mobility. Unfortunately, due to modern lifestyle habits such as prolonged sitting and poor posture, spinal health issues are increasingly common. This is where yoga, an ancient practice with modern relevance, steps in as an effective tool to promote spine health and prevent related disorders.',
        title1: 'Understanding Spine Health',
        para2: "The spine is a complex structure made up of bones, muscles, ligaments, and nerves. Its health is essential for performing everyday activities painlessly and efficiently. When the spine is misaligned or under stress, it can lead to a host of issues, including back pain, neck pain, and reduced mobility. Over time, these conditions can significantly diminish quality of life and increase dependency on medications or surgeries.",
        title2: 'The Role of Yoga in Promoting Spine Health',
        subheading1: '1. Improves Flexibility and Balance: ',
        subpara1: "Many yoga poses, or asanas, are designed to increase the flexibility of the spine. Poses like the Cobra, Cat-Cow, and Child’s Pose gently stretch the spinal muscles, improving elasticity and range of motion. This enhanced flexibility helps counteract the stiffness associated with sedentary lifestyles.",
        subheading2: '2.Strengthens Back Muscles: ',
        subpara2: "Yoga includes a variety of postures that strengthen the muscles surrounding the spine. Stronger muscles support the spine more effectively and reduce the likelihood of injuries and chronic pain. Postures such as Plank, Locust Pose, and Bridge Pose focus on building strength in the lower back, upper back, and core.",
        subheading3: '3.Promotes Proper Alignment: ',
        subpara3: "Regular practice of yoga helps in aligning the spine correctly, thus promoting better posture. This alignment reduces unnecessary strain on the spine by distributing body weight evenly. Asanas like Mountain Pose and Warrior Pose teach the body to align itself naturally and correctly.",
        subheading4: '4.Encourages Mindfulness and Stress Reduction: ',
        subpara4: "Stress is a common contributor to spinal problems like muscle tension and spasms. Yoga’s meditative practices encourage mindfulness, which reduces stress and its physical impacts on the spine. Through controlled breathing exercises (pranayama), yoga helps in relaxing the mind and body, allowing the spine to remain supple and less prone to injury.",
        subheading5: '5.Increases Awareness of Body Mechanics: ',
        subpara5: "Yoga enhances body awareness, helping individuals recognize the habits that may be detrimental to their spine health, such as poor posture or incorrect lifting techniques. This increased awareness can lead to better habits in daily activities, reducing the risk of spine-related problems.",
        title3: "Implementing Yoga into Daily Life",
        para3: "Incorporating yoga into your daily routine can be simple. Start with a few basic poses, and gradually include more as you become comfortable. It's important to listen to your body and avoid any movements that cause pain. For those new to yoga, joining a class can be very beneficial, as a knowledgeable instructor can provide guidance and modifications to suit your individual needs.",
        conp: "In conclusion, maintaining spinal health is essential for a vibrant and active life. Yoga offers a powerful way to support the spine through its combination of stretching, strengthening, and stress-reduction techniques. By making yoga a regular part of your lifestyle, you can enhance your spine health and overall well-being."
    },
]

const Blogs_desc = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blogId = Number(id);
    const blog = matter.find((m) => m.id === blogId);

    // If no matching blog, navigate back to blogs list
    if (!blog) {
        React.useEffect(() => {
            navigate('/blogs');
        }, [navigate]);
        return null;
    }

    // next and previous button
    const previousblog = () => {
    let prevId = blogId - 1;

    // Go to last blog if currently on first blog
    if (prevId < 1) {
        prevId = matter.length;
    }

    navigate(`/blogs_desc/${prevId}`);
    window.scrollTo(0, 0);
};

const nextblog = () => {
    let nextId = blogId + 1;

    // Go to first blog if currently on last blog
    if (nextId > matter.length) {
        nextId = 1;
    }

    navigate(`/blogs_desc/${nextId}`);
    window.scrollTo(0, 0);
};

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="blog_content">
                    <div className="img" key={blog.id}>
                        <img className="description_image w-full" src={blog.image} alt={blog.title1} />

                        <p className='para'>{blog.para1}</p>
                        <h3 className='head'>{blog.title1}</h3>
                        <p className='para'>{blog.para2}</p>
                        <h3 className='head'>{blog.title2}</h3>
                        <p className='para'><b>{blog.subheading1}</b>{blog.subpara1}</p>
                        <p className='para'><b>{blog.subheading2}</b>{blog.subpara2}</p>
                        <p className='para'><b>{blog.subheading3}</b>{blog.subpara3}</p>
                        <p className='para'><b>{blog.subheading4}</b>{blog.subpara4}</p>
                        <p className='para'><b>{blog.subheading5}</b>{blog.subpara5}</p>
                        <h3 className='head'>{blog.title3}</h3>
                        <p className='para'><b>{blog.subh1}</b>{blog.subp1}</p>
                        <p className='para'><b>{blog.subh2}</b>{blog.subp2}</p>
                        <p className='para'><b>{blog.subh3}</b>{blog.subp3}</p>
                        <p className='para'><b>{blog.subh4}</b>{blog.subp4}</p>
                        <h3 className='head'>{blog.title4}</h3>
                        <p className='para'>{blog.para3}</p>
                        <h3 className='head'>{blog.conclusion}</h3>
                        <p className='para'>{blog.conp}</p>
                    </div>
                </div>

                <section className="comment-section">
                    <div className="comment-card">
                        <h2 className="comment-title">Leave a Reply</h2>

                        <p className="comment-note">
                            Your email address will not be published. Required fields are marked
                            with <span>*</span>
                        </p>

                        <div className="form-group">
                            <label>Comment *</label>
                            <textarea
                                rows="8"
                                placeholder="Enter your comment..."
                            ></textarea>
                        </div>

                        <div className="input-grid">
                            <div className="form-group">
                                <label>Name *</label>
                                <input type="text" placeholder="Your full name" />
                            </div>

                            <div className="form-group">
                                <label>Email *</label>
                                <input type="email" placeholder="Your email address" />
                            </div>

                            <div className="form-group">
                                <label>Website</label>
                                <input type="url" placeholder="https://yourwebsite.com" />
                            </div>
                        </div>

                        <div className="checkbox-wrapper">
                            <input type="checkbox" id="saveInfo" />
                            <label htmlFor="saveInfo">
                                Save my name, email, and website in this browser for the next time
                                I comment.
                            </label>
                        </div>

                        <div className="bottom-section">
                            <div className="captcha-box">
                                <h4>Math Captcha</h4>
                                <div className="captcha-row">
                                    <input type="text" />
                                    <span>× 3 = 18</span>
                                </div>
                                <p>Solve the math problem above</p>
                            </div>

                            <button className="btn">
                                Post Comment
                            </button>
                        </div>
                    </div>
                </section>

            </div>
            <div className="arrow arrow-left" onClick={previousblog}>
                <BsArrowLeftCircle className="text-black text-2xl" />
            </div>

            <div className="arrow arrow-right"  onClick={nextblog}>
                <BsArrowRightCircle className="text-black text-2xl"/>
            </div>

            <Footer />
        </>
    )
}

export default Blogs_desc
