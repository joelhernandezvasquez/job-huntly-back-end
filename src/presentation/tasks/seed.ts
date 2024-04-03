import { Calendar } from "../../config/calendar.date";

const today = new Date();

let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() -1)

const passYesterday = new Date(today);
passYesterday.setDate(passYesterday.getDate() - 2)

export const tasksData = [
    {
        task_id: '1',
        task_name: "Update resume",
        description: "Revise and update resume with latest experience and skills.",
        due_date: Calendar.getFormattedYMDDate(today),
        priority: "High",
        status: "To Do",
        reminder: "2024-03-30T09:00:00",
        created_at: "2024-03-21T08:30:00",
        updated_at: "2024-03-21T08:30:00"
    },
    {
        task_id: '2',
        task_name: "Research Company X",
        description: "Gather information about Company X's culture, products, and recent news.",
        due_date: Calendar.getFormattedYMDDate(today),
        priority: "Medium",
        status: "In Progress",
        job_id: 123,
        reminder: "2024-03-24T14:00:00",
        created_at: "2024-03-21T09:45:00",
        updated_at: "2024-03-21T09:45:00"
    },
    {
        task_id:'3',
        task_name: "Prepare cover letter",
        description: "Write a tailored cover letter for the position at Company X.",
        due_date: Calendar.getFormattedYMDDate(tomorrow),
        priority: "High",
        status: "To Do",
        job_id: 123,
        reminder: "2024-03-25T10:00:00",
        created_at: "2024-03-21T11:15:00",
        updated_at: "2024-03-21T11:15:00"
    },
    {
        task_id: '4',
        task_name: "Send application",
        description: "Submit job application along with resume and cover letter to Company X.",
        due_date: Calendar.getFormattedYMDDate(tomorrow),
        priority: "High",
        status: "To Do",
        job_id: 123,
        reminder: "2024-03-26T12:00:00",
        created_at: "2024-03-21T13:00:00",
        updated_at: "2024-03-21T13:00:00"
    },
    {
        task_id: '5',
        task_name: "Follow up",
        description: "Follow up with Company X regarding the status of the application.",
        due_date: Calendar.getFormattedYMDDate(yesterday),
        priority: "Medium",
        status: "To Do",
        job_id: 123,
        reminder: "2024-04-02T09:00:00",
        created_at: "2024-03-21T14:45:00",
        updated_at: "2024-03-21T14:45:00"
    },
    {
        task_id: '6',
        task_name: "Prepare for interview",
        description: "Research common interview questions and practice responses.",
        due_date: Calendar.getFormattedYMDDate(passYesterday),
        priority: "Medium",
        status: "Done",
        job_id: 123,
        reminder: "2024-04-09T10:00:00",
        created_at: "2024-03-21T16:20:00",
        updated_at: "2024-03-21T16:20:00"
    }
]
