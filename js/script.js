$(document).ready(function() {

 console.log('jQuery is ready');

 var url = 'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/';
 $.ajax ({
  type: 'GET',
  url: url,
  dataType: 'json',
  headers: config.CLIENT_ID,
  success: function (data) {
    console.log(data);
  },
  error: function (errorMessage) {
    console.log(errorMessage);
  }
 });

});