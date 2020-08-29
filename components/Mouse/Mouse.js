var Mouse = (function(){
  return {
    init : function(){
      var cursor = document.getElementById('cursor');
      var pointer = document.getElementById('pointer');
      document.addEventListener('mousemove', function(e){
        var st = document.documentElement.scrollTop;
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = st+y + "px";
        pointer.style.left = x + "px";
        pointer.style.top = st+y + "px";
      })
    }
  }
})();