import React from 'react'
import "./Blogs.css"
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const matter = [
    {
        id: 1,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/harmonal-disorder.jpg',
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
        title3:"Yoga Practices for Hormonal Health",
        subh1:"- Asanas: ",
        subp1:"Incorporate poses that target glandular function and support hormone balance. For thyroid health, try incorporating poses like the Plow Pose and Bridge Pose. For adrenal health, focus on restorative poses like Child’s Pose and Legs-Up-The-Wall.",
        subh2:"- Pranayama: ",
        subp2:" Breathing exercises can profoundly impact the endocrine system. Techniques like Bhramari Pranayama (Bee Breath) and Kapalabhati (Skull Shining Breath) can help reset the body's stress response and support overall endocrine function.",
        subh3:"- Meditation and Relaxation: ",
        subp3:"Daily meditation can help manage stress hormones like cortisol and adrenaline. Yoga Nidra, a guided relaxation, can be particularly beneficial for deep rest and hormonal balance.",
        title4:"Integrating Yoga into Daily Life",
        para3:"To effectively manage hormonal disorders with yoga, consistency is key. A daily practice that includes a mix of poses, breathing exercises, and relaxation or meditation can provide the best results. It’s also important to tune into the body's responses and adjust the practice as needed, possibly with the guidance of a healthcare provider or a yoga therapist specializing in hormonal health.",
        conclusion:"Conclusion",
        conp:"Yoga provides a holistic approach to managing hormonal disorders, offering physical, mental, and emotional benefits. By incorporating specific asanas, breathing techniques, and meditative practices into your daily routine, you can naturally help restore hormonal balance and improve your overall well-being."

    },
    {
        id: 2,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/sleep.jpg',
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
        title3:"Yoga Practices for Better Sleep",
        subh1:"-Gentle Asanas: ",
        subp1:"Include gentle yoga poses in the evening to relax the body. Poses like Forward Bend, Cat-Cow, and Child’s Pose can be particularly effective.",
        subh2:"-Pranayama: ",
        subp2:"Breathing exercises, or Pranayama, such as the 4-7-8 breathing technique or Anuloma Viloma (alternate nostril breathing), are excellent for calming the mind and preparing the body for sleep.",
        subh3:"-Yoga Nidra: ",
        subp3:"Known as yogic sleep, this guided meditation can be performed before bed to deeply relax each part of the body and calm the mind, enhancing sleep quality.",
        subh4:"-Meditation: ",
        subp4:"Meditation helps to quiet the mind and can be a powerful tool for combating insomnia. Even a few minutes can make a significant difference.",
        title4:"Integrating Yoga into Your Nightly Routine",
        para3:"To benefit from yoga for sleep disorders, consistency is key. A simple, regular routine can be more effective than a sporadic but intense practice. Start with as little as 10 minutes near bedtime and gradually increase as needed. The goal is to relax the body and mind to prepare for sleep, so focus on gentle and soothing practices.",
        conclusion:"Conclusion",
        conp:"Yoga offers a holistic and accessible approach to combating sleep disorders. By integrating yoga practices into your evening routine, you can improve your sleep quality and, by extension, your overall health and well-being. Embrace yoga as a peaceful journey to better nights and brighter days."
    },
    {
        id: 3,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/sleep.jpg',
        para1: '',
        title1: '',
        para2: "",
        title2: '',
        subheading1: '1.',
        subpara1: ".",
        subheading2: '2. ',
        subpara2: " ",
        subheading3: '3.  ',
        subpara3: "",
        subheading4: '4.',
        subpara4: "",
        subheading5: '5.',
        subpara5: "",
        title3:"",
        subh1:"- ",
        subp1:"",
        subh2:"-",
        subp2:" ",
        subh3:"-",
        subp3:"",
        title4:"",
        para3:"",
        conclusion:"Conclusion",
        conp:""
    },
    {
        id: 1,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/sleep.jpg',
        para1: '',
        title1: '',
        para2: "",
        title2: '',
        subheading1: '1.',
        subpara1: ".",
        subheading2: '2. ',
        subpara2: " ",
        subheading3: '3.  ',
        subpara3: "",
        subheading4: '4.',
        subpara4: "",
        subheading5: '5.',
        subpara5: "",
        title3:"",
        subh1:"- ",
        subp1:"",
        subh2:"-",
        subp2:" ",
        subh3:"-",
        subp3:"",
        title4:"",
        para3:"",
        conclusion:"Conclusion",
        conp:""
    },
    {
        id: 1,
        image: 'https://ajanm.ai/wp-content/uploads/2024/05/sleep.jpg',
        para1: '',
        title1: '',
        para2: "",
        title2: '',
        subheading1: '1.',
        subpara1: ".",
        subheading2: '2. ',
        subpara2: " ",
        subheading3: '3.  ',
        subpara3: "",
        subheading4: '4.',
        subpara4: "",
        subheading5: '5.',
        subpara5: "",
        title3:"",
        subh1:"- ",
        subp1:"",
        subh2:"-",
        subp2:" ",
        subh3:"-",
        subp3:"",
        title4:"",
        para3:"",
        conclusion:"Conclusion",
        conp:""
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
            </div>

            <Footer />
        </>
    )
}

export default Blogs_desc
