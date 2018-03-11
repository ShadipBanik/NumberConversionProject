<html>
 <head>
     <title> Convertor </title


</style>


</head>
<body>
 <div class="panel">

     <p>
         Enter decimal number to convert, select Base and click CONVERT.
     </p>

     <form>
         <input type="text">


     <select id="selectid" name="selectname">
         <option value="binary">Binary</option>
         <option value="octal">Octal</option>
         <option value="hexadecimal">Hexadecimal</option>
     </select>

     <button id="button1" name="Button1" onclick="Answer()"> Convert
         </button>

         </form>


 </div>

 <div class="answer">
     <form>


     </form>

 </div>

 <script>


 function Answer() {

     if (document.getElementbyId ('selectid').value=="binary") {
         this.value=this.value.toString(2);
     }
     else if  (document.getElementbyId ('selectid').value=="octal") {
         this.value=this.value.toString(8);
     }
     else if  (document.getElementbyId ('selectid').value=="hexadecimal") {
         this.value=this.value.ToString(16);
     }
 }

 </script>

</body>
</html>
