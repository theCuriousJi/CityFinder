class Api::AddressesController < ApplicationController
  def index
    if params[:zip]
      @address = Address.where(zip: params[:zip])
      render json: @address
    end
  end
end
