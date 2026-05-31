# Landing Page Lịch sử ASEAN (Hiệp hội các quốc gia Đông Nam Á)

Dự án này là một website giáo dục/học thuật hoàn chỉnh giới thiệu chi tiết về **Lịch sử hình thành và phát triển của ASEAN** từ năm 1967 đến nay. Được thiết kế với giao diện hiện đại, chuyên nghiệp, hỗ trợ đầy đủ các hiệu ứng mượt mà và các tính năng tương tác học tập tiên tiến như Dark Mode và Trắc nghiệm tương tác (Quiz).

---

## 🌟 Tính Năng Nổi Bật

1. **Thiết kế Đẳng cấp & Sang trọng**: Sử dụng hệ thống màu sắc HSL quy chuẩn dựa trên cờ ASEAN (Xanh chủ đạo, Vàng nhấn, Đỏ bổ trợ), tối ưu hóa trải nghiệm thị giác.
2. **Hỗ trợ Dark/Light Mode**: Nút chuyển đổi giao diện sáng tối hiện đại, tự động đồng bộ hóa với hệ thống hoặc ghi nhớ lựa chọn qua `localStorage`.
3. **Hiệu ứng Chuyển động Tự nhiên**:
   - Màn hình tải trang (Loader) tinh tế.
   - Thanh tiến độ cuộn trang (Scroll Progress Bar) siêu mỏng ở đỉnh đầu.
   - Sticky Header đổi màu/đổ bóng khi cuộn.
   - Hiệu ứng Scroll Reveal (Fade-in mượt mà) cho các Card và nội dung bằng `IntersectionObserver`.
   - Trục dòng thời gian (Timeline) so le hiện đại, tự động hiển thị khi cuộn tới.
4. **Thông tin Học thuật Chi tiết & Đầy đủ**: 11 phần nội dung lịch sử chuẩn xác được phân tách dữ liệu riêng trong `data/aseanHistory.js` giúp dễ dàng quản lý và cập nhật.
5. **Thư viện Hình ảnh Động (Lightbox Gallery)**: Bộ lọc ảnh trực quan theo các danh mục: Lịch sử, Hội nghị, Bản sắc, Văn hóa. Click xem ảnh lớn phóng to có mô tả đi kèm.
6. **Bộ trắc nghiệm thông minh (Quiz ASEAN)**:
   - Hệ thống hiển thị câu hỏi từng câu một kèm thanh tiến trình.
   - Phản hồi đáp án trực tiếp: Đúng hóa xanh, Sai hóa đỏ và tự động gợi ý đáp án đúng.
   - Màn hình kết quả tính toán phần trăm, chấm điểm và đưa ra nhận xét cá nhân hóa thú vị.
   - **Cơ chế chống lỗi CORS**: Tự động cố gắng tải câu hỏi trực tiếp từ file `cauhoi.txt`. Nếu phát hiện chạy bằng file:// trực tiếp trên trình duyệt (bị trình duyệt chặn Fetch CORS), ứng dụng sẽ tự động chuyển sang tập dữ liệu dự phòng (Fallback) từ `data/quizQuestions.js` mà không gây đơ trang hay báo lỗi console.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```
d:/Asean_anti/
├── index.html                  # Khung giao diện HTML5 chuẩn SEO
├── style.css                   # Định nghĩa phong cách, layout Grid/Flex và Dark Mode
├── script.js                   # Xử lý logic nghiệp vụ, hiệu ứng và Quiz trắc nghiệm
├── cauhoi.txt                  # Tệp văn bản thô chứa bộ câu hỏi trắc nghiệm (định dạng chuẩn)
├── data/
│   ├── aseanHistory.js         # Toàn bộ nội dung lịch sử học thuật chi tiết của website
│   └── quizQuestions.js        # Bộ câu hỏi dự phòng dưới dạng JS (chống lỗi CORS file://)
└── README.md                   # Hướng dẫn sử dụng và giới thiệu dự án này
```

---

## 🚀 Hướng Dẫn Khởi Chạy

### Cách 1: Khởi chạy qua Live Server trong VS Code (Khuyên dùng)
Cách này giúp website chạy dưới giao thức HTTP, cho phép JavaScript chạy tính năng nâng cao: đọc trực tiếp nội dung từ tệp `cauhoi.txt`.

1. Mở thư mục `d:/Asean_anti` bằng **Visual Studio Code**.
2. Nhấp chuột phải vào file `index.html` và chọn **Open with Live Server** (hoặc nhấn nút Go Live ở thanh trạng thái dưới cùng nếu bạn đã cài đặt extension Live Server).
3. Hệ thống sẽ mở trình duyệt tại địa chỉ `http://127.0.0.1:5500/index.html`.
4. Trong phần Quiz ở cuối trang, bạn sẽ thấy thông báo trạng thái màu xanh lá: **"Tải dữ liệu trực tiếp (Live: cauhoi.txt)"**.

### Cách 2: Mở trực tiếp file index.html
Cách này siêu đơn giản, chỉ cần nhấp đúp vào tệp tin mà không cần cài đặt gì thêm.

1. Truy cập thư mục `d:/Asean_anti`.
2. Nhấp đúp chuột vào file `index.html` để mở bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari).
3. Trang web sẽ chạy hoàn hảo tất cả các hiệu ứng và thông tin.
4. Trong phần Quiz ở cuối trang, hệ thống tự phát hiện chặn CORS của file:// và chuyển sang cơ chế dự phòng an toàn. Bạn sẽ thấy thông báo trạng thái màu vàng cam: **"Chế độ tương thích cục bộ (Offline Fallback)"**. Bạn vẫn có thể chơi trắc nghiệm 10 câu hỏi bình thường và mượt mà!

---

## 📖 Hướng Dẫn Chỉnh Sửa Dữ Liệu

### 1. Thay đổi Nội dung Lịch sử
Để thay đổi thông tin của bất kỳ quốc gia nào, các mốc thời gian, hoặc mục tiêu nguyên tắc hoạt động, bạn chỉ cần mở file [data/aseanHistory.js](file:///d:/Asean_anti/data/aseanHistory.js) lên và chỉnh sửa các chuỗi text tương ứng. Mã nguồn JavaScript sẽ tự động đọc cấu trúc này và render lại giao diện lung linh cho bạn mà không cần sửa code HTML.

### 2. Thêm bớt câu hỏi Trắc nghiệm (Quiz)
Bạn cần cập nhật câu hỏi ở cả hai tệp để tối ưu hóa cho cả 2 cách chạy:
1. Mở file [cauhoi.txt](file:///d:/Asean_anti/cauhoi.txt) để thêm bớt câu hỏi theo đúng cấu trúc:
   ```txt
   Câu hỏi: [Nội dung câu hỏi]
   A. [Đáp án A]
   B. [Đáp án B]
   C. [Đáp án C]
   D. [Đáp án D]
   Đáp án: [Chữ cái đáp án viết hoa, ví dụ: A]
   ```
   *Lưu ý: Các câu hỏi cách nhau bởi một dòng trống.*
2. Đồng bộ câu hỏi đó vào file [data/quizQuestions.js](file:///d:/Asean_anti/data/quizQuestions.js) để làm phương án dự phòng khi mở file offline.

---

## 🌟 Chúc Bạn Có Những Trải Nghiệm Tuyệt Vời Cùng Landing Page Lịch Sử ASEAN!
*Sản phẩm được lập trình chuẩn hóa hoàn thiện bởi Antigravity AI.*
