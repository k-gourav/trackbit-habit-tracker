import '../App.css'
import calendar from '../assets/calendar.png'
import goal from '../assets/target.png'

const TaskList = ({description}) => (
    <div className="task-list">
        <div className="task-descript">
        <img className='task-logo' src={goal} alt="task-image" />
        <p className="task-descript">{description}</p>
        </div>
        {/* <div className='checkbox-custom'><input type="checkbox" name="task-checker"/></div> */}
        <div class="checkbox-wrapper-13">
        <input id="c1-13" type="checkbox" />
       </div>
       </div>
)

const Body = () => (
    <main className='main-container'>
    <div className='day-status'>
        <h2>Today's Goals</h2>
        <img className='calendar-icon' src={calendar} alt="calendar-image" />
    </div>
    
    <div className="task-container">
        <TaskList key="1" description="Complete CSS" imgLink={goal} />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />
        <TaskList />

    </div>
    
    </main>
)

export default Body;