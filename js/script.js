$(document).ready(function() {

  console.log('jQuery is ready');

  var url = 'https://wind-bow.gomix.me/twitch-api/';
  var streams = 'streams/';

  // This is declaring the list of users
  var twitchChannels = ["freecodecamp", "nintendo", "food", "bobross", "RobotCaleb", "noobs2ninjas", "habathcx"];

  for (var i = 0;i < twitchChannels.length;i++) {
    status(twitchChannels[i]);
  }


  function status(user) {
    $.ajax({
      type: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      dataType: 'jsonp',
      url: url + '/channels/' + user + '?callback=?',
      success: function (data) {
        if (data['status'] == '404') {
          $("#invalid").html('<hr>' + user);
        } else {
          var channels = data;
          details(user, channels);
        }
      },
      error: function (errorMessage1) {
        console.log(errorMessage1);
      }
    });
  }

  function details (user, channels) {
    console.log(channels);
    $.ajax({
      type: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      dataType: 'jsonp',
      url: url + streams + user + '?callback=?',
      success: function (data) {
        console.log('this is the stream data: ', data);
        stream = data.stream;
        logo = channels.logo;
        // console.log('this is the logo: ', logo);
        getHTML(user, status, logo, channels['status'], channels['url']);
      },
      error: function (errorMessage2) {
        console.log(errorMessage2);
      }
    });
  }; // end of function details

  function getHTML (user, status, logo, statusblurb, userURL) {
    // console.log(status);
    if (stream == null) {
          var offlineBtn = '<button type="button" class="btn btn-danger offlineBtn">offline</button>';
          $('#output').append('<div class="channels media"><div class="media-left"><img class="logo media-body" src ="' + logo + '"/></div><div id="name" class="media-body"><h3>' + user.toUpperCase() + '</h3><p>' + statusblurb + '</p></div><div class="button">' + offlineBtn + '</div>');
        } else {
          var onlineBtn = '<button type="button" class="btn btn-success onlineBtn">online</button>';
          $('#output').append('<div class="channels media"><div class="media-left"><img class="logo media-body" src ="' + logo + '"/></div><div id="name" class="media-body"><h3>' + user.toUpperCase() + '</h3><p>' + statusblurb + '</p></div><div class="button"><a href="' + userURL + '" target="_blank">' + onlineBtn + '</a></div>');
        }
  }; // end of function getHTML

}); // end of jQuery