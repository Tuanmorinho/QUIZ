const questions = [{
    idQuestion: 1,
    idTest: 654321,
    ordinal: 1,
    typeQuestion: 'Select one',
    question: 'Nếu không thiết lập thuộc tính truy cập cho thành phần của lớp thì thành phần đó sẽ có phạm vi truy cập gì?',
    answers: [
        { idAnswer: 1, answer: 'Bên trong lớp' },
        { idAnswer: 2, answer: 'Không ý nào đúng' },
        { idAnswer: 3, answer: 'Bên ngoài gói' },
        { idAnswer: 4, answer: 'Bên trong gói' }
    ]
},
{
    idQuestion: 2,
    idTest: 654321,
    ordinal: 2,
    typeQuestion: 'Select one',
    question: 'Biểu đồ Use case mô tả:',
    answers: [
        { idAnswer: 1, answer: 'Quan hệ giữa các tiến trình hệ thống' },
        { idAnswer: 2, answer: 'Mối quan hệ giữa chủ thể và các trường hợp sử dụng' },
        { idAnswer: 3, answer: 'Mối quan hệ giữa các đối tượng' },
        { idAnswer: 4, answer: 'Các bảng trong CSDL' }
    ]
},
{
    idQuestion: 3,
    idTest: 654321,
    ordinal: 3,
    typeQuestion: 'Select one',
    question: 'Một thể hiện của một lớp generic là:',
    answers: [
        { idAnswer: 1, answer: 'Một đối tượng với kiểu bên trong được xác định cụ thể' },
        { idAnswer: 2, answer: 'Một đối tượng với kiểu bên trong không được xác định cụ thể' },
        { idAnswer: 3, answer: 'Một đối tượng không có kiểu dữ liệu' },
        { idAnswer: 4, answer: 'Một đối tượng có kiểu trống' }
    ]
},
{
    idQuestion: 4,
    idTest: 654321,
    ordinal: 4,
    typeQuestion: 'Select one',
    question: 'Một lớp có thể định nghĩa tối đa bao nhiêu hàm thiết lập?',
    answers: [
        { idAnswer: 1, answer: '0' },
        { idAnswer: 2, answer: '2' },
        { idAnswer: 3, answer: 'Không giới hạn' },
        { idAnswer: 4, answer: '1' }
    ]
},
{
    idQuestion: 5,
    idTest: 654321,
    ordinal: 5,
    typeQuestion: 'Select one',
    question: 'Đâu là đặc điểm của hình mẫu Adapter:',
    answers: [
        { idAnswer: 1, answer: 'Được sử dụng để tách biệt lớp mang phương thức và lớp mang thuộc tính' },
        { idAnswer: 2, answer: 'Chuyển đổi giao diện của một lớp sang một giao diện khác mà client mong muốn' },
        { idAnswer: 3, answer: 'Luôn có hàm trả về đối tượng cần sử dụng trong lớp giao diện' },
        { idAnswer: 4, answer: 'Chỉ một đối tượng  duy nhất của lớp được sử dụng trong toàn chương trình' }
    ]
},
{
    idQuestion: 6,
    idTest: 654321,
    ordinal: 6,
    typeQuestion: 'Select one',
    question: 'Trong sử dụng package, thao tác import  một package nghĩa là :',
    answers: [
        { idAnswer: 1, answer: 'Khởi tạo một package mới' },
        { idAnswer: 2, answer: 'Đóng package' },
        { idAnswer: 3, answer: 'Mở khả năng truy cập tới một số thành phần nhất định trong package' },
        { idAnswer: 4, answer: 'Không ý nào đúng' }
    ]
},
{
    idQuestion: 7,
    idTest: 654321,
    ordinal: 7,
    typeQuestion: 'Select one',
    question: 'Thuộc tính của một lớp là gì?',
    answers: [
        { idAnswer: 1, answer: 'Hàm thành phần' },
        { idAnswer: 2, answer: 'Hàm thành phần tĩnh' },
        { idAnswer: 3, answer: 'Biến thành phần' },
        { idAnswer: 4, answer: 'hông có đáp án nào đúng.' }
    ]
},
{
    idQuestion: 8,
    idTest: 654321,
    ordinal: 8,
    typeQuestion: 'Select one',
    question: 'Hình mẫu thiết kế Factory có mục đích chính là gì:',
    answers: [
        { idAnswer: 1, answer: 'Tách phần trừu tượng và thực thi thành 2 nhánh thừa kế khác nhau' },
        { idAnswer: 2, answer: 'Làm cầu nối cho việc sử dụng chức năng của lớp này trong giao diện của lớp khác' },
        { idAnswer: 3, answer: 'Cung cấp phương thức khởi tạo đối tượng cho các lớp con' },
        { idAnswer: 4, answer: 'Cung cấp đối tượng duy nhất của lớp' }
    ]
},
{
    idQuestion: 9,
    idTest: 654321,
    ordinal: 9,
    typeQuestion: 'Select one',
    question: 'Ý nào sai khi nói đến khả năng truy cập thành phần tĩnh?',
    answers: [
        { idAnswer: 1, answer: 'Đối tượng cần phải được khởi tạo trước khi gọi hàm thành phần tĩnh' },
        { idAnswer: 2, answer: 'Hàm thành phần tĩnh chỉ có thể truy cập đến thành phần dữ liệu tĩnh' },
        { idAnswer: 3, answer: 'Hàm thành phần tĩnh có thể được gọi mà không cần qua đối tượng' },
        { idAnswer: 4, answer: 'Các hàm thành phần đều có thể truy cập vào thành phần tĩnh' }
    ]
},
{
    idQuestion: 10,
    idTest: 654321,
    ordinal: 10,
    typeQuestion: 'Select one',
    question: 'Biểu đồ Class mô tả:',
    answers: [
        { idAnswer: 1, answer: 'Mối quan hệ giữa chủ thể và các trường hợp sử dụng' },
        { idAnswer: 2, answer: 'Mối quan hệ giữa các đối tượng' },
        { idAnswer: 3, answer: 'Các bảng trong CSDL' },
        { idAnswer: 4, answer: 'Quan hệ giữa các tiến trình hệ thống' }
    ]
}]


// status 0: chưa đến time làm, status 1: đến time làm bài, status 2: bài thi đã làm
const tests = [
    {
        idTest: 654321,
        nameTest: 'Bài KTGK OOP',
        class: '63IT4',
        teacher: 'Trần Văn Thọ',
        status: 1,
        time: 180
    },
    {
        idTest: 123456,
        nameTest: 'Bài KTGK môn LTDM',
        class: '63IT2',
        teacher: 'Lê Đức Quang',
        status: 2,
        time: 120
    },
    {
        idTest: 171200,
        nameTest: 'Bài TH3 môn LTDM',
        class: '63IT2',
        teacher: 'Lê Đức Quang',
        status: 2,
        time: 90
    }
]

const myAccount = {
    id: '1547463',
    name: 'Lê Quang Tuấn',
}

export { questions, myAccount, tests };