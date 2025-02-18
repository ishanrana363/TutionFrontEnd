import Banner from './Banner'
import Category from './Category'
import Count from './Count'
import Find from './Find';
import Slider from './Slider'
import TestimonialCarousel from './TestimonialCarousel';
import WhyChooseUs from './WhyChooseUs';

const HomePages = () => {
  return (
    <div>
      <Banner></Banner>
      <Count></Count>
      <Category></Category>
      <div className='   ' >
        <Slider></Slider>
      </div>
      <div>
        <WhyChooseUs/>
      </div>
      <div>
        <Find></Find>
      </div><div>
        <TestimonialCarousel></TestimonialCarousel>
      </div>
    </div>
  )
}

export default HomePages
