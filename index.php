<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="css/style.css"/>
    <script src="js/deci_to_bin.js"></script>
    <script src="js/deci_to_hex.js"></script>
    <script src="js/deci_to_oct.js"></script>
    <script src="js/BinToDec.js"></script>
    <script src="js/BinToOct.js"></script>
    <script src="js/Bin_TO_Hex.js"></script>
    <script src="js/Oct_To_Deci.js"></script>
    <script src="js/Oct_To_Bin.js"></script>
    <script src="js/Oct_To_Hex.js"></script>
    <script src="js/Hex_To_dec.js"></script>
    <script src="js/Hex_To_Bin.js"></script>
    <script src="js/Hex_To_Oct.js"></script>
    <script src="js/convert.js"></script>
  </head>
  <body>
      <div class="center">
        <h1>
             Enter Decimal number to convert, select Base and click CONVERT.
        </h1>
        <div class="content">
          <div class="elmnt1">
             <br><br>

         <select id="selectid1" name="selectname">
             <option value="decimal">Decimal</option>
             <option value="binary">Binary</option>
             <option value="octal">Octal</option>
             <option value="hexadecimal">Hexadecimal</option>

        </select><br>
        <input class=""type="text" id="input" style="height: 42px;width: 205px" ></input>
        </div>
       <div class="elemnt2">
         <br><br>
         <select id="selectid2" name="selectname">
             <option value="decimal">Decimal</option>
             <option value="binary">Binary</option>
             <option value="octal">Octal</option>
             <option value="hexadecimal">Hexadecimal</option>

        </select><br>
        <textarea name="name" id="output" rows="3" style="margin-bottom:-20px;" cols="30"></textarea>
        </div>

        <input class="button" type="button" name=""onclick="convert()" value="CONVERT"/>

       </div>
      </div>




  </body>
</html>
