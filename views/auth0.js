var html = require('choo/html')

var TITLE = 'Authentication Service Example With Auth0'

module.exports = auth

function auth(state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

    return html`
        <body class="container paper">
        <button id="btn-login" class="paper-btn">Test</button>
        <p>Well, this is just a test to see if choojs can work with Auth0. Well, it can but well there's need for more work as <strong>choojs</strong> doesn't build some DOM codes ( e.g window, addEventListener )etc. </p>
            <script>eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1.4(\'f\',d(){2 6=g 0.h({j:\'7.0.5\',c:\'i\',k:\'b 8\',a:\'9://7.0.5/r\',t:\'l\',v:1.x.w});2 3=s.n(\'m-o\');3.4("p",(e)=>{e.q();6.u()})})',34,34,'auth0|window|var|loginBtn|addEventListener|com|webAuth|budul|id_token|https|audience|token|clientID|function||load|new|WebAuth|TlUM1tTHNi3SGXqIBuQGz5jVbttCnfxc|domain|responseType|openid|btn|getElementById|login|click|preventDefault|userinfo|document|scope|authorize|redirectUri|href|location'.split('|'),0,{}))</script>
            <script src="https://cdn.auth0.com/js/auth0/9.5.1/auth0.min.js"></script>

        </body>
    `
}

// This should've worked, unfortunately, it didn't. Why ? - I don't know.
// var app = choo()

// app.use((state, emitter) => {
//     emitter.on('DOMContentLoaded', () => {
//         var webAuth = new auth0.WebAuth({
    // Arghh !!!! MY tokens !
//             domain: 'budul.auth0.com',
//             clientID: 'TlUM1tTHNi3SGXqIBuQGz5jVbttCnfxc',
//             responseType: 'token id_token',
//             audience: 'https://budul.auth0.com/userinfo',
//             scope: 'openid',
//             redirectUri: window.location.href
//           });
        
//           var loginBtn = document.getElementById("btn-login");
        
//           loginBtn.addEventListener('click', function(e) {
//             e.preventDefault();
//             webAuth.authorize();
//           });
      
//     })
// })
