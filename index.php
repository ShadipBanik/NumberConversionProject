<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/deci_to_bin.js"></script>
    <script src="../js/deci_to_hex.js"></script>
    <script src="../js/deci_to_oct.js"></script>
    <script src="../js/BinToDec.js"></script>
    <script src="../js/BinToOct.js"></script>
    <script src="../js/Bin_TO_Hex.js"></script>
    <script src="../js/Oct_To_Deci.js"></script>
    <script src="../js/Oct_To_Bin.js"></script>
    <script src="../js/Oct_To_Hex.js"></script>
    <script src="../js/Hex_To_dec.js"></script>
    <script src="../js/Hex_To_Bin.js"></script>
    <script src="../js/Hex_To_Oct.js"></script>
  </head>
  <body>
      <div class="center">
         <h1>
              Enter Decimal number to convert, select Base and click CONVERT.
         </h1>
         <input class=""type="text" id="emo" style="height: 42px;width: 205px;" ></input>
         <input class="button"type="button" onclick="deciToBinary()"  value="decToBin"/>
         <input class="button"type="button" onclick="deciToOctal()"  value="decToOct"/>
         <input class="button"type="button" onclick="deciToHexa()"  value="decToHex"/>
         <textarea name="name" id="res" rows="3" style="margin-bottom:-20px;" cols="30"></textarea>

         <br>
         <br>

         <h1>
              Enter Binary number to convert, select Base and click CONVERT.
         </h1>
         <input class=""type="text" id="binInput" style="height:42px;width: 205px;" ></input>
         <input class="button"type="button" onclick="binToDec()"  value="binToDec"/>
         <input class="button"type="button" onclick="binToOct()"  value="binToOct"/>
         <input class="button"type="button" onclick="binToHex()"  value="binToHex"/>
         <textarea name="name" id="out" rows="3" style="margin-bottom:-20px;" cols="30"></textarea>

         <br>
         <br>

         <h1>
              Enter Octal number to convert, select Base and click CONVERT.
         </h1>
         <input class=""type="text" id="octInput" style="height:42px;width: 205px;" ></input>
         <input class="button"type="button" onclick="octToDec()"  value="octToDec"/>
         <input class="button"type="button" onclick="octToBin()"  value="octToBin"/>
         <input class="button"type="button" onclick="octToHex()"  value="octToHex"/>
         <textarea name="name" id="Octout" rows="3" style="margin-bottom:-20px;" cols="30"></textarea>

        <br>
        <br>

        <h1>
             Enter Hexadecimal number to convert, select Base and click CONVERT.
        </h1>
        <input class=""type="text" id="hexInput" style="height:42px;width: 205px;" ></input>
        <input class="button"type="button" onclick="hexToDec()"  value="hexToDec"/>
        <input class="button"type="button" onclick="hexToBin()"  value="hexToBin"/>
        <input class="button"type="button" onclick="hexToOct()"  value="hexToOct"/>
        <textarea name="name" id="Hexout" rows="3" style="margin-bottom:-20px;" cols="30"></textarea>

      </div>




  </body>
</html>
