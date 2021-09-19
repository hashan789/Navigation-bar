import Menu from './menu.png';
import './App.css';
import Index from './index.png';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {   
       function menu(){

          var high = document.getElementById("menuList");

            if(high.style.height == "0px"){
              high.style.height = "300px";
            }
            else{
              high.style.height = "0px";
            }

          } 

          function onAbout(){
            var click1 = document.getElementById("menu1");

            if(click1.style.height == "0px"){
              click1.style.height = "150px";
          //  document.getElementById("color").style.color = "#0011cc";
            }
            else{
              click1.style.height = "0px";
          //  document.getElementById("color").style.color = "white";
         //   document.querySelector(".display .main i").classList.add("fas fa-angle-up");

            }
          }

          function onNews(){
            var click2 = document.getElementById("menu2");

            if(click2.style.height == "0px"){
              click2.style.height = "150px";
           // document.getElementById("color1").style.color = "#0011cc";
           // document.querySelector(".display #color1 i").classList.add("fas fa-angle-down");
            }
            else{
              click2.style.height = "0px";
          //  document.getElementById("color1").style.color = "white";
          //  document.querySelector(".display #color1 i").classList.add("fas fa-angle-up");
            }
          }


  return (
       <div className="row">
        <div className="row1 col-lg-12 col-sm-12">
              <div><h1 className="left">LED KLN</h1></div>
              <div className="img">
                 <img src={Menu} alt="menu" width="30px" height="30px" class="menu-icon left" onClick={menu}/>
              </div>
              <div className="right">
                   <ul className="display" id="menuList">
                       <li>
                           <div>
                               <h2  class="main" id="color">about <span onClick={onAbout}><img className="pad" src={Index} width="15px" height="15px"/></span></h2>
                           </div>
                           <div className="menu mar-left1">
                              <ul id="menu1" className="list">
                                     <li><h3>vision & mission</h3></li>
                                     <li><h3>avenues</h3></li>
                                     <li><h3>structure</h3></li>
                                     <li><h3>foundation</h3></li>
                                     <li><h3>leadrers</h3></li>
                                     <li><h3>partners</h3></li>
                                     <li><h3>membership</h3></li>
                              </ul>
                           </div>
                       </li>
                       <li><h2>programs</h2></li>
                       <li>
                         <div>
                           <h2 id="color1">news & features <span onClick={onNews}><img className="pad" src={Index} width="15px" height="15px"/></span></h2>
                         </div>
                         <div className="menu mar-left2">
                           <ul id="menu2" className="list">
                             <li><h3>news</h3></li>
                             <li><h3>magazines</h3></li>
                             <li><h3>events</h3></li>
                           </ul>
                         </div>
                       </li>
                       <li><h2>blog</h2></li>
                       <li><h2>contact</h2></li>
                   </ul>
              </div>
            </div>
            </div>
  );
}

export default App;
