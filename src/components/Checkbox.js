import { useEffect, useState } from "react"
import "./Checkbox.css"

const Checkbox = ({ id, label, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [item, setItem] = useState([])
  console.log(isChecked)
  // console.log(item)

  // useEffect(() => {
  if (isChecked) {
    // setItem(id)
    console.log(id)
  }
  // }, [item])
  // console.log(item)

  return (
    <div className="checkbox-wrapper">
      <label>
        <span className="label">{label}</span>
        <input
          id={id}
          className={isChecked ? "checked" : ""}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
      </label>
    </div>
  )
}
export default Checkbox
