class UsersController < ApplicationController
    def create 
        user = User.new(user_params)
        if user.valid? 
            user.save 
            render json: {username: user.username, codes: user.codes}, status: :created and return
        end 

        render json: { errors: user.errors.full_messages } and return
    end 

    private 

    def user_params 
        params.permit(:username, :password)
    end 
end
