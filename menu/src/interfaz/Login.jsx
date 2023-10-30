import React from "react";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-5 m-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex at neque accusamus repellat, ea cumque culpa
            illum maiores, veniam repudiandae distinctio quasi error architecto minus aliquid itaque libero facere sit.
            Reiciendis animi ducimus impedit! Odio aspernatur ex recusandae? Vitae voluptatem odit necessitatibus nihil,
            facere possimus maxime itaque laboriosam. In iste beatae asperiores similique tempore excepturi dignissimos
            reiciendis corporis nisi veniam? Esse est pariatur veritatis, amet optio similique molestias ea dolor
            quisquam vel quod hic ducimus dolorum, tempora atque aliquid incidunt, eum fuga aperiam. Velit voluptates
            sapiente voluptate quae mollitia natus.
          </div>
          <div className="col p-4">
            <form>
              {/*   <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>

              <div className="form-check text-start my-3">
                <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <button className="btn btn-primary w-100 py-2" type="submit">
                Sign in
              </button>
              <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
