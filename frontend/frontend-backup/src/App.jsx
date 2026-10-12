import './App.css'

function App() {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <p>Please login to continue</p>

      <form>
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <button type="button">Login</button>
      </form>
    </div>
  )
}

export default App