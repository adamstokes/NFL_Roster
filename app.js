function addPlayer(e) {
      e.preventDefault();
      var name = $('#name').val();
      var position = $('#position').val();
      var num = $('#num').val();
      
      var html = '<div class="player-card">' +
      '<div class="">' +
      '<div class="player-image"> <img src="Tecmo.png' +
      '<div>' +
      '<span>Player Name: </span>'+name +
      '</div>' +
      '<div>' +
      '<span>Position: </span>'+ position +
      '</div>' +
      '<div>' +
      '<span>Number: </span>'+num +
      '</div>' +
      '</div>' +
      '<button class="btn btn-danger remove-player">REMOVE</button></div>'
      
      
 $(".player-roster").append(html);     
}
$('#add-player-button').on('click', addPlayer);
$('.player-roster').on('click', '.remove-player', removePlayer);
function removePlayer(){
      var removeBtn = $(this);
      removeBtn.parent('.player-card').remove();
}
