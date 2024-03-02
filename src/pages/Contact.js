export default function contact() {
  return (
    <div className="contact">
        <center>
        <h2>Your Earnings / 28 days: <p></p><button><h3> $1,387.69</h3></button></h2>
        <h4>Team Earnings / 28 days: <p></p><button><h4> $101,387.69</h4></button></h4>

        <h1><i><u>Molto Bene! 🎉</u></i></h1>
        <form>
        <label>
        <span>Your Name</span><br></br>
                <input type="string" required />
            </label>
            <br></br>
            <label>
            <span>Your Email</span><br></br>
                <input type="email" name="email" required />
            </label>
            <br></br>
            <label>
            <span>Change Password</span><br></br>
                <input type="string" required>
                </input>
            </label>
            <br></br>
            <label>
            <span>Switch Team</span><br></br>
                <input type="string" required>
                </input>
            </label>
            <br></br>
            <button>Submit</button>
        </form>
        </center>
    </div>
  )
}
