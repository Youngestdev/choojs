var html = require('choo/html')
 var choo = require('choo')
 var auth0 = require("auth0-js")

 var TITLE = 'Authentication Service Example With Auth0'

 module.exports = auth

 function auth(state, emit) {
     if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

     return html`
         <body class="container paper">
         <button id="btn-login" class="paper-btn">Test</button>
             <p> It works !</p>
             <script>
             window.addEventListener('load', function() {

                 var webAuth = new auth0.WebAuth({
                   domain: 'budul.auth0.com',
                   clientID: 'TlUM1tTHNi3SGXqIBuQGz5jVbttCnfxc',
                   responseType: 'token id_token',
                   audience: 'https://budul.auth0.com/userinfo',
                   scope: 'openid',
                   redirectUri: window.location.href
                 });
             
             
                 var loginBtn = document.getElementById('btn-login');
             
                 loginBtn.addEventListener("click", (e) => {
                     e.preventDefault();
                     webAuth.authorize()
                 })
             
               
               })</script><script src="https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js"></script>
         </body>
     `
 }