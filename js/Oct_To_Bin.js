function octToBin(){
            var oct = document.getElementById('octInput').value;
            var n;
            var rem;
            var pow=1;
            var dec=0;
            //Again convert octal to decimal;
            var bin= new Array();
            var binre;
            var i=0;
            var result="";

            while (oct>0) {
                  rem=oct%10;
                  dec=dec+(rem*pow);
                  oct=oct-rem;
                  oct=oct/10;
                  pow=pow*8;
            }

            while (dec>0) {
                  binre = (dec%2);
                  bin[i]=binre;
                  dec= dec-bin[i];
                  dec=(dec/2);
                  i++;
            }

            for( var j=bin.length-1;j>=0;j--){
                result += bin[j];
                }

            document.getElementById('Octout').value=result;

        }
