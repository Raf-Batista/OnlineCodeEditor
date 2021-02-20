class CreateCodes < ActiveRecord::Migration[6.1]
  def change
    create_table :codes do |t|
      t.string :title
      t.string :order, array: true, default: []
      t.json :data

      t.timestamps
    end
  end
end
