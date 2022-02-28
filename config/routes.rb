Rails.application.routes.draw do
  resources :houses, only:[:index, :create, :show, :update, :destroy] 
  # resources :houses, except:[:new, :edit] 

  # HTTP VERB -- URL/Route -- ACTION/method
  # get 'houses', to: 'houses#index' #read -- index / show ALL
  # get 'houses/:id', to: 'houses#show' #read -- show

  # get 'houses/new', to: 'houses#new' #read -- new --> FRONTEND DISPLAY THE FORM
  # post 'houses', to: 'houses#create' #create -- create

  # get 'houses/:id/edit', to: 'houses#edit' #read -- new --> FRONTEND DISPLAY THE FORM
  # patch 'houses/:id', to: 'houses#update'

  # delete 'houses/:id', to: 'houses#destroy' #delete -- delete/destroy
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end



# fetch('/houses/1') == REQUEST
# '/houses/1'
#  - ROUTE Step 1 hit routes file
#  - route file step 2 CONTROLLER
#  - CONTROLLER == REPONSE
# .then(resp.json())
# .then(this.setSet(resp)))
# .catch()