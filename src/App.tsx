import { useState } from 'react'
import './App.css'
import ReminderList from './components/ReminderList'
import Reminder from './models/reminder'

// const reminders: Reminder[] = [
//   {id: 1, title: 'Reminder 1'},
//   {id: 2, title: 'Reminder 2'},
//   {id: 3, title: 'Reminder 3'}
// ]

function App() {

  const [reminders, setReminders] = useState<Reminder[]>([
    {id: 1, title: 'Reminder 1'},
    {id: 2, title: 'Reminder 2'},
    {id: 3, title: 'Reminder 3'}
  ])


  return (
    <>
      <h1>Reminders TypeScript - React</h1>
      <ReminderList 
        reminders={reminders}
      />
    </>
  )
}

export default App
