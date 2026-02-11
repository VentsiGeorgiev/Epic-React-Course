export default function Form() {
  function logFormData(data: FormData) {
    const obj = Object.fromEntries(data.entries())
    // intented breaking of the application to try out resetErrorBoundary
    Object.apply(obj.toUpperCase())
    console.log(obj)
  }

  return (
    <form
      // action='/api/onboarding'
      // method='POST'
      // encType='multipart/form-data'
      // onSubmit={(event) => {
      //   event.preventDefault()
      //   const data = new FormData(event.currentTarget)
      //   logFormData(data)
      // }}
      action={logFormData}
    >
      <div className='form-wrapper'>
        <label>
          Account Type
          <select name='accountType' defaultValue='student'>
            <option value='' disabled>
              Please choose an option
            </option>
            <option value='admin'>admin</option>
            <option value='student'>student</option>
            <option value='parent'>parent</option>
            <option value='teacher'>teacher</option>
          </select>
        </label>
        <label className='input-label'>
          Username
          <input type='text' name='username' />
        </label>
        <label className='input-label'>
          Password
          <input type='password' name='password' />
        </label>
        <label className='input-label'>
          Age
          {/* Добавен name='age' */}
          <input type='number' name='age' />
        </label>
        <label>
          Photo
          <input type='file' name='file' accept='image/*' />
        </label>
        <label>
          Color
          <input type='color' name='color' />
        </label>
        <label>
          Date
          <input type='date' name='birthdate' />
        </label>
        <label>
          Waiver signed
          <input type='checkbox' name='waiver' />
        </label>
        <fieldset>
          <legend>Visibility:</legend>

          <label>
            public
            <input type='radio' id='huey' name='drone' value='huey' checked />
          </label>

          <label>
            private
            <input type='radio' id='dewey' name='drone' value='dewey' />
          </label>
        </fieldset>
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}
