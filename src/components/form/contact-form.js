

//TODO: to be hooked up still
const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson);
    const processResults = processForm(formJson)
    if (typeof processResults === 'object') {
      console.log('processing failed')

      // next step is to display the error messaging on the form
    }

  }

  return (
    <div className={"form-wrap"}>
      <form className={"form"} onSubmit={handleSubmit}>
        <div className={"flex-fields"}>
          <div className={"flex-fields-wrap"}>
            <label htmlFor="name">
              <span>Your name</span>
              <div className={"input-wrap"}>
                <input type="text" name={"name"} required />
                <span className="err-msg">asdf</span>
              </div>
            </label>
          </div>
          <div className={"flex-fields-wrap"}>
            <label htmlFor="company">
              <span>Company</span>
              <input type="text" name={"company"} />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="lName">
            <span>Email address</span>
            <input type="email" name={"email"} required />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            <span>Description</span>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="What can I do for you?" required></textarea>
          </label>
        </div>
        <div>
          <button type={"submit"} name={"submit"}>Submit</button>
        </div>
      </form>
    </div>
  )
}

// double check client side inputs
const processForm = (inputs) => {

  let errFound = false
  let errObj = {}

  for (const key in inputs) {
    if (key === 'name') {
      const namecheck = /^\s*([A-Za-z]{1,}([.,] |[-']| )?)+[A-Za-z]+\.?\s*$/.test(inputs[key])
      if (!namecheck) {
        errFound = true
        errObj[key] = 'Please enter a valid name.'
      }
    }
    if (key === 'company') {
      const companycheck = /^\s*([A-Za-z]{1,}([.,] |[-']| )?)+[A-Za-z]+\.?\s*$/.test(inputs[key])
      if (!companycheck) {
        errFound = true
        errObj[key] = 'Please enter a valid company name.'
      }
    }
    if (key === 'email') {
      const emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs[key])
      if (!emailcheck) {
        errFound = true
        errObj[key] = 'Please enter a valid email address.'
      }
    }
    if (key === 'description') {
      if (inputs[key].indexOf('<script>') !== -1) {
        errFound = true
        errObj[key] = 'Please enter a valid description.'
      }
    }
  }

  console.log(errObj)
  if (errFound) {
    return errObj
  }

  return true;
}

export default Form