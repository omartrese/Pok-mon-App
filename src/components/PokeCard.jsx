import pikachu from '../assets/pikachuplaceholder.png'

function PokeCard() {
  return (
    <div className="w-36 h-36 bg-white m-2 rounded-xl">
        <span className='flex justify-center bg-yellow-400 rounded-se-xl rounded-ss-xl'>
            <img className='w-24 h-24 p-1' src={pikachu} alt="" />
        </span>
    </div>
  )
}

export default PokeCard