import { React, useState } from 'react'
import Modal from '../../components/modal/Modal'
import './testimonials.css'
import PYTHONCERT from '../../assets/cert_it_auto_python.png'
import SUPPORTCERT from '../../assets/cert_it_support.png'
import PYTHONBADGE from '../../assets/cert_badge.png'
import SUPPORTBADGE from '../../assets/it_sup_badge.png'
import AUTOPYTHON from '../../assets/auto_real_task_python.png'
import BYTESNET from '../../assets/bytes_bits_comp_net.png'
import CONIFGCLOUD from '../../assets/config_manage_cloud.png'
import CRASHPYTHON from '../../assets/crash_course_python.png'
import ICPC from '../../assets/icpc_caribbean_finals.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const certificates = [
  {
    id: 1,
    name: 'IT Automation with Python',
    description: 'A brief description',
    image: PYTHONCERT

  },
  {
    id: 2,
    name: 'Google IT Support',
    description: 'A brief description',
    image: SUPPORTCERT
  },
  {
    id: 3,
    name: 'It Automation with Python Badge',
    description: 'A brief description',
    image: PYTHONBADGE
  },
  {
    id: 4,
    name: 'Google IT Support Badge',
    description: 'A brief description',
    image: SUPPORTBADGE
  },
  {
    id: 5,
    name: 'Automate Real world Task with Python',
    description: 'A brief description',
    image: AUTOPYTHON
  },
  {
    id: 6,
    name: 'The bits and bytes of Computer Networking',
    description: 'A brief description',
    image: BYTESNET
  },
  {
    id: 7,
    name: 'Configure and Manage Cloud',
    description: 'A brief description',
    image: CONIFGCLOUD
  },
  {
    id: 8,
    name: 'Crash Course in Python',
    description: 'A brief description',
    image: CRASHPYTHON
  },
  {
    id: 9,
    name: 'Finals of ICPC Caribbean',
    description: 'A brief description',
    image: ICPC
  }
]

const Testimonials = () => {
  const [img, setImg] = useState(certificates[0].image);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (e) => {
    setImg(e);
    setIsOpen(true);
  }
  return (
    <section id='certificates'>
      <h2>Certificates</h2>
      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={true}
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        {
          certificates.map(certificate => (
            <SwiperSlide key={certificate.id} className="testimonial">
              <div className='certificate__image' onClick={() => handleOnClick(certificate.image)} >
                <img className='mycert' src={certificate.image} alt={certificate.name} />

              </div>
              
              <h5 className='cert__name'>{certificate.name}</h5>
              <small className='cert__desc'>{certificate.description}</small>
            </SwiperSlide>
          ))
        }

      </Swiper>
      {isOpen && <Modal setIsOpen={setIsOpen} imgToDisplay={img} />}
    </section>
    
  )
}

export default Testimonials