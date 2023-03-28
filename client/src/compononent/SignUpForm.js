 function SignUpForm() {

  return (
      <div>
        <div className="flex justify-center">
        <form className="flex flex-col px-10 bg-slate-300 max-w-lg my-8">
                <label>Name:</label>
                <input type="text" className="label2" name="name"/>

                <label>Admission Number:</label>
                <input type="text" className="label2" name="adminnumber"/>

                <label>Email:</label>
                <input type="email" className="label2" name="email"/>

                <label>ID Number:</label>
                <input type="number" className="label2" name="idnumber"/>

                <label>Gender:</label>
                <input type="text" className="label2" name="gender"/>

                <label>Password:</label>
                <input type="password" className="label2" name="password"/>

                <button  className="bg-blue-800 w-max px-2 my-2 mx-auto rounded-md hover:bg-sky-300 hover:text-white">SignUp</button>

            </form>
        </div>

    </div>
    )
  }

  export default  SignUpForm;