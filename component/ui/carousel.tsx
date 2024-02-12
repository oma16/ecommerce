'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './carouselCom.css'

interface Props {
  children: React.ReactNode
  className?: string
}

export const CarouselDisplay = ({ children, className }: Props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      // slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 1,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  return (
    <div className=' mt-[70px]'>
      <Carousel
        responsive={responsive}
        className={className}
        arrows={false}
        autoPlaySpeed={5000}
        autoPlay={true}
        rewind={true}
        rewindWithAnimation={true}
        focusOnSelect={true}
        itemClass='items'
        renderDotsOutside={true}
      >
        {children}
      </Carousel>
    </div>
  )
}
