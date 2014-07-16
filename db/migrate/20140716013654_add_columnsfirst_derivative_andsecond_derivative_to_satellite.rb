class AddColumnsfirstDerivativeAndsecondDerivativeToSatellite < ActiveRecord::Migration
  def change
    add_column :satellites, :first_derivative, :float
    add_column :satellites, :second_derivative, :float
  end
end
