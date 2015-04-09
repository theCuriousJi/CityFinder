class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false

      t.timestamps null: false
    end

    add_index :addresses, :zip
  end
end
