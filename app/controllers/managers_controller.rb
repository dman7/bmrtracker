class ManagersController < ApplicationController
  respond_to :json, :html

  def index
    @managers = Manager.all
    respond_with @managers
  end

  # GET /property/1
  def show
    @manager = Manager.find(params[:id])
    respond_with @manager
  end

end
