  function deciToBinary(){
          var result = "";
          var k = 0;
          var nmb=document.getElementById('emo').value;
          var i=0;
          var bin= new Array();
          var re;
          while (nmb>0) {
                re = (nmb%2);
                bin[i]=re;
                nmb= nmb-bin[i];
                nmb=(nmb/2);
                i++;
          }

          for( var j=bin.length-1;j>=0;j--){
              result += bin[j];
              }
          document.getElementById('res').value =result;
       }
