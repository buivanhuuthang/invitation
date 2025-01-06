// Đọc danh sách nhân viên từ file JSON hoặc CSV
fetch('data/employees.json')
    .then(response => response.json())
    .then(data => {
        // Giả sử anh muốn mời người đầu tiên trong danh sách
        const employeeName = data.employees[0].name; // lấy tên nhân viên đầu tiên
        document.getElementById('invitee-name').textContent = employeeName;
    })
    .catch(error => console.error('Lỗi khi tải danh sách nhân viên:', error));
