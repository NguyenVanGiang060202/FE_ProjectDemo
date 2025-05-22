
import { Button } from '../ui/button'

export default function Header() {
    return (
        <>
            <div className='w-dvw h-24 flex justify-between items-center px-24 fixed'>
                <h2 className='text-3xl font-bold'>LUMINOVA</h2>
                <div className="flex justify-center items-center space-x-4 w-fit h-full ">
                    <Button variant={'ghost'} className=' text-lg p-6 rounded-2xl'>For business</Button>
                    <Button className='text-lg p-6 rounded-2xl bg-teal-900'>Log in</Button>
                </div>
            </div>
        </>
    )
}
