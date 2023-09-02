import { PacmanLoader } from 'react-spinners'


function Spinner() {
  return (
    <div className="spinner">
        <PacmanLoader
            color="#36d7b7"
            loading="true"
        />
    </div>
  )
}

export default Spinner