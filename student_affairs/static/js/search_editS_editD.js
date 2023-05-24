
function confirmDelete(studentId) {
    if (confirm("Are you sure you want to delete this student?")) {
        // If user confirms, submit the form
        var form = document.createElement("form");
        form.method = "POST";
        form.action = "{% url 'delete_student' %}";

        var csrf = document.createElement("input");
        csrf.setAttribute("type", "hidden");
        csrf.setAttribute("name", "csrfmiddlewaretoken");
        csrf.setAttribute("value", "{{ csrf_token }}");
        form.appendChild(csrf);

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", "student_id");
        input.setAttribute("value", studentId);
        form.appendChild(input);

        document.body.appendChild(form);
        form.submit();
    } else {
        // If user cancels, do nothing
    }
}