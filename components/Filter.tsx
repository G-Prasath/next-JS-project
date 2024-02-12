"use client"

const links = ['all', 'Next 13', 'frontend', 'backend', 'fullstack'];

const Filter = () => {
    return (
        <ul className="text-white-800 body-text no-scroll flex w-full max-w-full gap-2 overflow-auto py-10 sm:max-w-2xl align-center">
            {
                links.map((link) => {
                    return (
                        <button key={link} onClick={() => { }} className="whitespace-nowrap rounded-lg px-8 py-2.5 capitalize">
                            {link}
                        </button>
                    )
                })
            }
        </ul>
    )
}

export default Filter