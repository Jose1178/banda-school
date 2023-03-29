class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :gender, :admission_number, :id_number
    belongs_to :course
end  