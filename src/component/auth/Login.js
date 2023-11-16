import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import "./login.css";
import logo from "../../assests/images/logo1.svg";
function Login() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#403F75" }}>
      <MDBContainer fluid className=" p-3 h-custom">
        <MDBRow>
          <MDBCol col="12" md="4">
            <img src={logo} alt="Sample" />
          </MDBCol>

          <MDBCol col="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3 text-white">Sign in </p>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating size="md" tag="a" className="me-2">
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
            </div>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center text-white fw-bold mx-3 mb-0">
                Welcom back!
              </p>
            </div>
            <div style={{ width: "50%", marginLeft: "20%" }}>
              <MDBInput
                wrapperClass="mb-4"
                label=""
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label=""
                id="formControlLg"
                type="password"
                size="lg"
              />
            </div>

            <div
              style={{ width: "50%", marginLeft: "20%" }}
              className="d-flex justify-content-between mb-4"
            >
              <button
                onClick={() => {
                  window.location.href = "/accueil";
                }}
                className="mb-0 px-5 bg-danger text-white "
                style={{ borderRadius: "9px", height: "20%" }}
              >
                Login
              </button>
              <a href="!#" className="text-white">
                Forgot password?
              </a>
            </div>

            <div
              style={{ width: "50%", marginLeft: "20%" }}
              className="text-center text-md-start mt-4 pt-2"
            >
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <a href="/register" className="text-danger">
                  Create One
                </a>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
      <div
        style={{ width: "50%", marginLeft: "20%" }}
        className="text-center text-md-start mt-4 pt-2"
      ></div>
    </div>
  );
}

export default Login;
