
const ItemPlayer = ({ id, fullName, handleSelect, dorsalName, role, color, name, teamImage }) => {
  return (
    <article 
      onClick={(e) => handleSelect(e, {
        id,
        fullName,
        dorsalName,
        role,
        name,
        color,
        teamImage
      }) }  
      className="item" 
    >
       <img src={teamImage} alt={name}
         className="h-8 w-8 bg-white rounded-full p-1 relative top-12 left-12"
        />
    
      <h2 className="text-white px-2 text-sm text relative top-16 font-bold">
        {fullName}
      </h2>

      <div className="text-white relative top-20">{role}</div>

    </article>
  )
}

export default ItemPlayer
