

const Footer = () => {
  return (
    <div className='flex flex-col gap-7'>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-4'>
                <img src='' className='w-80 h-24'/>
                <p className='line-clamp-2 text-secondary'>we transform your unwanted items into cash effortlessly.</p>
            </div>
            <div className='flex flex-row gap-28'>
                <div className='flex flex-col'>
                    <a href="">Navigation</a>
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">FAQ</a>
                </div>
                <div className='flex flex-col'>
                    <a href="">Support Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Support Center</a>
                    <a href="">Privacy and Policy</a>
                </div>
                <div className='flex flex-col'>
                    <a href="">Partner</a>
                    <a href="">Our Partner</a>
                    <a href="">Community</a>
                    <a href="">Investor</a>
                </div>

            </div>
        </div>
        <div className='flex flex-row justify-between'>
            <p className='text-secondary'>© 2023 HandMeDown, All Rights Reserved</p>
            <div>
                {/* 3 socials */}
            </div>
        </div>

    </div>
  )
}

export default Footer