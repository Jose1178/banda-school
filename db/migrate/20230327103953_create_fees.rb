class CreateFees < ActiveRecord::Migration[7.0]
  def change
    create_table :fees do |t|
      t.string :title
      t.integer :amount
      t.integer :course_id

      t.timestamps
    end
  end
end
