export default function Index() {
    return (
        <main className=''>
            <div className='h-32 border-dotted border-0 border-white w-[710px] ml-28 mt-60'>
                <h1 className='text-white font-bold text-6xl'>For the love of manga</h1>
                <p className='text-white text-2xl'>Explore our varieties</p>
                <p className='text-white text-xs'>#MingaLove❤</p>
                <button className='text-orange-500 font-bold text-2xl bg-white w-60 h-14 rounded'>Sign in!</button>
            </div>
            <div className='mt-[270px] flex justify-center'>
                <div className='w-4/5 border-dotted border-0 border-red-700 h-[306px] mt-3'>
                    <div className='w-full flex justify-between items-center border-dotted border-0 border-red-700 h-[265px] mt-[40px] bg-orange-600 px-5'>
                        <img className='w-[26.5px] h-[26.5px]' src='/circle_arrow_left.png' />
                        <img className='w-[263px] h-[291px] ml-[-120px]' src='/woman.png' />
                        <img className='w-[179px] h-[284px] ml-[-100px] mt-[-60px]' src='/onepiece.png' />
                        <div className='w-[356px]'>
                            <h2 className='font-bold text-white font-sans text-2xl'>Shonen</h2>
                            <p className='text-white font-sans text-sm'>
                                Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.
                            </p>
                        </div>
                        <img className='w-[26.5px] h-[26.5px]' src='/circle_arrow_right.png' />
                    </div>
                </div>
            </div>
        </main>
    )
}
