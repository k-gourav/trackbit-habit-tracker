import '../App.css'
import calendar from '../assets/calendar.png'
import goal from '../assets/target.png'
import Footer from '../components/Footer'
import { useState } from 'react'
const TaskList = ({ description }) => {
    console.log(description)
    return (
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
}

const Body = () => {


    const [list, setList] = useState([])
    console.log(list)
    return (<>
        <main className='main-container'>
            <div className='day-status'>
                <h2>Today's Goals</h2>
                <img className='calendar-icon' src={calendar} alt="calendar-image" />
            </div>

            <div className="task-container">
                { list.map((element) => <TaskList key="1" description={element} imgLink={goal}  /> ) }


            </div>
        </main>
        <Footer handleList={setList} list={list} />

    </>
    )
}


export default Body;