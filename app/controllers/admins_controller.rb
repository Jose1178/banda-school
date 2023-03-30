class AdminsController < ApplicationController

    #check if the admin is logged in
    #find the admin by their session id
    #If a admin is found, return their information as JSON with status as ok
    #If no admin is found, return an error as JSON with  status of 401 unauthorized
    
    def logged_in
        admin = Admin.find_by(id: session[:admin_id])
        if admin
        render json: admin, status: :ok
        else
        render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def index 
        admin = Admin.all 
        render json: admin, status: :ok
    end

    def create
        admin = Admin.create!(admin_params)
        render json: admin, status: :created  
    end

    def create_student
        student = Student.create!(student_params)
        render json: student, status: :created
    end
    
    def show
        student = Student.find_by(id: params[:id])
        render json: student, serializer: UserSerializer, status: :ok
    end

    
    def update
        student = Student.find(params[:id])
        student.update!(student_params)
        render json: student, status: :ok
    end

    def destroy
        student = Student.find(params[:id])
        student.destroy!(student_params)
        render json: student, status: :ok

    end

    private
    def admin_params
        params.require(:admin).permit(:name,:email, :password)
    end




end
