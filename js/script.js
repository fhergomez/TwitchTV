$(document).ready(function() {

 console.log('jQuery is ready');

 var url = 'https://wind-bow.gomix.me/twitch-api/';
 var streams = 'streams/';
 var channels = ["freecodecamp", "nintendo", "food", "bobross"];
 var users = 'users/';
 var channel;

 function onLoad() {
   for (var i = 0;i < channels.length;i++) {
    channel = channels[i];
    // console.log(channel);


     $.ajax ({
        type: 'GET',
        headers:{
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        dataType: 'jsonp',
        url: url + streams + channel,
        success: function (data1) {
          stream = data1.stream;
          console.log(data1);
          console.log(stream);

          if (stream != null) {
            status = "Currently Online";
            $("#status").innerHTML = status;
          } else if (stream = null) {
            status = "Currently Offline";
            $("#status").innerHTML = status;
          }
        },
        error: function (errorMessage1) {
          console.log(errorMessage1);
        }
     });

     $.ajax ({
        type: 'GET',
        headers:{
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        dataType: 'jsonp',
        url: url + users + channel,
        success: function (data2) {
          console.log(data2);
          var name = data2.display_name;
          console.log(name);
          var logo = data2.logo;
          $('#output').prepend('<li><img class="logo" target="_blank" src ="' + logo + '"/></li>');
          console.log(logo);
        },
        error: function (errorMessage2) {
          console.log(errorMessage2);
        }
      });
    }
  };

  onLoad();
});