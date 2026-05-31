/**
 * Dữ liệu câu hỏi trắc nghiệm dự phòng (Fallback Quiz Questions)
 * Sử dụng khi chạy trực tiếp file index.html qua giao thức file:// (bị giới hạn CORS không fetch được cauhoi.txt)
 */

const fallbackQuizQuestions = [
  {
    question: "ASEAN được thành lập vào ngày, tháng, năm nào và ở đâu?",
    options: [
      "8/8/1967 tại Bangkok, Thái Lan",
      "8/8/1976 tại Bali, Indonesia",
      "28/7/1995 tại Bandar Seri Begawan, Brunei",
      "30/4/1999 tại Hà Nội, Việt Nam"
    ],
    answer: "A"
  },
  {
    question: "Văn kiện pháp lý đặt nền móng đầu tiên cho sự thành lập ASEAN là gì?",
    options: [
      "Hiến chương ASEAN",
      "Tuyên bố Bangkok",
      "Hiệp ước Thân thiện và Hợp tác (TAC)",
      "Tuyên bố Bali Concord I"
    ],
    answer: "B"
  },
  {
    question: "Nhóm 5 quốc gia sáng lập (founding members) của ASEAN gồm những nước nào?",
    options: [
      "Việt Nam, Lào, Campuchia, Myanmar, Brunei",
      "Indonesia, Malaysia, Philippines, Singapore, Thái Lan",
      "Indonesia, Malaysia, Singapore, Brunei, Việt Nam",
      "Thái Lan, Singapore, Philippines, Campuchia, Myanmar"
    ],
    answer: "B"
  },
  {
    question: "Việt Nam chính thức gia nhập ASEAN và trở thành thành viên thứ mấy vào ngày nào?",
    options: [
      "Thành viên thứ 6 vào ngày 7/1/1984",
      "Thành viên thứ 7 vào ngày 28/7/1995",
      "Thành viên thứ 8 vào ngày 23/7/1997",
      "Thành viên thứ 10 vào ngày 30/4/1999"
    ],
    answer: "B"
  },
  {
    question: "Quốc gia nào là thành viên thứ 10, hoàn thành ý tưởng quy tụ 10 nước Đông Nam Á vào ASEAN?",
    options: [
      "Brunei",
      "Việt Nam",
      "Campuchia",
      "Myanmar"
    ],
    answer: "C"
  },
  {
    question: "Hiến chương ASEAN (đóng vai trò như Hiến pháp của Hiệp hội) chính thức có hiệu lực vào năm nào?",
    options: [
      "1967",
      "1976",
      "2007",
      "2008"
    ],
    answer: "D"
  },
  {
    question: "Cộng đồng ASEAN (ASEAN Community) chính thức được tuyên bố hình thành vào ngày nào và gồm mấy trụ cột cốt lõi?",
    options: [
      "Ngày 31/12/2015, gồm 3 trụ cột cốt lõi",
      "Ngày 31/12/2015, gồm 2 trụ cột cốt lõi",
      "Ngày 15/12/2008, gồm 4 trụ cột cốt lõi",
      "Ngày 8/8/2020, gồm 3 trụ cột cốt lõi"
    ],
    answer: "A"
  },
  {
    question: "Đâu KHÔNG phải là một trong những nguyên tắc hoạt động cốt lõi của ASEAN (ghi trong Hiến chương)?",
    options: [
      "Tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ",
      "Không can thiệp vào công việc nội bộ của nhau",
      "Giải quyết các tranh chấp bằng biện pháp hòa bình",
      "Thiết lập liên minh quân sự chung để tự vệ khu vực"
    ],
    answer: "D"
  },
  {
    question: "Tính đến nay, ASEAN có bao nhiêu quốc gia thành viên chính thức và quốc gia nào mới gia nhập gần nhất?",
    options: [
      "10 quốc gia, mới nhất là Campuchia (1999)",
      "11 quốc gia, mới nhất là Lào (1997)",
      "11 quốc gia, mới nhất là Timor-Leste (2025)",
      "12 quốc gia, mới nhất là Papua New Guinea"
    ],
    answer: "C"
  },
  {
    question: "Timor-Leste / Đông Timor chính thức trở thành thành viên thứ 11 của ASEAN vào năm nào và tại sự kiện nào?",
    options: [
      "Năm 2022 tại Hội nghị Cấp cao ASEAN lần thứ 40-41 ở Campuchia",
      "Năm 2023 tại Hội nghị Cấp cao ASEAN lần thứ 42 ở Indonesia",
      "Năm 2025 tại Hội nghị Cấp cao ASEAN lần thứ 47 ở Kuala Lumpur, Malaysia",
      "Năm 2026 tại Hội nghị Cấp cao ASEAN lần thứ 48 ở Singapore"
    ],
    answer: "C"
  }
];

// Xuất dữ liệu ra ngoài để script.js có thể sử dụng (dưới dạng global variable nếu chạy file:// hoặc module nếu import)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = fallbackQuizQuestions;
}
