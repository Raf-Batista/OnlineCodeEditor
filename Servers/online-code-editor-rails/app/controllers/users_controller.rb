class UsersController < ApplicationController
    def create 
        user = User.new(users_params)

        if user.valid? 
            user.save 
            render json: user, status: :created and return
        end 

        render json: { errors: user.errors.full_messages} and return
    end 

    private 

    def user_params 
        params.require(:user).permit(:username, :password)
    end 
end
