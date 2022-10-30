    document.addEventListener('DOMContentLoaded', onDomReady);
    function onDomReady() {
         var amount = document.getElementById('amount_point');

         (function iterate(i) {
                amount.innerHTML = `${i}`;

                if (i < 3000) {
                       setTimeout(function() {
                       iterate(i + 10);
                }, 6);     // это значение в милисекундах, т.к. каждые 100 милисекунд будет одновляться число в html
           }
      })(0);
      var amount_plus = document.getElementById('amount_plus');

         (function iterate(i) {
                amount_plus.innerHTML = `${i}+`;

                if (i < 800) {
                       setTimeout(function() {
                       iterate(i + 4);
                }, 9);     // это значение в милисекундах, т.к. каждые x милисекунд будет одновляться число в html
           }
      })(0);
  }
$('#amount_one, #amount_two').each( function () {
    $(this).prop('.Counter',0). animate({
        Counter:$(this).text()
    }, {
        duration:5000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    })
})