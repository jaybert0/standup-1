class HousesController < ApplicationController #== RESPONSE
  # C. R. U. D

  # Read
  def index 
    # this routes should show EVERY house (all)
    render json: House.all, status: :ok
  end

  # Read
  def show
    # this routes should show 1 individual house tied into id params
    house = House.find(params[:id])
    render json: house
  end

  # Update
  def update
    house = House.find_by(id: params[:id])
    house.update!(house_params)
    # binding.pry / byebug
  end 

  # create

  def create
    house = House.create!(house_params)
    render json: house, status: :created
    
  end 

  # Delete
  def destroy
    house = House.find_by(id: params[:id])
    house.destroy

    head :no_content
    render json: {}, status: :ok
  end


  private
  def house_params #SECURITY
    params.permit(:owner_name, :occupants, :address, :home_available, :color)
  end

end
