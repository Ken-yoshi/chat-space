json.image @message.image.url
json.content @message.content
json.user_name @message.user.name
# json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
json.time @message.created_at.to_s