import Banner from './Banner'
import Category from './Category'
import Count from './Count'
import Slider from './Slider'

const HomePages = () => {
  return (
    <div>
      <Banner></Banner>
      <Count></Count>
      <Category></Category>
      <div className='   ' >
        <Slider></Slider>
      </div>
    </div>
  )
}

export default HomePages
