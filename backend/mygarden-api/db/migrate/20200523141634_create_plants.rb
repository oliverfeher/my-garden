class CreatePlants < ActiveRecord::Migration[6.0]
  def change
    create_table :plants do |t|
      t.string :name
      t.date :plant_date
      t.integer :days_to_harvest
      t.integer :user_id
    end
  end
end
