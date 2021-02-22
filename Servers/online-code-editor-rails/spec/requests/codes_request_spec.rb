require 'rails_helper'

RSpec.describe "Codes", type: :request do
  it "can save a user's code" do 
    user = User.create(username: 'test', password: 'password123')

    params = {
      user_id: user.id,
      code: {
        title: 'test',
        order: ['a3gd', '33ga'],
        data: {
          uk78k: {
            content: '#Test',
            type: 'text',
            id: 'uk78k'
          },
          bszat: {
            content: 'const a = 1;',
            type: 'javascript',
            id: 'bszat'
          }
        }
      }
    }

    post "/users/#{user.id}/codes", params: params
     
    expect(Code.all.size).to eq(1)
  end 
end
