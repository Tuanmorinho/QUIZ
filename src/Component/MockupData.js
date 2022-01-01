const questions = [{
    idQuestion: 1,
    typeQuestion: 1,
    typeQuestionContent: 'Chọn một hoặc nhiều đáp án',
    question: 'Nếu không thiết lập thuộc tính truy cập cho thành phần của lớp thì thành phần đó sẽ có phạm vi truy cập gì?',
    answers: [
        { idAnswer: 1, answer: 'Bên trong lớp', your_choice: false},
        { idAnswer: 2, answer: 'Không ý nào đúng', your_choice: false},
        { idAnswer: 3, answer: 'Bên ngoài gói', your_choice: false},
        { idAnswer: 4, answer: 'Bên trong gói', your_choice: false}
    ]
},
{
    idQuestion: 2,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Biểu đồ Use case mô tả:',
    answers: [
        { idAnswer: 5, answer: 'Quan hệ giữa các tiến trình hệ thống', your_choice: false },
        { idAnswer: 6, answer: 'Mối quan hệ giữa chủ thể và các trường hợp sử dụng', your_choice: false },
        { idAnswer: 7, answer: 'Mối quan hệ giữa các đối tượng', your_choice: false },
        { idAnswer: 8, answer: 'Các bảng trong CSDL', your_choice: false }
    ]
},
{
    idQuestion: 3,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Một thể hiện của một lớp generic là:',
    answers: [
        { idAnswer: 9, answer: 'Một đối tượng với kiểu bên trong được xác định cụ thể', your_choice: false },
        { idAnswer: 10, answer: 'Một đối tượng với kiểu bên trong không được xác định cụ thể', your_choice: false },
        { idAnswer: 11, answer: 'Một đối tượng không có kiểu dữ liệu', your_choice: false },
        { idAnswer: 12, answer: 'Một đối tượng có kiểu trống', your_choice: false }
    ]
},
{
    idQuestion: 4,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Một lớp có thể định nghĩa tối đa bao nhiêu hàm thiết lập?',
    answers: [
        { idAnswer: 13, answer: '0', your_choice: false },
        { idAnswer: 14, answer: '2', your_choice: false },
        { idAnswer: 15, answer: 'Không giới hạn', your_choice: false },
        { idAnswer: 16, answer: '1', your_choice: false }
    ]
},
{
    idQuestion: 5,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Đâu là đặc điểm của hình mẫu Adapter:',
    answers: [
        { idAnswer: 17, answer: 'Được sử dụng để tách biệt lớp mang phương thức và lớp mang thuộc tính', your_choice: false },
        { idAnswer: 28, answer: 'Chuyển đổi giao diện của một lớp sang một giao diện khác mà client mong muốn', your_choice: false },
        { idAnswer: 19, answer: 'Luôn có hàm trả về đối tượng cần sử dụng trong lớp giao diện', your_choice: false },
        { idAnswer: 20, answer: 'Chỉ một đối tượng  duy nhất của lớp được sử dụng trong toàn chương trình', your_choice: false }
    ]
},
{
    idQuestion: 6,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Trong sử dụng package, thao tác import  một package nghĩa là :',
    answers: [
        { idAnswer: 21, answer: 'Khởi tạo một package mới', your_choice: false },
        { idAnswer: 22, answer: 'Đóng package', your_choice: false },
        { idAnswer: 23, answer: 'Mở khả năng truy cập tới một số thành phần nhất định trong package', your_choice: false },
        { idAnswer: 24, answer: 'Không ý nào đúng', your_choice: false }
    ]
},
{
    idQuestion: 7,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Thuộc tính của một lớp là gì?',
    answers: [
        { idAnswer: 25, answer: 'Hàm thành phần', your_choice: false },
        { idAnswer: 26, answer: 'Hàm thành phần tĩnh', your_choice: false },
        { idAnswer: 27, answer: 'Biến thành phần', your_choice: false },
        { idAnswer: 28, answer: 'hông có đáp án nào đúng.', your_choice: false }
    ]
},
{
    idQuestion: 8,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Hình mẫu thiết kế Factory có mục đích chính là gì:',
    answers: [
        { idAnswer: 29, answer: 'Tách phần trừu tượng và thực thi thành 2 nhánh thừa kế khác nhau', your_choice: false },
        { idAnswer: 30, answer: 'Làm cầu nối cho việc sử dụng chức năng của lớp này trong giao diện của lớp khác', your_choice: false },
        { idAnswer: 31, answer: 'Cung cấp phương thức khởi tạo đối tượng cho các lớp con', your_choice: false },
        { idAnswer: 32, answer: 'Cung cấp đối tượng duy nhất của lớp', your_choice: false }
    ]
},
{
    idQuestion: 9,
    typeQuestion: 0,
    typeQuestionContent: 'Chọn một đáp án',
    question: 'Ý nào sai khi nói đến khả năng truy cập thành phần tĩnh?',
    answers: [
        { idAnswer: 33, answer: 'Đối tượng cần phải được khởi tạo trước khi gọi hàm thành phần tĩnh', your_choice: false },
        { idAnswer: 34, answer: 'Hàm thành phần tĩnh chỉ có thể truy cập đến thành phần dữ liệu tĩnh', your_choice: false },
        { idAnswer: 35, answer: 'Hàm thành phần tĩnh có thể được gọi mà không cần qua đối tượng', your_choice: false },
        { idAnswer: 36, answer: 'Các hàm thành phần đều có thể truy cập vào thành phần tĩnh', your_choice: false }
    ]
},
{
    idQuestion: 10,
    typeQuestion: 1,
    typeQuestionContent: 'Chọn một hoặc nhiều đáp án',
    question: 'Biểu đồ Class mô tả:',
    answers: [
        { idAnswer: 37, answer: 'Mối quan hệ giữa chủ thể và các trường hợp sử dụng', your_choice: false },
        { idAnswer: 38, answer: 'Mối quan hệ giữa các đối tượng', your_choice: false },
        { idAnswer: 39, answer: 'Các bảng trong CSDL', your_choice: false },
        { idAnswer: 40, answer: 'Quan hệ giữa các tiến trình hệ thống', your_choice: false }
    ]
}]


// status 0: chưa đến time làm, status 1: đến time làm bài, status 2: bài thi đã làm
const tests = [
    {
        idTest: 654321,
        nameTest: 'Bài KTGK OOP',
        class: '63IT4',
        teacher: 'Trần Văn Thọ',
        status: 0,
        time: 180
    },
    {
        idTest: 123456,
        nameTest: 'Bài KTGK môn LTDM',
        class: '63IT2',
        teacher: 'Lê Đức Quang',
        status: 1,
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