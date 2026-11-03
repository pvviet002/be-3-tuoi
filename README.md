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
| `hoc-tieng-anh.html` | Từ vựng tiếng Anh cho bé 3–5 tuổi: 66 từ / 8 chủ đề (có số đếm 1–10 và cảm xúc), chế độ học từ và đố vui, phát âm bằng giọng đọc tiếng Anh |
| `ghep_hinh.html` | Ghép hình với bóng |
| `do_vat.html` | Game toán bảng nhân/chia 4 (lớp lớn hơn, chưa gắn vào trang chủ) |

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
