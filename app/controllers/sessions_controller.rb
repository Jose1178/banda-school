class SessionsController < ApplicationController
    def create
        student = Student.find_by(admission_number: params.dig(:login, :admission_number))
        if student&.authenticate(params.dig(:login, :password))
          session[:student_id] = student.id
          render json: student, status: :created
        else
          render json: { message: "Password or Admission number is invalid" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :student_id
        head :no_content
    end
end
