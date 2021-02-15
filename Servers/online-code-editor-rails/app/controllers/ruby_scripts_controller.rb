class RubyScriptsController < ApplicationController
    def execute 
        code = params[:code]
        if code.include?('Kernel' || 'System') then render json: {error: 'bundle failed'} end 
        executed_code = eval(code)

        render json: executed_code, status: :ok and return
    end 
end
