class StudentsController < ApplicationController
    def logged_in
        student = Student.find_by(id: session[:student_id])
        if student
        render json: student
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    
end
