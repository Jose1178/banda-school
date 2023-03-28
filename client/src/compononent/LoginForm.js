 import {GiPadlock} from "react-icons/gi"
import {RiAccountCircleFill} from "react-icons/ri"
import { NavLink } from "react-router-dom";

function LoginForm() {

    return (
      <div>
        <div className="flex justify-center">
        <form className="bg-slate-300 max-w-lg flex flex-col px-10 my-8 ">
           <div className="flex border my-3">
                <div className="border border-black py-2 px-3 flex items-center">
                 <RiAccountCircleFill/>
                </div>
                <input type="text" className="outline-none border border-black p-2" name="admissionnumber" placeholder="Admission Number"/>
           </div>
            <div className="flex border">
                <div className="border border-black py-2 px-3 flex items-center">
                 <GiPadlock/>
                </div>
                <input type="password" className="outline-none border border-black p-2" name="password" placeholder="Password"/>
            </div>

            <NavLink to="/">Forgot password</NavLink>

                <button className="bg-blue-800 w-max px-2 my-2 mx-auto rounded-md">Login</button>
         </form>
        </div>
      </div>
    )
  }

  export default  LoginForm;