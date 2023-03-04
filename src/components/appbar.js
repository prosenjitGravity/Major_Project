import { border } from "@mui/system";
import * as React from "react";
function appbar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary" style={{backgroundColor:'#0A1929'}}>
          <div className="container-fluid">
              <span className="navbar-brand mb-0 h1" style={{color:'white'}}>Alumni Network</span>
              <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Join now</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link  active" aria-current="page" href="#">Signin</a>
                  </li>
              </ul>
          </div>
       </nav> 
    </div>
  );
}
export default appbar;
