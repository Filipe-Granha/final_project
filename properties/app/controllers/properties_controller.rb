class PropertiesController < ApplicationController
  
  def index
    # @properties = [{Address: "London"}, {Address: "Edinburgh"}]
    # render :json => @properties
    # @properties = Property.all
    # respond_to do |format|
    #   format.html
    #   format.json{ render :json => @properties }
    properties = Property.all
    render :json => properties
  end

  def show
    property = Property.find(params[:id])
    render :json => property
  end

  def property_params
    params.require(:property).permit([:location, :rooms, :counciltax, :rent])
  end

  def create
    property = Property.create(property_params)
    render :json => property
  end

  def update
    property = Property.find(params[:id])
    if property.update_attributes(property_params)
      render :json => property
    else
      render :json => { status: :update_failed}
    end
  end

  def destroy
    property = Property.find(params[:id])
    if property.destroy!
      render :json => {status: :success}
    else
      render :json => { status: :delete_failed}
    end
  end

end