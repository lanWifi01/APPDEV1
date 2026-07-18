import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <p><b>Full Name:</b> Leander Dylan Broñola</p>
        <p><b>Course and Year:</b> BSIS 3</p>
        <p><b>Fun Fact:</b> I originally wanted to be a Civil Engineer, but then I went to LVCC. Eventually, I loved being a BSIS student.</p>
        <p><b>Reflection:</b> I have learned many things so far in this course. I learned how to use git properly,
        I am now learning about react, and I have learned things valuable in life, such as professional skills. 
        I learned more about being keen to details and following instructions due to our instructor being strict, 
        however, I am not complaining because I understand the reason why he is strict to us. Overall, I can say that 
        it is both challenging and fun, I can also see that it is significant in my future career because it gives me both 
        technical and professional skills.</p>
      </section>
    </>
  )
}

export default App
