class SessionsController < ApplicationController
    def create 
        user = User.find_by(:username)

        if user.authenticate(:password) then render json: user, status: :ok and return end
        
        render json: {errors: 'username or password incorrect'} and return
        
    end 

    private 

    def user_params 
        params.permit(:username. :password)
    end 
end
