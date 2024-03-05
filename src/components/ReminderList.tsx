
import Reminder from "../models/Reminder"

interface ReminderListProps {
    reminders: Reminder[]
}

const ReminderList = ({reminders}: ReminderListProps) => {
  return (
    <ul>
        {reminders.map(reminder => <li key={reminder.id}>{reminder.title}</li>)}
    </ul>
  )
}

export default ReminderList