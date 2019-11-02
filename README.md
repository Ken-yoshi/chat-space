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

## groupテーブル

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

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false|
|body|text||
|user_id|integer|null:false|
|group_id|integer|null: false|

### Association
- has_many :user
- has_many :group

## imageテーブル

|Column|Type|Options|
|------|----|-------|
|image_id|integer|null: false|
|image|string||
|user_id|integer||
|group_id|integer||


### Association
- has_many :user
- has_many :group