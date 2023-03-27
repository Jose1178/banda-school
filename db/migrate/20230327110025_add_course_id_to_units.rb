class AddCourseIdToUnits < ActiveRecord::Migration[7.0]
  def change
    add_column :units, :course_id, :integer
  end
end
