import React,{useState,useRef} from 'react'
import ReactImageMagnify from 'react-image-magnify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductDetailsZoomSlider = () => {

    const images = [
        '/assets/images/1.jpg',
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
         '/assets/images/12.jpg',
          '/assets/images/13.jpg',
           '/assets/images/14.jpg',
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
     const [selectedIndex, setSelectedIndex] = useState(0);
     
     const swiperRef = useRef(null);

     const handleThumbnailClick = (index) => {
    setSelectedIndex(index);

    // Ensure clicked thumbnail is brought into visible viewport
    // if (swiperRef.current && swiperRef.current.slideTo) {
    //   const total = images.length;
    //   const visibleSlides = 4;

    //   if (index >= visibleSlides) {
    //     // Show last 4 thumbnails (e.g. slide to index - 3)
    //     swiperRef.current.slideTo(index - (visibleSlides - 1));
    //   } else {
    //     swiperRef.current.slideTo(0); // reset to beginning if within first 4
    //   }
    // }

     const swiper = swiperRef.current;
    // if (swiper && swiper.slideToLoop) {
    //   // slideToLoop ensures correct index when using loop
    //   swiper.slideToLoop(index);
    // }
     //const swiper = swiperRef.current;
    if (swiper && swiper.slideToLoop) {
      // Force clicked thumbnail to appear at far left
      swiper.slideToLoop(index - 1 >= 0 ? index - 1 : images.length - 1);
    }
  };

    return (
        <>
            <div style={{ maxWidth: 500, margin: 'auto' }}>
                <div style={{ border: '1px solid #eee', marginBottom: '10px' }}>
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Product Image',
                                isFluidWidth: true,
                                src: images[selectedIndex],
                            },
                            largeImage: {
                                src: images[selectedIndex],
                                width: 1200,
                                height: 1200,
                            },
                            enlargedImagePosition: 'over', // zoom inside the image box
                            isHintEnabled: true,
                            hintTextMouse: 'Hover to zoom',
                            imageClassName: 'product-main-image',
                        }}
                    />
                </div>

                <Swiper spaceBetween={10} 
                slidesPerView={4}
                navigation
                loop={true}
                modules={[Navigation]}
                 className="hide-nav"
                onSwiper={(swiper) => (swiperRef.current = swiper)}>
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={`Thumbnail ${index}`}
                                onClick={() => handleThumbnailClick(index)}
                                style={{
                                    cursor: 'pointer',
                                     width: '100%',
                                     height: 80,
                                    objectFit: 'cover',
                                    border: selectedIndex === index ? '2px solid #000' : '1px solid #ccc',
                                    borderRadius: 6,
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default ProductDetailsZoomSlider;