class StudentsController < ApplicationController
    def logged_in
        student = Student.find_by(id: session[:student_id])
        if student
        render json: student, status: :ok
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        student = Student.create!(student_params)
        render json: student, status: :created
    end

    private

    def student_params
        params.require(:student).permit(:name, :admission_number, :email, :password, :id_number, :gender)
    end
    
end
