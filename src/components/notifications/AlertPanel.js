import './AlertPanel.css'

export default function AlertPanel ({user, setDisplay}) {
  
  return (
    <div className="alert">
      <span 
        className="closebtn"
        onClick={() => setDisplay(false)}>&times;</span>
      <strong>Welcome back {user} !!</strong> 
    </div>
  )
}