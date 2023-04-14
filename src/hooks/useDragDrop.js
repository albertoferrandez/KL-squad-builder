import React from "react"

export const useDragDrop = () => {
  const [actualId, setActualId] = React.useState(null)
  const dragStarted = (e, id) => {
    setActualId(id)
    e.dataTransfer.setData('text/plain', id)
    e.dataTransfer.effectAllowed = "move"
  }

  const dragOver = (e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const dragDropped = (e, id) => {
    e.preventDefault()
    const refItemId = e.dataTransfer.getData('text/plain')
    console.log(refItemId, id)
    const refItem = document.getElementById(refItemId)
    e.target.appendChild(refItem)
  }

  return {
    dragDropped,
    dragOver,
    dragStarted,
    actualId
  }
}
