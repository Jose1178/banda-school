# create 10 courses
10.times do
    course = Course.create(
      name: Faker::Educator.course_name,
      description: Faker::Lorem.sentence
    )
    # create a related fee for each course
    Fee.create(
      title: "Fee for #{course.name}",
      amount: Faker::Number.between(from: 1000, to: 10000),
      course_id: course.id
    )
    # create a random number of units (between 5 and 7) for each course
    units = []
    rand(5..7).times do
      unit = Unit.create(
        name: Faker::Educator.course_name,
        description: Faker::Lorem.sentence
      )
      units << unit
    end
    # associate the units with the course and any previous courses
    units.each do |unit|
      course.units << unit
    end
  end
  # create 40 students and relate them to a random course
  40.times do
    course = Course.order("RANDOM()").first
    student = Student.create(
      name: Faker::Name.name,
      admission_number: Faker::Number.number(digits: 8),
      email: Faker::Internet.email,
      id_number: Faker::Number.number(digits: 8),
      gender: Faker::Gender.binary_type,
      course_id: course.id,
      fee_paid: Faker::Number.between(from: 1000, to: 10000),
      password_digest: "password"
    )
  end
