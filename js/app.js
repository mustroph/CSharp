$(function() {
    var people = $('.people');
    var btn = people.find('input').eq(2);
    btn.on('click', function() {
        var imie = $('#addUser').val();
        var wiek = $('#age').val();
        var lastLi = $('.main').find('li').last();
        var newLi = $('<li>');
        newLi.attr('data-age', wiek);
        newLi.html(imie);
        if (wiek <= 15) {
            newLi.css('color', 'green');
        } else if (wiek > 15 && wiek <= 40) {
            newLi.css('color', 'blue');
        } else {
            newLi.css('color', 'brown');
        }
        var newBtn = $('<input type="submit" value="usun">');
        newLi.append(newBtn);
        lastLi.after(newLi);

    });
    var newBtn = $('<input type="submit" value="usun">');
    var li = $('.people').find('li');
    var main = $('.main');
    main.on('click', 'input', function() {
      $(this).parent().remove();
    });
    li.append(newBtn);


var delta2,a2,b2,c2,delSqrt,x1,x2;
    $('button').on('click', function(){
      var a,b,c,delta;
      a=$('.a').val();
      b=$('.b').val();
      c=$('.c').val();
      delta=(b*b)-(4*a*c);
      $('#delta').html(delta);
    });
  var lista=$('.main');
   $('.add_button').on('click',function(){
    $('.list').css('display', 'none');
    $('.add').css('display', 'block');
   });
   $('.oblicz').on('click', function(){
     a2=$('.a1').val();
     b2=$('.b1').val();
     c2=$('.c1').val();
      delta2=(b2*b2)-(4*a2*c2);
      delSqrt=Math.sqrt(delta2);
      x1=(-(b2)+delSqrt)/(2*a2);
      x2=(-(b2)-delSqrt)/(2*a2);
      if (delta2<0) {
        $('.delta2').html("NP");
        $('.x1').html("NP");
        $('.x2').html("NP");
      }
      if (delta2==0) {
        $('.delta2').html(delta2);
        $('.x1').html(x1);
        $('.x2').html("NP");
      }
      if (delta2>0) {
        $('.delta2').html(delta2);
        $('.x1').html(x1);
        $('.x2').html(x2);
      }

   });
   $('.dodaj').on('click', function(){
     var a=$('.a1').val();
     var b=$('.b1').val();
     var c=$('.c1').val();
     var delta2=$('.add').find('.delta2').html();
     var x1=$('.add').find('.x1').html();
     var x2=$('.add').find('.x2').html();
      var newList=$('<li><div class="d"><p style="margin:0px;">Funkcja kwadratowa</p><p>delta:<span class="delta">'+delta2+'</span></p></div><div class="d"><div style="display:flex;justify-content:space-around;"><p class="zmienna">a:<span class="a">'+a+'</span></p><p class="zmienna">b:<span class="b">'+b+'</span></p><p class="zmienna">c:<span class="c">'+c+'</span></p></div><div style="display:flex;"><p>x1:'+x1+'</p><p>x2:'+x2+'</p></div></div></li>');
      lista.append(newList);
      $('.list').css('display', 'block');
      $('.add').css('display', 'none');
   });
});
