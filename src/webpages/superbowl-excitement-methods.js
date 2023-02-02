import DraftLogin from '../components/draft-login.js';

function SuperBowlExcitementMethod() {
  return(
    <DraftLogin>
      <div className="d-flex flex-column align-items-center gap-2">
        <div className="d-flex flex-column align-items-center gap-2">
          <h1>Super Bowl Excitement Methodology</h1>
          <em>In collaboration with <a href="https://www.daniellecarrick.com/" target="_blank">Danielle Carrick</a></em>
        </div>
        <div className="col-md-10 offset-md-1 rounded-3 p-3 shadow bg-light mb-3">
          <h2>Why win probability graphs?</h2>
          <h2>The most boring game imaginable</h2>
          <h2>Surprisingness</h2>
          <h2>Tightness</h2>
          <h2>Motion</h2>
          <h2>Mathematical Details</h2>
        </div>
          <em>Back to <a href="/superbowl-excitement">Super Bowl Excitement</a></em>
      </div>
    </DraftLogin>
  )
}

export default SuperBowlExcitementMethod;
