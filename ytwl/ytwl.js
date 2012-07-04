var nav = document.getElementById('masthead-nav');
var span = document.createElement('span');
span.setAttribute('class', 'masthead-link-separator');
span.innerHTML = '|';
nav.appendChild(span);
var ql = document.createElement('a');
ql.innerHTML = 'Watch Later';
ql.setAttribute('href', 'http://www.youtube.com/my_watch_later_list');
nav.appendChild(ql);