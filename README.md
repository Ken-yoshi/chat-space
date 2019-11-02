# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|user|string|null:false|

### Association
- has_many :group
- belongs_to :body
- belongs_to :image

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false, foreign_key: true|
|group|string|null:false|

### Association
- belongs_to :user

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false|
|body|text||
|user_id|integer|null:false|
|group_id|integer|null: false|

### Association
- has_many :user
- has_many :group
- has_many :images_messages
- has_many :images, through: :images_messages

## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|image_id|integer|null: false|
|image|string||
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
- has_many :user
- has_many :group
- has_many :images_messages
- has_many :messages, through: :images_messages


## images_messagesテーブル

|Column|Type|Options|
|------|----|-------|
|image_id|integer|null: false|
|message_id|integer|null: false|

### Association
- belongs_to :image_id
- belongs_to :message_id