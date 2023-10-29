import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Siginup = () => {

const {crateUser} = useContext(AuthContext);


const handelSignUp = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  console.log(name,email,password);

  crateUser(email,password)
  .then(result=>{
    const user = result.user;
    console.log(user)
  })
  .catch(error=>{
    console.log(error)
  })
}


  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold">Registation now</h1>
        <img src={login} alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <form onSubmit={handelSignUp} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input type="text" placeholder="email" name="name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit"  className="btn btn-primary" value="Registation" />
          </div>
          </form>
          <h3 className="mt-5  ">  all ready account? <Link to={"/login"} className="text-blue-400 font-bold ">login</Link> </h3>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Siginup;


