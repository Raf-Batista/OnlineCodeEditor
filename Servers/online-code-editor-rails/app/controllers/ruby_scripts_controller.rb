class RubyScriptsController < ApplicationController
    def execute 
        code = params[:code]
<<<<<<< HEAD
        if code.include?('Kernel' || 'System') then render json: {error: 'bundle failed'} end 
=======

        if code.include?('Kernel' || 'System') then render json: {errors: 'bundle failed'} and return end 
            
        # HANDLE PRINT STATEMENTS

>>>>>>> Account
        executed_code = eval(code)

        render json: executed_code, status: :ok and return
    end 
<<<<<<< HEAD
=======

>>>>>>> Account
end
