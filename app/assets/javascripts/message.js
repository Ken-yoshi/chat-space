$(function() {
     function buildHTML(message){
        let insertImage = '';
        if (message.image) {
            insertImage = `<img src="${message.image}">`;
        }
        let html =
            `<div class = "message" data-message-id = "${message.id}">
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
                    ${insertImage}
                </div>
            </div>`;
        return html
    };

    let reloadMessages = function() {
      let last_message_id = $(".message:last").data("message-id")
      $.ajax( {
        url: "api/messages",
        type: "get",
        dataType: "json",
        data: {id: last_message_id}
      })
      .done(function(messages) {
        let insertHTML = "";
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $(".tweet").append(insertHTML);
      })
      .fail(function() {
        alert("エラー");
      });
    };

  $("#new_message").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action")
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data);
      $(".tweet").append(html);
      $('.tweet').animate({ scrollTop: $('.tweet')[0].scrollHeight}, "fast" );
      $("form")[0].reset();
      $( ".send_btn").prop( "disabled", false );
    })
    .fail(function() {
      alert("エラー");
    })
  });
  $(function() {
    if (location.pathname.match(/\/groups\/\d+\/messages/) )
    setInterval(reloadMessages, 7000);
  });
 });
