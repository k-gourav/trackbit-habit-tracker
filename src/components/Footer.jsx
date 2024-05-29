const Footer = ({ handleList, list }) => {
    const addItem = (event) => {
        handleList([event.target.value])
        console.log([event.target.value])

    }
    return (
        <div className="footer-section">
            <input type="text" name="task-text" id="" />
            <button onClick={addItem}>Enter</button>
        </div>
    )
}
export default Footer;