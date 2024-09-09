
import Banner from './Banner'
import HireMe from './HireMe'
import MyResult from './MyResult'
import Portfolio from './Portfolio'
import Service from './Service'
import WorkExperience from './WorkExperience'

const HomePage = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Service></Service>
      <WorkExperience></WorkExperience>
      <HireMe></HireMe>
      <Portfolio></Portfolio>
      <MyResult></MyResult>
       
    </div>
  )
}

export default HomePage