class Api::SessionsController < ApplicationController

  before_action :ensure_signed_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 422
    end
  end

  def destroy
    sign_out
    render json: { message: 'Logout successful.' }
  end
end
