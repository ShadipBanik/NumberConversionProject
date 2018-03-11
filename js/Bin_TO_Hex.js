function binToHex() {
          var bin = document.getElementById('binInput').value;
          var n;
          var rem;
          var pow=1;
          var dec=0;
          //Again convert decimal to hexadecimal;
          var hexre;
          var hex = new Array();
          var i=0;
          var result ="";
          while (bin>0) {
                rem=bin%10;
                dec=dec+(rem*pow);
                bin=bin-rem;
                bin=bin/10;
                pow=pow*2;
          }

          while (dec>0) {
                hexre = (dec%16);
                hex[i]=hexre ;
                dec= dec-hex[i];
                dec=(dec/16);
                i++;
          }

          for( var j=hex.length-1;j>=0;j--){

            switch (hex[j]) {
              case 10:
                  hex[j]="A";
                break;
              case 11:
                 hex[j]="B";
                break;
              case 12:
                  hex[j]="C";
                break;
              case 13:
                  hex[j]="D";
                break;
              case 14:
                  hex[j]="E";
                break;
              case 15:
                  hex[j]="F";
                break;

            }
             result += hex[j];
            }
          document.getElementById('out').value=result;

      }
