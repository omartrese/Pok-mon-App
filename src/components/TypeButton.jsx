/* eslint-disable react/prop-types */
function TypeCard({Image, key}) {
    console.log(key);
    return (
        <div className=" flex size-12 justify-center items-center m-2 duration-150 hover:scale-110 active:scale-90">
            <button type="button" className="size-12">
                <img src={Image}/>
            </button>
        </div>
    )
}

export default TypeCard