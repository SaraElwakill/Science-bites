import './App.css'
import { useState } from 'react'

function App() {
  const [answers, setAnswers] = useState({
    a1: '',
    a2: '',
    a3: ''
  })

  const handleShowAnswer = (id) => {
    const answerMap = {
      a1: "✅ Biceps muscle",
      a2: "✅ Straightening the arm",
      a3: "✅ Antagonistic muscles"
    }
    setAnswers(prev => ({
      ...prev,
      [id]: answerMap[id]
    }))
  }

  return (
    <div className="card">
      <h1>💪 Antagonistic Muscles</h1>
      <p style={{ textAlign: 'center' }}>IGCSE Biology – Cute & Easy Summary ✨</p>

      <div className="section">
        <h2>🤸 Bending the Arm (Flexion)</h2>
        <ul>
          <li>💪 <strong>Biceps contracts</strong></li>
          <li>😌 <strong>Triceps relaxes</strong></li>
          <li>🦴 Tendon pulls the lower arm bone up</li>
        </ul>
        <div className="highlight">
          📌 Biceps = Agonist | Triceps = Antagonist
        </div>
      </div>

      <div className="section">
        <h2>🧍 Straightening the Arm (Extension)</h2>
        <ul>
          <li>💪 <strong>Triceps contracts</strong></li>
          <li>😌 <strong>Biceps relaxes</strong></li>
          <li>🦴 Tendon pulls the lower arm bone down</li>
        </ul>
        <div className="highlight">
          📌 Triceps = Agonist | Biceps = Antagonist
        </div>
      </div>

      <div className="section">
        <h2>🧠 Key IGCSE Note</h2>
        <p style={{ textAlign: 'center' }}>
          ✨ This is called <strong>antagonistic muscle action</strong><br />
          ✨ Muscles work in <strong>pairs</strong><br />
          ✨ One contracts while the other relaxes
        </p>
      </div>

      <div className="quiz">
        <h2>📝 Quick Quiz</h2>

        <p>1️⃣ Which muscle contracts when the arm bends?</p>
        <button onClick={() => handleShowAnswer('a1')}>Show Answer</button>
        {answers.a1 && <div className="answer">{answers.a1}</div>}

        <p>2️⃣ What movement is called extension?</p>
        <button onClick={() => handleShowAnswer('a2')}>Show Answer</button>
        {answers.a2 && <div className="answer">{answers.a2}</div>}

        <p>3️⃣ What do we call muscles that work in pairs?</p>
        <button onClick={() => handleShowAnswer('a3')}>Show Answer</button>
        {answers.a3 && <div className="answer">{answers.a3}</div>}
      </div>
    </div>
  )
}

export default App
