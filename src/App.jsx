import { useState } from "react"
import "./App.css"

function App() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [emails, setEmails] = useState([])
  const [count, setCount] = useState(0)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target.result
      const lines = text.split(/\r?\n/).filter(Boolean)
      setEmails(lines)
      setCount(lines.length)
    }
    reader.readAsText(file)
  }

  return (
    <div className="page">
      <div className="card">
        <h2>📧 Bulk Mail App</h2>
        <p className="subtitle">
          Send multiple emails easily with Excel upload
        </p>

        <label>SUBJECT:</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label>Email Body:</label>
        <textarea
          rows="5"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input type="file" onChange={handleFileUpload} />

        <p className="count">Total Emails: {count}</p>

        <button>Send Emails</button>

        <a href="#" className="history">
          View History
        </a>
      </div>
    </div>
  )
}

export default App
