import { useState } from "react"

const Footer = ({ handleList, list}) => {
    const [inputValue, setInputValue] = useState('')
    const addItem = (event) => {
        handleList([...list, inputValue])
        setInputValue('')

    }
    return (
        <div className="footer-section">
            <input value={inputValue} type="text" name="task-text" id="" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addItem}>Enter</button>
        </div>
    )
}
export default Footer;