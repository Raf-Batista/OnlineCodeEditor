Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/execute', to: 'ruby_scripts#execute'

  resources :users do 
    resources :codes, only: [:create]
  end 

  post '/sessions', to: 'sessions#create'
end
