# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140716013654) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "satellites", force: true do |t|
    t.string  "norad_id"
    t.date    "launch_date"
    t.float   "epoch_date"
    t.float   "b_star"
    t.float   "inclination"
    t.float   "right_asc"
    t.float   "eccentricity"
    t.float   "perigee"
    t.float   "mean_anomoly"
    t.float   "mean_motion"
    t.integer "orbit_number"
    t.float   "first_derivative"
    t.float   "second_derivative"
  end

end