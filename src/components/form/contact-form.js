
const Form = () => {

  const handleSubmit = (e) => {
    console.log('handle the submit please')
    console.log(e)
    e.preventDefault()
  }

  return (
    <div className={"form-wrap"}>
      <form className={"form"} onSubmit={handleSubmit}>
        <div className={"flex-fields"}>
          <div className={"flex-fields-wrap"}>
            <label htmlFor="fName">
              <span>First name</span>
              <input type="text" name={"fname"} />
            </label>
          </div>
          <div className={"flex-fields-wrap"}>
            <label htmlFor="lName">
              <span>Last name</span>
              <input type="text" name={"lname"} />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="lName">
            <span>Email address</span>
            <input type="email" name={"email"} />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            <span>Description</span>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="What can I do for you?"></textarea>
          </label>
        </div>
        <div>
          <button type={"submit"} name={"submit"}>Submit</button>
          <p>This doesn't actually do anything yet...</p>
        </div>
      </form>
    </div>
  )
}

export default Form