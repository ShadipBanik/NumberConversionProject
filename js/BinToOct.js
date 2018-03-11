function binToOct() {
          var bin = document.getElementById('binInput').value;
          var n;
          var rem;
          var oct=0;
          var pow=1;
          var dec=0;
          //agian convert decimal to octal;
          var oct= new Array();
          var i=0;
          var octre;
          var result="";
          while (bin>0) {
                rem=bin%10;
                dec=dec+(rem*pow);
                bin=bin-rem;
                bin=bin/10;
                pow=pow*2;
          }
          while (dec>0) {
                octre = (dec%8);
                oct[i]=octre;
                dec= dec-oct[i];
                dec=(dec/8);
                i++;
          }
          for( var j=oct.length-1;j>=0;j--){
              result += oct[j];
          }

          document.getElementById('out').value=result;

      }
