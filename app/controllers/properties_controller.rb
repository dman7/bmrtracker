class PropertiesController < ApplicationController

  def index
    @properties = Property.all
  end

  # GET /property/1
  def show
    @property = Property.find(params[:id])
  end

end
