function hexToDec(){

  var hex=[32];
  var  dec,i;
  var  cnt;   /*for power index*/
  var  dig;   /*to store digit*/

  hex= document.getElementById('hexInput').value;


  cnt=0;
  dec=0;
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

              document.getElementById('Hexout').value=dec;

}
