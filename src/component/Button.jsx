
function Button(props) {
  return (
   <button className='w-[161px] h-[52px] bg-[#181818] text-white rounded-[20px] cursor-pointer uppercase'>
    {props.description}
</button>
  )
}

export default Button