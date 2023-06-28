import Arrow from "./Arrow";

export default function Carousel() {
    let img_arrow_left = '/circle_arrow_left.png'
    let img_arrow_right = '/circle_arrow_right.png'
    return (
        <div className='mt-[270px] flex justify-center border-0 border-red-700'>
            <div className='w-4/5 border-dotted border-0 border-red-700 h-[306px] mt-3'>
                <div className='w-full flex justify-between items-center border-dotted border-0 border-red-700 h-[265px] mt-[40px] bg-orange-600 px-5'>
                    <Arrow icon={img_arrow_left} />
                    <img className='w-[263px] h-[291px] ml-[-120px]' src='/woman.png' />
                    <img className='w-[179px] h-[284px] ml-[-100px] mt-[-60px]' src='/onepiece.png' />
                    <div className='w-[356px]'>
                        <h2 className='font-bold text-white font-sans text-2xl'>Shonen</h2>
                        <p className='text-white font-sans text-sm'>
                            Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.
                        </p>
                    </div>
                    <Arrow icon={img_arrow_right} />
                </div>
            </div>
        </div>
    )
}
