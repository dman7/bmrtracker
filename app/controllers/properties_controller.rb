class PropertiesController < ApplicationController

  respond_to :json, :html

  def index
    @properties = Property.all
  end

  # GET /property/1
  def show
    @property = Property.find(params[:id])
    respond_with @property
  end

end
