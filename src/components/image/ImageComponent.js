export default  function Image({alt , src}) {
    return (
        <>
            <img src={src} alt={alt} className='w-[40px] h-[40px]'/>
        </>
    )
}