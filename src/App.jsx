import { Link } from "react-router-dom"

function App() {

  return (
    <>
      <h1>Jhon Doe</h1>
      <h1>App.jsx</h1>

      <Link to="/home">
        <button className="btn btn-warning">Go to App2.jsx</button>
      </Link>


      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
      </div>
    </>
  )
}

export default App
