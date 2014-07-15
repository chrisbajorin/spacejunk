class SatellitesController < ApplicationController

  # respond_to :json

  def index
    # date = Date.now.utc
    @satellites = Satellite.all
    respond_to do |format|
      format.html { @satellites = Satellite.all }
      format.json { render json: Satellite.all }
    end
  end


end
