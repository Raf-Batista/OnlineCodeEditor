require 'rails_helper'

RSpec.describe "RubyScripts", type: :request do
    it 'can execute code' do 
        post '/execute', params: {
            code: 'puts 123'
        }

    expect 1.to be(truthy)
    end 
end
