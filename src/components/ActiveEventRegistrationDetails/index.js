// Write your code here
import './index.css'

const stateMethods = {
  initial: 'nothing',
  yetTo: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closes: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {result} = props

  const initialDisplay = () => (
    <div className="initail-con">
      <p className="initail">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const yetTorigister = () => (
    <div className="yet-torigister-con">
      <img
        className="yet-to-img"
        alt=" yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="yet-to-des">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const registeredEvent = () => (
    <div className="already-reg-con">
      <img
        className="already-img"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1 className="already">You have already registered for the event</h1>
    </div>
  )

  const registrationClosed = () => (
    <div className="registration-closed-con">
      <img
        className="registration-closed-img"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="registration-closed-head">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-para">Stay tuned. We will reopen</p>
    </div>
  )

  switch (result) {
    case stateMethods.initial:
      return initialDisplay()
    case stateMethods.yetTo:
      return yetTorigister()
    case stateMethods.registered:
      return registeredEvent()
    case stateMethods.closes:
      return registrationClosed()
    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
