class ManagersController < ApplicationController
  respond_to :json, :html

  # GET /property/1
  def show
    @manager = Manager.find(params[:id])
    respond_with @manager
  end

end
