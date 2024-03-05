import { useState } from "react"

const NewReminder = (): JSX.Element => {

    const [title, setTitle] = useState('')

  return (
    <form>
        <label htmlFor="title"></label>
        <input value={title} onChange={e => setTitle(e.target.value)} id="title" className="form-control" type="text" />
        <button type="submit" className="btn btn-primary my-4 rounded-pill">Add Reminder</button>
    </form>
  )
}

export default NewReminder