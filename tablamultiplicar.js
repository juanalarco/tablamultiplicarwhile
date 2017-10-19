      var y = 0;
      var p = 0;
      while (p<1) {
        y=prompt('Dime un numero del 1 al 100');
        y=parseInt(y);

        if (y<100) {
          for (var x = 1; x <= 10 ; x++) {
            r=y*x;
          document.write(y+"x"+x+"="+r+"<br>");
        }
      }
      p++;
      }
