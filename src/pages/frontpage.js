import React from "react";
import stlogo from '../Imges/lnkdin.svg';
function frontpage() {
  return (
    <div>
        <div classNameName="container-fluid">
            <div className=" p-4 " style={{backgroundColor:'rgb(207, 232, 252)'}}>
                <div className="row">
                    <div className="col">
                        <div className="p-2 mb-1  rounded-3">
                            <div className=" py-4">
                                <h2 className="display-6 fw-bold" style={{color:'#009688'}} >Welcome to your Proffesional Career</h2>
                                <p className="col-md-8 fs-5" >Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                                <button className="btn btn-primary btn-lg" type="button">Signin </button>
                            </div>
                        </div>
                      </div>
                    <div className="col-md-auto justify-content-md-center">
                      <div className="text-center" >
                          <img src={stlogo} alt="" style={{width:380}} />
                      </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  );
}
export default frontpage;
