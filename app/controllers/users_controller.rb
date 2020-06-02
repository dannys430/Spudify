class UsersController < ApplicationController
  
  before_action :ensure_signed_in, only: [:index, ]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      #redirect
    else
      flash.now[:errors] = @user.errors.full_messages
      # render json: @user.errors.full_messages
      render :new
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
