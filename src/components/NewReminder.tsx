import { useState } from "react"

interface NewReminderProps {
    onAddReminder: (title: string) => void
}

const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {

    const [title, setTitle] = useState('')

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title) return
        onAddReminder(title)
        setTitle('')
    }

  return (
    <form onSubmit={submitForm}>
        <label htmlFor="title"></label>
        <input value={title} onChange={e => setTitle(e.target.value)} id="title" className="form-control" type="text" />
        <button type="submit" className="btn btn-primary my-4 rounded-pill">Add Reminder</button>
    </form>
  )
}

export default NewReminder