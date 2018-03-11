function deciToHexa(){
             var result = "";
             var k = 0;
             var nmb=document.getElementById('emo').value;
             var i=0;
             var bin= new Array();
             var re;
             while (nmb>0) {
                   re = (nmb%16);
                   bin[i]=re;
                   nmb= nmb-bin[i];
                   nmb=(nmb/16);
                   i++;
             }

             for( var j=bin.length-1;j>=0;j--){

               switch (bin[j]) {
                 case 10:
                     bin[j]="A";
                   break;
                 case 11:
                    bin[j]="B";
                   break;
                 case 12:
                     bin[j]="C";
                   break;
                 case 13:
                     bin[j]="D";
                   break;
                 case 14:
                     bin[j]="E";
                   break;
                 case 15:
                     bin[j]="F";
                   break;

               }
                result += bin[j];
               }
               document.getElementById('res').value =result;
}
