require 'rails_helper'

RSpec.describe "RubyScripts", type: :request do
<<<<<<< HEAD
    it 'can execute code' do 
        post '/execute', params: { code: '1 + 1' }
=======
    it "can execute code" do 
        post "/execute", params: { code: "1 + 1"}
>>>>>>> Account

        json_response = JSON.parse(response.body)

        expect(json_response).to eq(2)
    end 
end
