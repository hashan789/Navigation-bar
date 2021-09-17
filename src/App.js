import logo from './logo.svg';
import './App.css';

function App() {
  function navAbout(){
   var size = document.getElementById("menu1");
        size.style.visibility = "visible";
        size.classList.add("color");
    }
  
    function navAboutOut(){
      var size = document.getElementById("menu1");
           size.style.visibility = "hidden";
       }
  
       function navAbout1(){
        var size = document.getElementById("menu2");
             size.style.visibility = "visible";
             size.classList.add("color");

         }
       
         function navAboutOut1(){
           var size = document.getElementById("menu2");
                size.style.visibility = "hidden";
            }  
        
        
        function menu(){

          var high = document.getElementById("menuList");

              //high.style.height = "0px";

            if(high.style.height == "0px"){
              high.style.height = "300px";
            }
            else{
              high.style.height = "0px";
            }

          } 

          function onAbout(){
            var click1 = document.getElementById("menu1");

            if(click1.style.visibility == "hidden"){
              click1.style.visibility = "visible";
            }
            else{
              click1.style.visibility = "hidden";
            }
          }

          function onNews(){
            var click1 = document.getElementById("menu2");

            if(click1.style.visibility == "hidden"){
              click1.style.visibility = "visible";
            }
            else{
              click1.style.visibility = "hidden";
            }
          }


  return (
       <div className="row">
        <div className="row1 col-lg-12 col-sm-12">
              <div><h1 className="left">LED KLN</h1></div>
              <div className="img">
                 <img src="./images/menu.png" alt="menu" width="30px" height="30px" class="menu-icon left" onClick={menu}/>
              </div>
              <div className="right">
                   <ul className="display" id="menuList">
                       <li>
                           <div>
                               <h2 onMouseMove={navAbout} class="main" onclick={onAbout}>about</h2>
                           </div>
                           <div className="menu mar-left1">
                              <ul id="menu1" className="list" onMouseMove={navAbout} onMouseOutCapture={navAboutOut}>
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
                           <h2 onMouseMove={navAbout1} onClick={onNews}>news and features</h2>
                         </div>
                         <div className="menu mar-left2">
                           <ul id="menu2" className="list" onMouseMove={navAbout1} onMouseOutCapture={navAboutOut1}>
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
