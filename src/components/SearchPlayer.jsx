import React from 'react'
import ModalItem from './ModalItem'
import ItemPlayer from './ItemPlayer'
import useFilter from '../hooks/useFilter'
import useSelect from '../hooks/useSelect'

const SearchPlayer = ({ showModal, setShowModal }) => {

    const { state, handleChange } = useFilter()
    const { handleSelect } = useSelect(setShowModal)

    return (
        <>
            {showModal ? (
                <ModalItem setShowModal={setShowModal}>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="nombre"
                        placeholder="Nombre"
                        className="mt-2 flex h-12 w-full items-center justify-center 
                        rounded-xl border bg-white/0 p-3 text-sm outline-none 
                        border-gray-200"
                        
                    />
                    {state.filteredPlayers.length > 0 ? (
                        <div className="w-full mt-10 overflow-y-auto">
                            <div className="grid grid-flow-row grid-cols-3 gap-4 place-items-center">
                                {state.filteredPlayers.map((player, i) => (
                                    <ItemPlayer
                                        key={i}
                                        {...player}
                                        handleSelect={handleSelect}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>No se encontraron jugadores</p>
                    )}
                </ModalItem>
            ) : null}
        </>
    )
}

export default SearchPlayer
