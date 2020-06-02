class SessionsController < ApplicationController

  before_action :ensure_signed_in, only: [:destroy]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      sign_in(@user)
      #redirect
    else
      flash.now[:errors] = ['Invalid email or password']
      render :new
    end
  end

  def destroy
    sign_out
    #redirect
  end
  
end
