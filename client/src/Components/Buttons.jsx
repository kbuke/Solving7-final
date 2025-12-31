export function Buttons({
  text,
  buttonType,
  setState,
  categoryId,
  setCategoryId
}) {
  return (
    <button
      type={buttonType === "Submit" ? "submit" : "button"}
      className={
        buttonType === "Submit"
          ? "submit-button"
          : buttonType === "Edit"
          ? "edit-button"
          : "delete-button"
      }
      onClick={
        buttonType !== "Submit"
          ? () => {
              if (buttonType === "Edit") {
                setState("Edit")
                setCategoryId(categoryId)
              } else if (buttonType === "Delete") {
                setState("Delete")
                setCategoryId(categoryId)
              } else if (buttonType === "Close") {
                setState(null)
                setCategoryId(null)
              }
            }
          : undefined
      }
    >
      {text}
    </button>
  )
}
