(function(){
  document.querySelectorAll('.nav-toggle').forEach(function(btn){
    var inner = btn.closest('.nav-inner');
    var links = inner.querySelector('.nav-links');
    btn.addEventListener('click', function(){
      btn.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        btn.classList.remove('open');
        links.classList.remove('open');
      });
    });
  });
  window.addEventListener('resize', function(){
    if(window.innerWidth > 640){
      document.querySelectorAll('.nav-toggle').forEach(function(btn){ btn.classList.remove('open'); });
      document.querySelectorAll('.nav-links').forEach(function(l){ l.classList.remove('open'); });
    }
  });
})();
