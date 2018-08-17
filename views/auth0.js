var html = require('choo/html')

var TITLE = 'Authentication Service Example With Auth0'

module.exports = auth

function auth (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
         <body class="paper">
        <div class="container">
        <a href="#">Auth0 - JavaScript</a>
          <nav class="navbar">
            <header>

                <button id="btn-home-view" class="paper-btn">
                    Home
                </button>

                <button id="btn-login" class="paper-btn">
                    Log In
                </button>

                <button id="btn-logout" class="paper-btn">
                    Log Out
                </button>
              </header>
        </nav>

        <main class="container">
            <!-- home view -->
            <div id="home-view">
            <h4></h4>
            </div>
            
        </main>

        </div>
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
             
                 var loginStatus = document.querySelector('.container h4');
                 var loginView = document.getElementById('login-view');
                 var homeView = document.getElementById('home-view');
               
                 // buttons and event listeners
                 var homeViewBtn = document.getElementById('btn-home-view');
                 var loginBtn = document.getElementById('btn-login');
                 var logoutBtn = document.getElementById('btn-logout');
               
                 homeViewBtn.addEventListener('click', function() {
                   homeView.style.display = 'inline-block';
                   loginView.style.display = 'none';
                 });
               
                 logoutBtn.addEventListener('click', logout);
               
                 function handleAuthentication() {
                   webAuth.parseHash(function(err, authResult) {
                     if (authResult && authResult.accessToken && authResult.idToken) {
                       window.location.hash = '#';
                       setSession(authResult);
                       loginBtn.style.display = 'none';
                       homeView.style.display = 'inline-block';
                     } else if (err) {
                       homeView.style.display = 'inline-block';
                       console.log(err);
                       alert(
                         'Error: ' + err.error + '. Check the console for further details.'
                       );
                     }
                     displayButtons();
                   });
                 }
               
                 function setSession(authResult) {
                   // Set the time that the Access Token will expire at
                   var expiresAt = JSON.stringify(
                     authResult.expiresIn * 1000 + new Date().getTime()
                   );
                   localStorage.setItem('access_token', authResult.accessToken);
                   localStorage.setItem('id_token', authResult.idToken);
                   localStorage.setItem('expires_at', expiresAt);
                 }
               
                 function logout() {
                   // Remove tokens and expiry time from localStorage
                   localStorage.removeItem('access_token');
                   localStorage.removeItem('id_token');
                   localStorage.removeItem('expires_at');
                   displayButtons();
                 }
               
                 function isAuthenticated() {
                   // Check whether the current time is past the
                   // Access Token's expiry time
                   var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
                   return new Date().getTime() < expiresAt;
                 }
               
                 function displayButtons() {
                   if (isAuthenticated()) {
                     loginBtn.style.display = 'none';
                     logoutBtn.style.display = 'inline-block';
                     loginStatus.innerHTML = 'You are logged in!';
                   } else {
                     loginBtn.style.display = 'inline-block';
                     logoutBtn.style.display = 'none';
                     loginStatus.innerHTML =
                       'You are not logged in! Please log in to continue.';
                   }
                 }
                handleAuthentication();
               })</script><script src="https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js"></script>
         </body>
     `
}
