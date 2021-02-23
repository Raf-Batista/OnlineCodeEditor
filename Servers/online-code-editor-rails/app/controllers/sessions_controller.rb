class SessionsController < ApplicationController
    def create 
        user = User.find_by(username: params[:username])

        if user.authenticate(params[:password]) then render json: {username: user.username, id: user.id, codes: user.codes}, status: :ok and return end
        
        render json: {errors: 'username or password incorrect'} and return
        
    end 

    private 

    def user_params 
        params.permit(:username, :password)
    end 
end
