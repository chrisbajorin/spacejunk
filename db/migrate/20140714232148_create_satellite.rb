class CreateSatellite < ActiveRecord::Migration
  def change
    create_table :satellites do |t|
      t.string :norad_id
      t.date :launch_date
      t.float :epoch_date
      t.float :b_star
      t.float :inclination
      t.float :right_asc
      t.float :eccentricity
      t.float :perigee
      t.float :mean_anomoly
      t.float :mean_motion
      t.integer :orbit_number

    end
  end
end
