class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :owner_name
      t.integer :occupants
      t.string :address
      t.boolean :home_available
      t.string :color

      t.timestamps
    end
  end
end
