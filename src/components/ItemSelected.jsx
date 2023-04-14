import React from "react"

const ItemSelected = ({ id, fullName, role, color, name, teamImage, handleDelete }) => {

  return (
    <div className="item-selected">
      <button onClick={() => handleDelete(id)}>
        <img src='/trash.svg' alt='eliminar' className="h-5 w-5 bg-white rounded-sm p-1 absolute top-1 right-1" />
      </button>
      <img src={teamImage} alt={name}
        className="h-8 w-8 bg-white rounded-full p-1 relative 
         top-8 left-12"
      />

      <h2 className="text-white px-2 text-sm text relative 
      top-10 font-bold">
        {fullName}
      </h2>

      <div className="text-white relative top-16">{role}</div>

    </div>
  )
}

export default ItemSelected
