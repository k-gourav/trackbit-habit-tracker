import { useState } from "react";

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
            <button onClick={addItem}>Enter</button>
        </div>
    );
};

export default Footer;