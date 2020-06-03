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

  def index
  end

  def show
    @user = selected_user
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
