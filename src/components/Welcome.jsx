import WelcomeButton from "./WelcomeButton";

export default function Welcome() {
    return (
        <div className='h-32 border-dotted border-0 border-white w-[710px] ml-28 mt-60'>
            <h1 className='text-white font-bold text-6xl'>For the love of manga</h1>
            <p className='text-white mt-2 mb-2 text-2xl'>Explore our varieties</p>
            <p className='text-white mt-2 mb-2 text-xs'>#MingaLove❤</p>
            <WelcomeButton />
        </div>
    )
}
