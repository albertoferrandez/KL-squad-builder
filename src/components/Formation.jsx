import React from "react"
import { useDragDrop } from "../hooks/useDragDrop"
import { FieldContext } from "../context/fieldContext"
import SearchPlayer from "./SearchPlayer"
import { SelectedPlayersContext } from "../context/selectedContext"
import ItemSelected from "../components/ItemSelected"
import useSelect from "../hooks/useSelect"

const Formation = () => {
  const { field } = React.useContext(FieldContext)
  const [showModal, setShowModal] = React.useState(false)
  const { selectedPlayers } = React.useContext(SelectedPlayersContext)
  const { dragStarted, dragDropped, dragOver, actualId } = useDragDrop()
  const { handleDelete } = useSelect()

  return (
    <>
      <main className="field">
        {field.map((row, rowIndex) => (
          <div key={rowIndex} className="field-row">
            {row.map((col, colIndex) => (
              <button
                onDrop={(e) => dragDropped(e, actualId)}
                key={colIndex}
                onClick={() => setShowModal(true)}
              >
                <article
                  onDragOver={(e) => dragOver(e)}
                  className={`${col === "" ? "" : "field-card"}`}
                >
                  <span className="relative top-36 font-bold">{col}</span>
                </article>
              </button>
            ))}
          </div>
        ))}

        <SearchPlayer
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </main>

      <div className="absolute top-64">
        {
          selectedPlayers.map((player) => (
            <article
              id={player.id}
              key={player.id}
              draggable
              onDragStart={(e) => dragStarted(e, player.id)}
            >
              <ItemSelected
              handleDelete={handleDelete}
                {...player}
              />
            </article>
          ))
        }
      </div>

    </>
  )
}

export default Formation;
