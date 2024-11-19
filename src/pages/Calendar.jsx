import CalendarApp from '../component/CalendarApp'
import '../component/CalendarApp.css'
import UclaNavbar from '../component/UclaNavbar';

const App = () => {
  return (
    <div className="container">
      <UclaNavbar />
      <CalendarApp />
    </div>
  )
}

export default App
