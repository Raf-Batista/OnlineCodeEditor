class CodesController < ApplicationController
    def create 
        user = User.find_by(username: params[:username])
        if user then user.codes.build(code_params) end 
        if user.save then render json: 'Created', status: :created and return end

        render json: {errors: 'Failed to save code'} and return end

        private 

        def code_params 
            params.require(:code).permit(:title, order: [], date: {})
        end 
    end 
end
