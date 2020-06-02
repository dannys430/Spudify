class UsersController < ApplicationController
  
  before_action :ensure_signed_in, only: [:index, ]

  def new
    @user = User.new

  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def user_params
    params.require(:user).permit(:email, :password, :name, :birth_date, :gender)
  end

end
