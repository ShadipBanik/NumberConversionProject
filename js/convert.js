function    convert() {

    var s1 = document.getElementById ('selectid1').value;
    var s2 = document.getElementById ('selectid2').value;

      if (s1==="decimal"  && s2 ==="binary" ) {
          deciToBinary();
      }
      else if  (s1==="decimal"  && s2==="octal") {
          deciToOctal();
      }
      else if  (s1==="decimal"  && s2==="hexadecimal") {
          deciToHexa();
      }
      else if  (s1==="decimal"  && s2==="decimal")  {
        var num=document.getElementById('input').value;
        document.getElementById('output').value=num;
      }

      //bin to  others
      else if (s1==="binary"  && s2 ==="decimal" ) {
          binToDec();
      }
      else if  (s1==="binary"  && s2==="octal") {
          binToOct();
      }
      else if  (s1==="binary"  && s2==="hexadecimal") {
          binToHex();
      }
      else if  (s1==="binary"  && s2==="binary")  {
        var num=document.getElementById('input').value;
        document.getElementById('output').value=num;
      }
      //octal to others
      else if (s1==="octal"  && s2 ==="decimal" ) {
          octToDec();
      }
      else if  (s1==="octal"  && s2==="binary") {
          octToBin();
      }
      else if  (s1==="octal"  && s2==="hexadecimal") {
          octToHex();
      }
      else if  (s1==="octal"  && s2==="octal")  {
        var num=document.getElementById('input').value;
        document.getElementById('output').value=num;
      }
      //hexadecimal to others
      else if (s1==="hexadecimal"  && s2 ==="decimal" ) {
          hexToDec();
      }
      else if  (s1==="hexadecimal"  && s2==="binary") {
          hexToBin();
      }
      else if  (s1==="hexadecimal"  && s2==="octal") {
          hexToOct();
      }
      else if  (s1==="hexadecimal"  && s2==="hexadecimal")  {
        var num=document.getElementById('input').value;
        document.getElementById('output').value=num;
      }
}
