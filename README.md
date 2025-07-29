# Student Affairs Platform  
## Description
* The project is built mainly for "IS231" course project submittion.  
* Project requirements are declared by "IS231" course instructor.  
* The main pages built using HTML, CSS, and AJAX.  
* Backend functions are written in Python (Django Framework).  
* Client side validations are written in JavaScript.  
---
## Project Requirements  
1. User add a new student to the system. Student information includes id, name,  
date of birth, GPA, gender, level, status=”active”, “inactive”, department, email,  
mobile number.  

2. User update an existing student information (except department field should be  
shown disabled for editing).  

3. User can delete an existing student data through a delete button in edit student  
data page with a confirmation dialogue for the action before deletion occurs.  

4. User search for “active” students by name in search for students screen and  
students with similar names having active status should be rendered as a table.  

5. User can select a specific student after searching to assign a department through  
the student’s department assignment page. The page should include student ID,  
name and a dropdown list for available departments and a submit button.This  
action is applicable for students if level = 3 else an error should be shown to the  
user with a clear understandable error message.  

6. User can view all active/inactive students in a separate page rendered in a table  
with a related set of attributes only.  

7. User can change the status of student from active to inactive or vice versa from  
the table viewing all students.  

8. Website should have a well-designed navigation bar to go through all pages and  
a home page.
---
## Running the Project Locally

## Follow these steps to clone and run the Django project locally:

1. Clone the Repository
Clone the repository to your local machine using the following command:
git clone https://github.com/fatmaashraf1/student-affairs-platform.git

Navigate into the project directory:
cd student_affairs

2. Set Up a Virtual Environment (Optional but Recommended)
Create a virtual environment to isolate your project dependencies:
python3 -m venv venv

Activate the virtual environment:
macOS/Linux:
source venv/bin/activate
Windows:
.\venv\Scripts\activate

3. Install the Required Dependencies
Install the project dependencies listed in the requirements.txt file:
pip install -r requirements.txt

4. Apply Database Migrations
Run the following command to apply migrations and set up the database:
python3 manage.py migrate

5. Run the Development Server
Start the Django development server:
python3 manage.py runserver

Open your web browser and go to http://127.0.0.1:8000/ to view the website.

---
## Authors
* **Fatma Elzahraa Serry** - [fatmaashraf1](https://github.com/fatmaashraf1)  
* **Yousef Magdy Eldaly** - [YousefEldaly](https://github.com/YousefEldaly)  
* **Yousef Karam** - [callmejoee](https://github.com/callmejoee)  
* **Noor Hatem** - [noorshehab](https://github.com/noorshehab)
* **Belal Ahmed Eid** - [beboDbale](https://github.com/beboDbale)  
* **Zeyad Ehab El Naggar** - [Zeyad-ElNaggar](https://github.com/Zeyad-ElNaggar)


