var Header = (function(){
  return {
    init: function(){
      window.addEventListener('scroll', () => {
        var st = document.documentElement.scrollTop; // 현재 스크롤바 위치
        if (st > 100) {
          document.querySelector('header').classList.add('small');
        } else {
          document.querySelector('header').classList.remove('small');
        }
      })
    }
  }
})();