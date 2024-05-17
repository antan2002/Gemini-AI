import './Theme.css'
import { MdDarkMode } from "react-icons/md";
const Theme = ({ changeToggel }) => {

    return (
        <div>
            <button onClick={changeToggel}>Dark
                <MdDarkMode />
            </button>
        </div>
    )
}
export default Theme;