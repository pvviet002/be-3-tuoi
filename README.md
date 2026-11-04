# Sân Chơi Của Bé 🧸

Bộ trò chơi giáo dục bằng tiếng Việt cho bé 3–6 tuổi. Chỉ gồm HTML/CSS/JS thuần, không cần cài đặt hay build.

## Trò chơi

| Trang | Nội dung |
|---|---|
| `index.html` | Trang chủ – chọn trò chơi |
| `hoc-chu.html` | Học chữ cái tiếng Việt |
| `be-hoc-dem.html` | Kéo thả tập đếm 1–5 |
| `be-phan-loai.html` | Phân loại theo màu, hình, to/nhỏ |
| `hoc-do-vat.html` | Nhận biết đồ vật quen thuộc (hình → chọn tên, có giọng đọc tiếng Việt) |
| `tieng-con-vat.html` | Bé nghe tiếng kêu rồi chạm vào con vật đúng (đáp án là hình) |
| `hoc-mau.html` | Học màu sắc: nghe tên màu rồi chạm bóng bay đúng màu |
| `hinh-khoi.html` | Học hình khối: nghe tên hình rồi chạm hình đúng (tròn, vuông, tam giác, chữ nhật, sao, tim...) |
| `hoc-tieng-anh.html` | Từ vựng tiếng Anh cho bé 3–5 tuổi: 98 từ / 12 chủ đề (có số đếm 1–10, cảm xúc, hoạt động hằng ngày, nghề nghiệp, quần áo, phương tiện), 3 chế độ: học từ, đố vui (bé tự chọn chủ đề hoặc trộn tất cả), đếm số (chọn nhóm đồ vật, đếm hình rồi chọn số), chế độ học từ và đố vui, phát âm bằng giọng đọc tiếng Anh |
| `so-vui.html` | Số Vui cho bé 3–5 tuổi: so sánh nhiều hơn/ít hơn, tìm số còn thiếu, cộng bằng hình (số tới 5 rồi tới 10) |
| `tap-viet-so.html` | Tập viết số 0–9: bé tô theo nét bằng ngón tay, có chấm xanh báo điểm bắt đầu, xem mẫu, nét mảnh dần khi viết quen |
| `tap-viet-chu.html` | Tập viết 29 chữ cái tiếng Việt (chữ hoa và chữ thường): tô theo nét, tự thu phóng cho vừa khung, nét mảnh dần khi viết quen |
| `tap-viet-abc.html` | Tập viết bảng chữ cái tiếng Anh (26 chữ, hoa và thường): tô theo nét, đọc "A for apple" bằng giọng tiếng Anh |
| `lat-the.html` | Lật Thẻ (trò chơi trí nhớ): bé lật hai thẻ để tìm cặp giống nhau, máy đọc tên từng hình; bắt đầu 2 cặp có xem trước, tăng dần tới 6 cặp không xem trước |
| `ghep_hinh.html` | Ghép hình với bóng |
| `do_vat.html` | Game toán bảng nhân/chia 4 (lớp lớn hơn, chưa gắn vào trang chủ) |

## Thiết bị được hỗ trợ

Các màn chơi tự co vừa màn hình để bé không phải cuộn trang khi kéo thả hoặc tô nét. Đã kiểm tra bằng trình duyệt giả lập các khổ máy sau (xem `fit.css`):

| Thiết bị | Khổ kiểm tra |
|---|---|
| Laptop | 1366×657, 1536×730 |
| iPad Gen 10 | 820×1060 (dọc), 1180×720 (ngang) |
| iPad 5 | 768×910 (dọc), 1024×640 (ngang) |
| iPhone | 390×664, iPhone SE 375×553 |
| Samsung Note 20 Ultra | 412×780 (dọc) |

Điện thoại xoay ngang (ví dụ 780×340) vẫn chơi được nhưng một số màn phải cuộn; nên để điện thoại dọc. Trang chủ và khu phụ huynh là trang dài nên có cuộn dọc.

## Lượt truy cập

Web đếm lượt truy cập ngay trên thiết bị đang dùng (không gửi dữ liệu đi đâu): một lượt là một lần mở web sau ít nhất 30 phút không hoạt động. Số liệu hiện ở chân trang chủ và trong khu phụ huynh (hôm nay, 7 ngày qua, tổng cộng). Muốn đếm chung cho mọi người truy cập thì cần thêm dịch vụ lưu trữ ở máy chủ.

## Chạy thử

Mở `index.html` bằng trình duyệt, hoặc chạy máy chủ tĩnh:

```bash
python3 -m http.server 8000
```

Rồi vào http://localhost:8000.

## Dùng như ứng dụng / offline

Khi mở qua `http://` hoặc `https://`, trình duyệt có thể "Thêm vào màn hình chính". Các trang được lưu đệm (`sw.js`) nên chơi lại được khi mất mạng. Font Google và một vài thư viện CDN chỉ có sau lần tải đầu có mạng.

## Triển khai

Đẩy lên GitHub Pages, Netlify hoặc bất kỳ hosting tĩnh nào.
