import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export const MasterLayout = observer(() => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen dark:bg-black'>
            <Outlet />
        </div>
    )
})