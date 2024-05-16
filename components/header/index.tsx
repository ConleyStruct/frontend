import Image from 'next/image'
import { Sun, Moon, Magnifier } from '../icons'
import Link from 'next/link'

export default async function Navbar() {
    const icons = {
        sun: <Sun className="w-7 h-7 relative bg-black/opacity-0" size={28} />,
        moon: <Moon className="" size={28} />,
        magnifier: <Magnifier className="w-7 h-7 relative bg-black/opacity" size={28} />
    }

    return (
        <div className="out-header-container">
            <div className="w-full h-24 px-32 py-2.5 bg-sky-800 justify-between items-center inline-flex">
                <Image 
                    src="/logo-tan.png" 
                    width={280}
                    height={70}
                    alt="horizon-structures-logo"
                />
                <div className="justify-start items-start gap-4 flex">
                    <div className="text-white text-lg font-semibold font-['Inter'] uppercase">Products</div>
                    <div className="text-white text-lg font-semibold font-['Inter'] uppercase">Who we are</div>
                    <div className="text-white text-lg font-semibold font-['Inter'] uppercase">What we do</div>
                    <div className="text-white text-lg font-semibold font-['Inter'] uppercase">our brands</div>
                </div>
            </div>
            <div className="w-full h-24 px-40 py-4 bg-neutral-200 justify-between items-center inline-flex">
                <div className="px-4 py-2 bg-sky-800 justify-center items-center gap-2.5 flex">
                    <div className="text-white text-lg font-semibold font-['Inter'] uppercase">Contact us</div>
                </div>
                <Image
                    src="/gsa-contract-holder.png" 
                    width={240}
                    height={96}
                    alt="gsa-contract-holder"
                />
                <div className="justify-start items-start gap-4 flex">
                    {icons.magnifier}
                    {icons.moon}
                </div>
            </div>
        </div>
    )
}