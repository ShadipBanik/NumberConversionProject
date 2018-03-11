function octToDec(){
            var bin = document.getElementById('octInput').value;
            var n;
            var rem;
            var pow=1;
            var dec=0;
            while (bin>0) {
                  rem=bin%10;
                  dec=dec+(rem*pow);
                  bin=bin-rem;
                  bin=bin/10;
                  pow=pow*8;
            }

            document.getElementById('Octout').value=dec;

        }
