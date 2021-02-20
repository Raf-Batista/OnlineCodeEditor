require 'rails_helper'

RSpec.describe "Users", type: :request do
    it "can successfully create a user" do 
        post "/users", params: {user: {username: "Test", password: "password123"}}

        expect(User.all.size).to eq(1)
    end 
end
