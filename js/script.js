$(document).ready(function() {

 console.log('jQuery is ready');

 var url = 'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/';
 $.ajax ({
  type: 'GET',
  url: url,
  dataType: 'json',
  headers:{
    'Client-ID': 'y2v1et51byje4zrtyp0bkjnu4qw3li'
  },
  success: function (data) {
    console.log(data);
    $('.logo').html('<a href="' + data.follows[0].channel.url + '" target="_">' + data.follows[0].channel.name + '</a>');
  },
  error: function (errorMessage) {
    console.log(errorMessage);
  }
 });

});