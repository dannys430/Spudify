class Api::UsersController < ApplicationController
  
  before_action :ensure_signed_in, only: [:index, ]

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def user_params
    params.require(:user).permit(:email, :password, :name, :birth_date, :gender)
  end
end
