/* eslint-disable react/prop-types */
import normalLogo from "../assets/NormalType.svg";
function TypeCard() {
    return (
        <div className="size-10">
            <button type="button">
                <img src={normalLogo} alt="" />
            </button>
        </div>
    )
}

export default TypeCard