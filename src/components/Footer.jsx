import { useState } from "react";
import arrow from '../assets/arrow.png'

const Footer = ({ handleList, list }) => {
    const [inputValue, setInputValue] = useState('');
    const addItem = () => {
        if (inputValue.trim()) { 
            handleList([...list, inputValue]);
            setInputValue('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            addItem();
        }
    };
    return (
        <div className="footer-section">
            <input
                value={inputValue}
                type="text"
                name="task-text"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={addItem}><img className="arrow-icon" src={arrow} alt="arrow-icon" /></button>
        </div>
    );
};

export default Footer;