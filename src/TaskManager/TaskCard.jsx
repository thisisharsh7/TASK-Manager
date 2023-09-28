import { Icon } from '@iconify/react';

export const TaskCard = ({ title, id, handleDelete, status, file, assign }) => {

    const handleClick = () => {
        handleDelete(id);
    }

    return (
        <div className="container mx-auto mt-10 p-4 max-w-xl bg-white relative " id={id} >
            <div className='flex flex-col gap-2 items-start'>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="mb-4 text-sm font-medium  flex items-start ">
                    File : {file}
                </div>
                <div className="mb-4 block text-sm font-medium text-gray-700">
                    Assign to : {assign}
                </div>
                <div className="mb-4 flex gap-4   sm:justify-start justify-between ">
                    Status : {status}
                </div>
                <button onClick={handleClick} className='absolute top-4 right-4 text-2xl'>
                    <Icon icon="mdi:delete" />
                </button>
            </div>
        </div >
    );
};
