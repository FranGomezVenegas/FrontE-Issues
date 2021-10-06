const documentContainerAppLoginStyle = document.createElement('platform-login-style');
documentContainerAppLoginStyle.setAttribute('style', 'display: none;');

documentContainerAppLoginStyle.innerHTML = `
  <dom-module id="platform-login-style">
    <template>
      <style>
        #title{
          color: #1676f3;
        }
        #User{
          color: #1676f3;
        }     
        #User:hover {
          background-color: transparent;
          color: #675f5f;
        }           
        #buttonAccess{
          padding: 0.5vmax;
          text-align: center;
          display: inline-block;
          font-size: 1.046vmax;
          font-weight: bold;
          margin: 0.5vmax 0.5vmax;
          transition-duration: 0.4s;
          cursor: pointer;
          background: rgb(0,190,255);
          background: linear-gradient(103deg, rgba(0,190,255,1) 0%, rgba(177,242,244,1) 100%);
          color: #fff;
          border: none;
          box-shadow: 0px 2px 20px rgba(103, 95, 95, 0.2);
          border-radius: 20px; s
        }
        #buttonAccess:hover {
          background-color: transparent;
          color: #675f5f;
        }

        div.login {
          font-family: 'Oxygen', sans-serif;
          margin: 350px;
          margin-top: 0px;
          margin-right: 0px;
          margin-left: 0px;
          margin-bottom: 0px;
          background-size: contain;
          background-repeat: no-repeat;
          color: #675F5F;
          flex-wrap: wrap;
          background-image: url('/images/platform-login/abstract.jpg');
        }
            
        #appLoginMainDiv {
          margin-top: 25px;
          font-size: 21px;
          text-align: center;
          animation: fadein 2s;
          -moz-animation: fadein 2s; /* Firefox */
          -webkit-animation: fadein 2s; /* Safari and Chrome */
          -o-animation: fadein 2s; /* Opera */
        }
        paper-icon-button.flag {
          padding:0.2vmin;
          height:2vmax;
          width: 2vmax;
        }
        #language-selector {
          align-items: center;
          position:  relative;

        }
          img.appLoginLogoOnTop{
            /* height: 150px; */
            /* width: 330px; */
            height:4.08vmax;
            width:17.85vmax;
              max-width: 100%;
            max-heigth: 100%;
            padding: 5% 0% 0% 0%;
            align-items: center;
            position:  relative;
          }

          div.appLoginForm{
            position:relative;
            top:20px;
            animation: fadein 2s;
            //margin-top: 50%;
            min-width: 30%;
            height: 30%;
            margin-left: 25vw;
            margin-right: 30%;
            margin-bottom: 20%;
            padding-top: 0%;
            //transform: translateY(-50%);
            background-color: rgba(177, 242, 244, 25%);
            border-radius: 10px 10px 10px 10px;
            text-align: center;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
          }

        @keyframes fadein {
          from {
              opacity: -30%;
          }
          to {
              opacity:1;
          }
      }
      @-moz-keyframes fadein { /* Firefox */
          from {
              opacity:0;
          }
          to {
              opacity:1;
          }
      }
      @-webkit-keyframes fadein { /* Safari and Chrome */
          from {
              opacity:0;
          }
          to {
              opacity:1;
          }
      }
      @-o-keyframes fadein { /* Opera */
          from {
              opacity:0;
          }
          to {
              opacity: 1;
          }
      }

      </style>
    </template>
  </dom-module>`;
document.head.appendChild(documentContainerAppLoginStyle);