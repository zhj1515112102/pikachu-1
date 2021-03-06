const string=`
.skin *{margin: 0;padding: 0;}
.skin *{box-sizing: border-box;}
.skin *::before,.skin *::after{box-sizing: border-box;}
body{width: 100%;height: 100%;}
.container{
    position: relative;
    background-color: #ffcb00;
    width: 100%;
    height: 100vh;    
}
.eyes{
    border: 1px solid black;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: black;
    left: 50%;
    top: 100px;
}
.eyes.left{
    transform: translateX(-140px);
}
.eyes.right{
    transform: translateX(100px);
}
.eyes::before{
    position: absolute;
    content: "";
    border: 1px solid white;
    width: 20px;
    height: 20px;
    border-radius: 10px; 
    background-color: white;
    left: 5px;
    top: 5px;
    animation: moveEyes 3s infinite;
}
@keyframes moveEyes{
  0%{
    left: 5px;
    top: 5px;
  }
  20%{
    left: 19px;
    top: 5px;
  }
  40%{
    left: 15px;
    top: 5px;
  }
  60%{
    left: 20px;
    top: 20px;
  }
  100%{
    left: 5px;
    top: 5px;
  }
}
.nose{
    border: 1px solid black;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 10px 0 0;
    left:50%;
    top:125px;
    transform: rotate(45deg);
    background-color: black;
    animation: moveNose 3s infinite;
}
@keyframes moveNose{
  0%,46%,56%,100%{
    margin-left: -5px;
  }
  50%{
    margin-left: -10px;
  }
}
.face{
    position: absolute;
    border: 1px solid black;
    width: 70px;
    height:70px;
    background-color: #ff5140;
    left: 50%;
    top: 200px;
    border-radius: 70px;
    animation: cheekFace 3s infinite;
}
@keyframes cheekFace {
  0%,
  46%,
  54%,
  100% {
    width: 64px;
    height: 64px;
    top: 200px;
  }
  50% {
    width: 50px;
    height: 50px;
    top: 220px;
  }
}
.face.left{
    transform: translateX(-185px);
}
.face.right{
    transform: translateX(125px);
}
.mouth{
    /* border: 1px solid black; */
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 200px;
    margin-left: -100px;
}
.mouth::before {
    content: "";
    border: 5px solid #ffcb00;
    width: 38px;
    height: 5px;
    position: absolute;
    transform: rotate(60deg);
    left: 50%;
    margin-left: -28px;
    background-color: #ffcb00;
    z-index: 1;
    top: -9px;
  }
  .mouth::after {
    content: "";
    border: 5px solid #ffcb00;
    width: 38px;
    height: 5px;
    position: absolute;
    transform: rotate(-60deg);
    left: 50%;
    margin-left: -9px;
    background-color: #ffcb00;
    z-index: 5;
    top: -8px;
  }
  .lip {
    position: absolute;
    margin-left: 2px;
    z-index: 3;
  }
  .lip::after,
  .lip::before {
    content: "";
    border-bottom: 4px solid black;
    width: 75px;
    height: 38px;
    position: absolute;
    background-color: #ffcb00;
  }
  .lip::before {
    transform: rotate(-30deg);
    border-left: 2px solid black;
    border-bottom-left-radius: 500px 300px;
    margin-left: 20px;
  }
  .lip::after {
    transform: rotate(30deg);
    border-right: 2px solid black;
    border-bottom-right-radius: 500px 300px;
    margin-left: 100px;
  }
  .mouth_main {
    border: 3px solid black;
    width: 130px;
    height: 140px;
    position: absolute;
    left: 50%;
    margin-left: -65px;
    background-color: #cc4143;
    border-bottom-left-radius: 280px 590px;
    border-bottom-right-radius: 280px 590px;
    overflow: hidden;
    top: 13px;
    z-index: 1;
    animation: mouthMove 3s infinite;
  }
  @keyframes mouthMove {
    0%,
    46%,
    54%,
    100% {
      height: 140px;
    }
    50% {
      height: 10px;
    }
  }
  .tongue {
    /* border: 1px solid black; */
    width: 140px;
    height: 140px;
    background-color: #dd666a;
    margin-top: 20px;
    margin-left: -10px;
    border-top-left-radius: 380px;
    border-top-right-radius: 420px 380px;
    overflow: hidden;
  }
`
export default string;