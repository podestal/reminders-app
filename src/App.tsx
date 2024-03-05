import { useEffect, useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/reminder'
import reminderService from './services/api'
import NewReminder from './components/NewReminder'

// const reminders: Reminder[] = [
//   {id: 1, title: 'Reminder 1'},
//   {id: 2, title: 'Reminder 2'},
//   {id: 3, title: 'Reminder 3'}
// ]

function App() {

  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    loadReminders()
  }, [])

  const loadReminders = async() => {
    const reminders = await reminderService.getReminders()
    setReminders(reminders)
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title)
    setReminders([ newReminder, ...reminders ])
    
  }

  return (
    <>
      <h1>Reminders TypeScript - React</h1>
      <NewReminder 
        onAddReminder={addReminder}
      />
      <ReminderList 
        reminders={reminders}
        onRemoveReminder={removeReminder}
      />
    </>
  )
}

export default App
