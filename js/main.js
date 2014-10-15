$("button").hover(function() {
    var buttonClass = $(this).attr('class');
    var buttonData = $(this).data();
    $(this).prevAll("button." + buttonClass).addClass("bg");
}, function() {
    $(this).prevAll().removeClass("bg");
});

$("button").on("click", function() {
    var buttonData = $(this).data("meta");
    var buttonClass = $(this).attr('class');
    $("button").removeClass("selected");
    $("#copy-button").text("Copy " + buttonData);
    
    $(this).prevAll("button." + buttonClass).andSelf().addClass("selected");
});
   var copytext = "";
      function getIpsum(amount) {
        $("#lorem").empty();
        var lorem = new Lorem;
        lorem.type = Lorem.TEXT;
        lorem.query = amount;
        lorem.createLorem(document.getElementById('lorem'));
        copyText = $("#lorem").text();

        var client = new ZeroClipboard( $("#copy-button") );
        client.on( 'load', function(client) {

          client.on( 'datarequested', function(client) {
            $("button").removeClass("selected");
            $("#copy-button").text("Copied!");
            var text = copyText;
            client.setText(text);
          });
         
          // callback triggered on successful copying
          client.on( 'complete', function(client, args) {
            console.log("Text copied to clipboard: \n" + args.text );
          });
        });
         
        // In case of error - such as Flash not being available
        client.on( 'wrongflash noflash', function() {
          ZeroClipboard.destroy();
        } );
 
    };

ZeroClipboard.config( { moviePath: 'ZeroClipboard.swf' } );