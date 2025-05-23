import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';

const Recommended = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
            fetch("books.json")
                .then(res => res.json())
                .then((data) => setBooks(data))
        }, [])
    
  return (
    <div className='py-16'>
      <h2 className='mb-6 text-2xl font-semibold'>Recommended for you </h2>
      
      <div>
        <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1180: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        books.length > 0 && books.slice(8, 18).map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
      </div>
    </div>
  )
}

export default Recommended
