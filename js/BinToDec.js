function binToDec() {
          var bin = document.getElementById('input').value;
          var n;
          var rem;
          var pow=1;
          var dec=0;
          while (bin>0) {
                rem=bin%10;
                dec=dec+(rem*pow);
                bin=bin-rem;
                bin=bin/10;
                pow=pow*2;
          }

          document.getElementById('output').value=dec;

      }
