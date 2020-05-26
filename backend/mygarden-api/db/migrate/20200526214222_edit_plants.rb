class EditPlants < ActiveRecord::Migration[6.0]
  def change
    add_column :plants, :status, :string, :default => "planted"
  end
end
