import React from "react";
import Navbar from "../../Navbar";
import img from "../../../assests/images/iphone.jpg";
import Footer from "../../Footer";
function Accueil() {
  return (
    <div style={{ background: "#403F75", height: "100%" }}>
      <Navbar />
      <div
        style={{
          width: "50%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flex: 1,
          margin: "50px auto",
        }}
        className="input-group justify-content-center "
      >
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <div className="row p-5 row-cols-3 row-cols-md-4 g-6">
        <div className="col">
          <div className="card">
            <img
              src={img}
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={img}
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={img}
              className="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;
