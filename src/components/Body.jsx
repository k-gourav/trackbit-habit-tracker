import '../App.css'
import calendar from '../assets/calendar.png'

const Body = () => (
    <div className='day-status'>
        <h2>Today</h2>
        <img className='calendar-icon' src={calendar} alt="calendar-image" />

    </div>
)

export default Body;