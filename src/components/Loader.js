import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: '120px',
        height: '120px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
export default Loader
