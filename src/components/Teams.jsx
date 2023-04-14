import React from 'react'
import useFetch from "../hooks/useFetch"

const Teams = () => {
    const { data } = useFetch()
    const [isOpen, setIsOpen] = React.useState(false)
    const [team, setTeam] = React.useState('https://kingsleague.dev/teams/logos/1k.svg')

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleTeam = (image) => {
        setTeam(image)
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <button onClick={toggleDropdown}>
                {
                    <img src={team} alt='choosed team' className="rounded-full h-20 w-20" />
                }
            </button>
            {isOpen && (
                <div className="absolute w-40 p-2 bg-white rounded-md 
                shadow-lg z-10 grid grid-cols-2 gap-2 
                ">
                    {
                        data?.map(team => (
                            <img
                                src={team.image}
                                alt={team.name}
                                onClick={(e) => handleTeam(team.image)}
                                className="cursor-pointer"
                                key={team.name}
                            />
                        ))
                    }
                </div>
            )}
        </div>
    )
}

export default Teams
