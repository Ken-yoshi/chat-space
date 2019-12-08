$(function() {
  last_message_id = $(".message:last").data("messageId");
  console.log(last_message_id);
     function buildHTML(message){
      if (message.image) {
          var html = 
          `<div class = "message">
            <div class = "upper-message">
              <div class = "upper-message__user-name">
                ${message.user_name}
              </div>
              <div class = "upper-message__date">
                ${message.time}
              </div>
            </div>
            <div class = "lower-message">
              <p class = "lower-message__content">
                ${message.content}
              </p>
            </div>
            <img src="${message.image}" >
          </div>`
        return html
      } else {
        var html =
          `<div class = "message">
            <div class = "upper-message">
              <div class = "upper-message__user-name">
                ${message.user_name}
              </div>
              <div class = "upper-message__date">
                ${message.time}
              </div>
            </div>
            <div class = "lower-message">
              <p class = "lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html
      };
    }
    
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action")
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $(".tweet").append(html)
      $('.tweet').animate({ scrollTop: $('.tweet')[0].scrollHeight});
      $("form")[0].reset();
      $( ".send_btn").prop( "disabled", false );
    })
    .fail(function() {
      alert("エラー");
    })
  })
});