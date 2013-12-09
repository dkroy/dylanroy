javascript: (
    function(){
        var d=document,
        e = d.getElementById('cookmarklet-container');
        if(e!==null){
            d.body.removeChild(e);
        }
        var u = 'http://localhost:8888/static/cb/',
        t = new Date().getTime(),
        c = d.createElement('div'),
        a = d.createElement('a'),
        p = d.createElement('div'),
        l = d.createElement('link'),
        s = d.createElement('script');
        c.setAttribute('id', 'cookmarklet-container');
        a.setAttribute('id', 'cookmarklet-close');
        a.setAttribute('href', "javascript: window.document.body.removeChild(window.document.getElementById('cookmarklet-container')); void(0);");
        p.setAttribute('id', 'cookies');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', u+'css/cookmarklet.css');
        d.head.appendChild(l);
        c.appendChild(a);
        c.appendChild(p);
        s.setAttribute('src', u+'js/cookmarklet.js?'+t);
        c.appendChild(s);
        d.body.appendChild(c);
        a.innerText = 'Close';
        
        var cookies = document.cookie.split(';');
        var output = '';
        for (var i = 0; i < cookies.length; i++) {
            if(cookies[i] !== ''){
                 var CookieKeyValue = cookies[i].split('=');
                 output+= "<div class='cookie'><strong>"+CookieKeyValue[0].trim()+"</strong><br>"+CookieKeyValue[1]+"</div>";
            }
        }
        p.innerHTML = output;
    }
)();