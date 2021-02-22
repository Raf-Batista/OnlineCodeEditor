class CodesController < ApplicationController
    def create 
        user = User.find_by(id: params[:user_id])
        if user then user.codes.build(code_params) end 

        if user.save then render json: {id: user.id, username: user.username, codes: user.codes}, status: :created and return end

        render json: {errors: 'Failed to save code'} and return 
    end 

    private 

    def code_params 
        params.require(:code).permit(:title, order: [], data: {})
    end 
end
