    function hexToBin(){

                var hex=[32];
                var  dec,i;
                var  cnt;   /*for power index*/
                var  dig;   /*to store digit*/
                hex= document.getElementById('hexInput').value;
                cnt=0;
                dec=0;
                // Again convert decimal to binary;
                var c=0;
                var bin= new Array();
                var re;
                var result="";

                for(i=hex.length-1;i>=0;i--)
                {
                    switch(hex[i])
                    {
                        case 'A':
                            dig=10; break;
                        case 'B':
                            dig=11; break;
                        case 'C':
                            dig=12; break;
                        case 'D':
                            dig=13; break;
                        case 'E':
                            dig=14; break;
                        case 'F':
                            dig=15; break;
                        default:
                            dig=hex[i];

                     }

                    dec =dec+ dig* Math.pow(16,cnt);
                    cnt++;
                }
              //Convert dec to binary;
                 while (dec!=0)
                 {
                      re = (dec%2);
                      bin[c]=re;
                      dec= dec-bin[c];
                      dec=(dec/2);
                      c++;
                  }

                for( var j=bin.length-1;j>=0;j--)
                    {
                    result += bin[j];
                    }

                    document.getElementById('Hexout').value=result;

    }
