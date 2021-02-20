require 'rails_helper'

RSpec.describe "RubyScripts", type: :request do
    it "can execute code" do 
        post "/execute", params: { code: "1 + 1"}

        json_response = JSON.parse(response.body)

        exxpect(json_response).to eq(2)
    end 
end
