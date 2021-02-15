class RubyScriptsController < ApplicationController
    def execute 
        binding.pry
        code = params[:code]
    
        begin 
            code_executed = SafeRuby.eval(code)
            render json: code_executed
        catch Exception 
            render json: error: 'bundle error'
        end 
        
    end 
end
