class CreatePersonItems < ActiveRecord::Migration
  def change
    create_table :person_items do |t|
      t.string :person
      t.integer :item_id

      t.timestamps
    end
  end
end
