export default function contact() {
  return (
    <div className="contact">
        <h3>Register</h3>
        <form>
        <label>
                <span>Name  </span>
                <input type="string" required />
            </label>
            <br></br>
            <label>
                <span>Email  </span>
                <input type="email" name="email" required />
            </label>
            <br></br>
            <label>
                <span>Password  </span>
                <input type="string" required>
                </input>
            </label>
            <br></br>
            <label>
                <span>Team  </span>
                <input type="string" required>
                </input>
            </label>
            <br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}
