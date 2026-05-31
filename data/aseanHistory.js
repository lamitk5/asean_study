/**
 * Dữ liệu lịch sử ASEAN - Hiệp hội các quốc gia Đông Nam Á
 * Được biên soạn từ các nguồn học thuật uy tín và lịch sử chính thống phục vụ mục đích giáo dục.
 */

const aseanHistoryData = {
  overview: {
    title: "Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
    englishName: "Association of Southeast Asian Nations",
    vietnameseName: "Hiệp hội các quốc gia Đông Nam Á",
    logoDescription: "Biểu tượng ASEAN gồm 10 thân cây lúa bó chặt đại diện cho ước vọng của các nhà sáng lập về một ASEAN quy tụ đầy đủ các nước Đông Nam Á gắn kết trong tình hữu nghị và đoàn kết. Vòng tròn tượng trưng cho sự thống nhất của ASEAN. Màu sắc bao gồm: Xanh (Hòa bình & Ổn định), Đỏ (Dũng cảm & Năng động), Trắng (Thuần khiết) và Vàng (Thịnh vượng).",
    motto: "Một Tầm Nhìn, Một Bản Sắc, Một Cộng Đồng",
    mottoEnglish: "One Vision, One Identity, One Community",
    cards: [
      {
        id: "est",
        icon: "calendar",
        title: "Ngày thành lập",
        value: "08/08/1967",
        desc: "Được thành lập tại Bangkok, Thái Lan thông qua việc ký kết Tuyên bố Bangkok lịch sử."
      },
      {
        id: "doc",
        icon: "file-text",
        title: "Văn kiện sáng lập",
        value: "Tuyên bố Bangkok",
        desc: "Một tài liệu ngắn gọn chỉ gồm 5 trang, đặt nền móng pháp lý đầu tiên cho sự ra đời của hiệp hội."
      },
      {
        id: "members",
        icon: "users",
        title: "Số thành viên hiện nay",
        value: "11 quốc gia chính thức",
        desc: "Quy tụ đầy đủ các nước trong khu vực Đông Nam Á, với Timor-Leste là thành viên mới nhất được kết nạp vào năm 2025."
      },
      {
        id: "hq",
        icon: "map-pin",
        title: "Trụ sở Ban thư ký",
        value: "Jakarta, Indonesia",
        desc: "Nơi đặt trụ sở hành chính trung ương và điều phối hoạt động thường trực của toàn hiệp hội."
      }
    ]
  },

  context: {
    title: "Bối cảnh ra đời của ASEAN",
    subtitle: "Sự chuyển dịch địa chính trị tại Đông Nam Á sau Chiến tranh Thế giới thứ hai",
    paragraphs: [
      "Sau Chiến tranh thế giới thứ hai, bản đồ chính trị khu vực Đông Nam Á có những biến động sâu sắc. Hầu hết các quốc gia trong khu vực lần lượt giành lại độc lập từ tay các thế lực thực dân phương Tây nhưng phải đối mặt với muôn vàn khó khăn trong việc xây dựng và kiến thiết đất nước.",
      "Vào thập niên 1960, khu vực này trở thành một trong những điểm nóng của cuộc đối đầu ý thức hệ toàn cầu (Chiến tranh Lạnh). Các cuộc xung đột vũ trang và căng thẳng nội biên, ngoại biên diễn ra liên miên. Đồng thời, sự can thiệp của các cường quốc lớn bên ngoài đe dọa trực tiếp đến nền độc lập non trẻ của các quốc gia Đông Nam Á.",
      "Trước tình hình đó, các nhà lãnh đạo khu vực nhận thức rõ rằng: chỉ có hợp tác, liên kết lại với nhau mới có thể giảm thiểu căng thẳng chính trị, giải quyết hòa bình các tranh chấp lãnh thổ, tạo dựng môi trường ổn định để tập trung phát triển kinh tế - xã hội, và nâng cao tiếng nói chung của khu vực trên trường quốc tế.",
      "Mặc dù các nỗ lực hợp tác đa phương trước đó như Hiệp hội Đông Nam Á (ASA - 1961) hay liên minh MAPHILINDO (1963) thất bại do những bất đồng sâu sắc, nhưng chúng đã mở đường và để lại những bài học kinh nghiệm quý báu cho sự ra đời của một tổ chức hợp tác toàn diện hơn: đó chính là ASEAN."
    ],
    imageUrl: "images/sang_lap_asean.jpg", // Link ảnh ký Tuyên bố Bangkok
    imageFallbackUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    imageCaption: "Năm Ngoại trưởng sáng lập ASEAN ký Tuyên bố Bangkok ngày 8/8/1967 tại Cung điện Saranrom."
  },

  founders: {
    title: "5 Quốc gia Sáng lập ASEAN",
    subtitle: "Những kiến trúc sư đầu tiên đặt nền móng xây dựng ngôi nhà chung ASEAN",
    description: "Vào ngày 8 tháng 8 năm 1967 tại Bangkok, Thái Lan, năm vị Bộ trưởng Ngoại giao (được lịch sử gọi là 5 nhà khai quốc sáng lập) đại diện cho 5 quốc gia đã cùng ký kết Tuyên bố Bangkok, đánh dấu sự ra đời chính thức của ASEAN.",
    list: [
      {
        country: "Indonesia",
        representative: "Adam Malik",
        role: "Bộ trưởng Ngoại giao Indonesia",
        flag: "https://flagcdn.com/id.svg",
        capital: "Jakarta",
        quote: "Nỗ lực xây dựng một khu vực Đông Nam Á tự cường, có khả năng tự quyết định vận mệnh của mình và ngăn chặn sự can thiệp từ bên ngoài.",
        details: "Indonesia đóng vai trò là 'anh cả' địa chính trị trong nhóm sáng lập nhờ quy mô dân số và lãnh thổ vượt trội."
      },
      {
        country: "Malaysia",
        representative: "Tun Abdul Razak",
        role: "Phó Thủ tướng kiêm Bộ trưởng Quốc phòng Malaysia",
        flag: "https://flagcdn.com/my.svg",
        capital: "Kuala Lumpur",
        quote: "Chúng ta phải cùng nhau gánh vác trách nhiệm đối với tương lai và sự phát triển của khu vực chúng ta.",
        details: "Malaysia mang đến tầm nhìn về một Đông Nam Á trung lập, hòa bình và không liên kết quân sự."
      },
      {
        country: "Philippines",
        representative: "Narciso Ramos",
        role: "Bộ trưởng Ngoại giao Philippines",
        flag: "https://flagcdn.com/ph.svg",
        capital: "Manila",
        quote: "Tuyên bố này đại diện cho sự thức tỉnh lịch sử về nhu cầu hợp tác khu vực thực sự và bền vững.",
        details: "Philippines đóng vai trò quan trọng trong việc thúc đẩy các liên kết mang tính pháp lý và văn hóa giữa các đảo quốc."
      },
      {
        country: "Singapore",
        representative: "S. Rajaratnam",
        role: "Bộ trưởng Ngoại giao Singapore",
        flag: "https://flagcdn.com/sg.svg",
        capital: "Singapore",
        quote: "Chúng ta không liên minh để chống lại ai cả, chúng ta liên minh để cùng tồn tại, cùng thịnh vượng và bảo vệ chủ quyền của mình.",
        details: "Là quốc gia có diện tích nhỏ nhất nhưng Singapore sở hữu tầm nhìn kinh tế vượt thời đại, định hình định hướng mở cửa thương mại toàn cầu của ASEAN."
      },
      {
        country: "Thái Lan",
        representative: "Thanat Khoman",
        role: "Bộ trưởng Ngoại giao Thái Lan",
        flag: "https://flagcdn.com/th.svg",
        capital: "Bangkok",
        quote: "Chỉ khi đoàn kết, chúng ta mới có thể tạo ra sức mạnh tập thể đủ lớn để các nước lớn ngoài khu vực phải tôn trọng.",
        details: "Thái Lan là nước chủ nhà và Thanat Khoman chính là người khởi xướng ý tưởng và chắp bút dự thảo ban đầu cho Tuyên bố Bangkok."
      }
    ]
  },

  timeline: {
    title: "Dòng thời gian Lịch sử ASEAN",
    subtitle: "Hành trình phát triển vượt qua thử thách để đi tới Cộng đồng thống nhất",
    milestones: [
      {
        year: "1967",
        title: "Khai sinh Hiệp hội",
        date: "Ngày 8 tháng 8 năm 1967",
        location: "Bangkok, Thái Lan",
        description: "Năm ngoại trưởng sáng lập ký kết Tuyên bố Bangkok tại Cung điện Saranrom. ASEAN chính thức ra đời với 5 thành viên ban đầu.",
        category: "establishment"
      },
      {
        year: "1976",
        title: "Hội nghị Bali Concord I & Ký Hiệp ước TAC",
        date: "Tháng 2 năm 1976",
        location: "Bali, Indonesia",
        description: "Hội nghị Cấp cao ASEAN lần thứ nhất diễn ra. Ký kết Hiệp ước Thân thiện và Hợp tác ở Đông Nam Á (TAC) và Tuyên bố Bali Concord I, chính thức thiết lập hệ thống nguyên tắc ứng xử và khuôn khổ hợp tác chính trị - an ninh giữa các nước thành viên.",
        category: "treaty"
      },
      {
        year: "1984",
        title: "Kết nạp thành viên thứ 6",
        date: "Ngày 7 tháng 1 năm 1984",
        location: "Jakarta, Indonesia",
        description: "Chỉ một tuần sau khi giành độc lập hoàn toàn từ Anh, Vương quốc Brunei Darussalam chính thức gia nhập ASEAN, mở đầu cho tiến trình mở rộng của hiệp hội.",
        category: "expansion"
      },
      {
        year: "1992",
        title: "Khởi xướng Khu vực Mậu dịch Tự do (AFTA)",
        date: "Tháng 1 năm 1992",
        location: "Singapore",
        description: "Tại Hội nghị cấp cao lần thứ 4, ASEAN ký kết thỏa thuận thành lập Khu vực Mậu dịch Tự do ASEAN (AFTA) và áp dụng Chương trình Thuế quan ưu đãi có hiệu lực chung (CEPT) nhằm giảm dần thuế quan nội khối xuống từ 0-5%.",
        category: "economy"
      },
      {
        year: "1995",
        title: "Việt Nam gia nhập ASEAN",
        date: "Ngày 28 tháng 7 năm 1995",
        location: "Bandar Seri Begawan, Brunei",
        description: "Việt Nam chính thức trở thành thành viên thứ 7 tại Hội nghị Bộ trưởng Ngoại giao ASEAN lần thứ 28 (AMM-28). Sự kiện lịch sử này đánh dấu sự kết thúc của thời kỳ đối đầu, mở ra kỷ nguyên hòa bình, hòa hợp và liên kết toàn diện tại Đông Nam Á.",
        category: "expansion"
      },
      {
        year: "1997",
        title: "Lào, Myanmar gia nhập & Tầm nhìn 2020",
        date: "Ngày 23 tháng 7 năm 1997",
        location: "Subang Jaya, Malaysia",
        description: "Lào và Myanmar chính thức được kết nạp làm thành viên thứ 8 và thứ 9. Đồng thời, Hội nghị thông qua văn kiện mang tính chiến lược 'Tầm nhìn ASEAN 2020' vạch ra hướng đi đưa ASEAN trở thành một nhóm các quốc gia hòa hợp, năng động và gắn kết.",
        category: "expansion"
      },
      {
        year: "1999",
        title: "Campuchia gia nhập - Hoàn tất ý tưởng ASEAN-10",
        date: "Ngày 30 tháng 4 năm 1999",
        location: "Hà Nội, Việt Nam",
        description: "Dưới sự hỗ trợ của Việt Nam, Vương quốc Campuchia chính thức được kết nạp làm thành viên thứ 10 tại buổi lễ đặc biệt ở Hà Nội. ASEAN hoàn thành giấc mơ quy tụ toàn bộ 10 quốc gia Đông Nam Á địa lý vào chung một mái nhà.",
        category: "expansion"
      },
      {
        year: "2003",
        title: "Thông qua Tuyên bố Bali Concord II",
        date: "Tháng 10 năm 2003",
        location: "Bali, Indonesia",
        description: "Các nhà lãnh đạo ASEAN thông qua Tuyên bố Bali Concord II, chính thức đặt mục tiêu xây dựng một Cộng đồng ASEAN vững mạnh dựa trên 3 trụ cột cốt lõi: Chính trị - An ninh (APSC), Kinh tế (AEC) và Văn hóa - Xã hội (ASCC).",
        category: "strategy"
      },
      {
        year: "2007",
        title: "Ký kết Hiến chương ASEAN",
        date: "Ngày 20 tháng 11 năm 2007",
        location: "Singapore",
        description: "Tại Hội nghị Thượng đỉnh ASEAN lần thứ 13, Hiến chương ASEAN được ký kết. Hiến chương đóng vai trò như một 'Hiến pháp' định hình tư cách pháp nhân, cấu trúc tổ chức và các nguyên tắc vận hành của ASEAN.",
        category: "treaty"
      },
      {
        year: "2008",
        title: "Hiến chương ASEAN chính thức có hiệu lực",
        date: "Ngày 15 tháng 12 năm 2008",
        location: "Jakarta, Indonesia",
        description: "Hiến chương ASEAN chính thức có hiệu lực sau khi được tất cả 10 nước thành viên phê chuẩn, chuyển đổi ASEAN từ một hiệp hội lỏng lẻo thành một tổ chức quốc tế dựa trên luật pháp và có đầy đủ tư cách pháp nhân.",
        category: "treaty"
      },
      {
        year: "2015",
        title: "Chính thức thành lập Cộng đồng ASEAN (AC)",
        date: "Ngày 31 tháng 12 năm 2015",
        location: "Kuala Lumpur, Malaysia",
        description: "Cộng đồng ASEAN (ASEAN Community - AC) chính thức được tuyên bố hình thành, tạo bước ngoặt vĩ đại biến Đông Nam Á thành một thực thể chính trị - kinh tế - xã hội liên kết chặt chẽ, tự cường và thịnh vượng chung.",
        category: "strategy"
      },
      {
        year: "2025",
        title: "Timor-Leste chính thức gia nhập ASEAN",
        date: "Ngày 26 tháng 10 năm 2025",
        location: "Kuala Lumpur, Malaysia",
        description: "Timor-Leste chính thức trở thành thành viên thứ 11 của ASEAN tại Hội nghị Cấp cao ASEAN lần thứ 47 diễn ra ở Kuala Lumpur, Malaysia, đánh dấu lần mở rộng đầu tiên của Hiệp hội kể từ khi Campuchia gia nhập năm 1999.",
        category: "expansion"
      },
      {
        year: "Hiện tại",
        title: "Khẳng định vai trò trung tâm của ASEAN-11",
        date: "Hiện tại",
        location: "Khu vực Đông Nam Á",
        description: "Hiệp hội với 11 nước thành viên kiên trì khẳng định Vai trò trung tâm (Centrality) trong các cấu trúc an ninh và kinh tế khu vực châu Á - Thái Bình Dương, phát huy sức mạnh của sự đoàn kết và tự cường.",
        category: "strategy"
      }
    ]
  },

  members: {
    title: "Các quốc gia thành viên ASEAN",
    subtitle: "Mười một sắc màu đa dạng tạo nên bức tranh thống nhất của Đông Nam Á",
    countries: [
      {
        id: "bn",
        name: "Brunei Darussalam",
        vietnameseName: "Brunei",
        flag: "https://flagcdn.com/bn.svg",
        landmark: "images/brunei-palace.jpg",
        joinYear: 1984,
        joinDate: "07/01/1984",
        capital: "Bandar Seri Begawan",
        nationalFlower: "Hoa Simpor (Dillenia suffruticosa)",
        currency: "Đô la Brunei (BND)",
        description: "Vương quốc Hồi giáo giàu có và thanh bình nằm trên đảo Borneo, nổi tiếng với nguồn tài nguyên dầu mỏ dồi dào, các thánh đường Hồi giáo lộng lẫy và những khu rừng mưa nhiệt đới được bảo tồn nguyên vẹn."
      },
      {
        id: "kh",
        name: "Cambodia",
        vietnameseName: "Campuchia",
        flag: "https://flagcdn.com/kh.svg",
        landmark: "images/campuchia.webp",
        joinYear: 1999,
        joinDate: "30/04/1999",
        capital: "Phnom Penh",
        nationalFlower: "Hoa Rumdul (Mitrella mesnyi)",
        currency: "Riel Campuchia (KHR)",
        description: "Quốc gia của những ngôi đền cổ kính với di sản văn hóa Angkor Wat kỳ vĩ. Campuchia là mảnh ghép cuối cùng hoàn tất bức tranh ASEAN-10, mang lại luồng sinh khí mới cho sự kết nối tiểu vùng sông Mê Kông."
      },
      {
        id: "id",
        name: "Indonesia",
        vietnameseName: "Indonesia",
        flag: "https://flagcdn.com/id.svg",
        landmark: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
        joinYear: 1967,
        joinDate: "08/08/1967 (Sáng lập)",
        capital: "Jakarta (đang chuyển dịch sang Nusantara)",
        nationalFlower: "Hoa Lan Ý (Phalaenopsis amabilis)",
        currency: "Rupiah Indonesia (IDR)",
        description: "Quốc gia vạn đảo lớn nhất thế giới, nền kinh tế có quy mô GDP lớn nhất ASEAN và là nước có dân số Hồi giáo lớn nhất thế giới. Indonesia có đóng góp to lớn định hình 'Phương cách ASEAN' (ASEAN Way)."
      },
      {
        id: "la",
        name: "Lao PDR",
        vietnameseName: "Lào",
        flag: "https://flagcdn.com/la.svg",
        landmark: "images/lao.jpg",
        joinYear: 1997,
        joinDate: "23/07/1997",
        capital: "Vientiane",
        nationalFlower: "Hoa Champa (Plumeria)",
        currency: "Kip Lào (LAK)",
        description: "Quốc gia nội lục duy nhất trong khu vực, được mệnh danh là 'Đất nước Triệu voi'. Lào có đời sống văn hóa Phật giáo sâu sắc, cảnh quan thiên nhiên hoang sơ và đang vươn lên thành 'bình điện của Đông Nam Á'."
      },
      {
        id: "my",
        name: "Malaysia",
        vietnameseName: "Malaysia",
        flag: "https://flagcdn.com/my.svg",
        landmark: "images/10-dieu-khong-phai-ai-cung-biet-ve-malaysia-ivivu-1.jpg",
        joinYear: 1967,
        joinDate: "08/08/1967 (Sáng lập)",
        capital: "Kuala Lumpur",
        nationalFlower: "Hoa Râm Bụt (Hibiscus rosa-sinensis)",
        currency: "Ringgit Malaysia (MYR)",
        description: "Đất nước có sự giao thoa văn hóa độc đáo giữa người Malay, người Hoa, người Ấn Độ và các bộ tộc bản địa. Malaysia sở hữu nền kinh tế tri thức phát triển cao cùng biểu tượng tháp đôi Petronas nổi tiếng thế giới."
      },
      {
        id: "mm",
        name: "Myanmar",
        vietnameseName: "Myanmar",
        flag: "https://flagcdn.com/mm.svg",
        landmark: "images/myanmar.jpg",
        joinYear: 1997,
        joinDate: "23/07/1997",
        capital: "Naypyidaw",
        nationalFlower: "Hoa Giáng Hương (Pterocarpus indicus)",
        currency: "Kyat Myanmar (MMK)",
        description: "Đất nước của những ngôi chùa vàng ngự trị trên nền văn hóa nghìn năm rực rỡ bên dòng sông Irrawaddy. Myanmar là cầu nối chiến lược giữa Đông Nam Á với hai đại thị trường Ấn Độ và Trung Quốc."
      },
      {
        id: "ph",
        name: "Philippines",
        vietnameseName: "Philippines",
        flag: "https://flagcdn.com/ph.svg",
        landmark: "images/du-lich-philippines-ivivu334.jpg",
        joinYear: 1967,
        joinDate: "08/08/1967 (Sáng lập)",
        capital: "Manila",
        nationalFlower: "Hoa Nhài Tây (Jasminum sambac)",
        currency: "Peso Philippines (PHP)",
        description: "Quốc gia quần đảo nằm ở phía Tây Thái Bình Dương, nổi tiếng với sự nồng hậu, hiếu khách, ngôn ngữ tiếng Anh phổ biến toàn dân và văn hóa mang đậm ảnh hưởng Tây Ban Nha kết hợp Mỹ độc đáo."
      },
      {
        id: "sg",
        name: "Singapore",
        vietnameseName: "Singapore",
        flag: "https://flagcdn.com/sg.svg",
        landmark: "images/du lịch Singapore -  khu Marina Bay Sands.jpg",
        joinYear: 1967,
        joinDate: "08/08/1967 (Sáng lập)",
        capital: "Singapore",
        nationalFlower: "Hoa Lan Vanda Miss Joaquim",
        currency: "Đô la Singapore (SGD)",
        description: "Được mệnh danh là 'Con rồng châu Á' với diện tích khiêm tốn nhưng sở hữu cảng biển lớn nhất thế giới, trung tâm tài chính và công nghệ toàn cầu hàng đầu. Singapore đi đầu trong đổi mới và phát triển bền vững."
      },
      {
        id: "th",
        name: "Thailand",
        vietnameseName: "Thái Lan",
        flag: "https://flagcdn.com/th.svg",
        landmark: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
        joinYear: 1967,
        joinDate: "08/08/1967 (Sáng lập)",
        capital: "Bangkok",
        nationalFlower: "Hoa Muồng Hoàng Yến (Cassia fistula)",
        currency: "Baht Thái Lan (THB)",
        description: "Trung tâm văn hóa, du lịch nông nghiệp và công nghiệp chế tạo của khu vực. Thái Lan được mệnh danh là 'Đất nước Chùa Vàng' hay 'Xứ sở của những nụ cười', luôn giữ vững độc lập trong suốt thời kỳ thực dân."
      },
      {
        id: "vn",
        name: "Viet Nam",
        vietnameseName: "Việt Nam",
        flag: "https://flagcdn.com/vn.svg",
        landmark: "images/album-anh-ve-ha-noi-01-0cbc70a3-b767-46e7-9904-d09ad5092662.webp",
        joinYear: 1995,
        joinDate: "28/07/1995",
        capital: "Hà Nội",
        nationalFlower: "Hoa Sen (Nelumbo nucifera) - Biểu tượng văn hóa phi chính thức",
        currency: "Việt Nam Đồng (VND)",
        description: "Quốc gia hình chữ S với tinh thần kiên cường tự chủ, lịch sử đấu tranh hào hùng dựng nước và giữ nước. Việt Nam hiện là đầu tàu tăng trưởng năng động hàng đầu Đông Nam Á và đóng vai trò nòng cốt xây dựng Cộng đồng ASEAN."
      },
      {
        id: "tl",
        name: "Timor-Leste",
        vietnameseName: "Đông Timor",
        flag: "https://flagcdn.com/tl.svg",
        landmark: "images/Timor-Leste-1651-1521620883.webp",
        joinYear: 2025,
        joinDate: "26/10/2025",
        capital: "Dili",
        nationalFlower: "Đang cập nhật",
        currency: "Đô la Mỹ (USD)",
        description: "Timor-Leste trở thành thành viên thứ 11 của ASEAN vào năm 2025, đánh dấu bước mở rộng mới của Hiệp hội sau hơn hai thập kỷ."
      }
    ]
  },

  principles: {
    title: "Mục tiêu & Nguyên tắc Hoạt động",
    subtitle: "Nền tảng giá trị định hình phương châm ứng xử và phương thức hợp tác",
    goals: [
      {
        title: "Tăng trưởng kinh tế",
        desc: "Thúc đẩy tăng trưởng kinh tế, tiến bộ xã hội và phát triển văn hóa trong khu vực thông qua các nỗ lực chung trên tinh thần bình đẳng và hợp tác."
      },
      {
        title: "Hòa bình & Ổn định",
        desc: "Duy trì và thúc đẩy hòa bình, ổn định khu vực thông qua việc tôn trọng công lý, luật pháp trong mối quan hệ giữa các quốc gia và tuân thủ Hiến chương Liên Hợp Quốc."
      },
      {
        title: "Hợp tác tích cực",
        desc: "Thúc đẩy hợp tác tích cực và hỗ trợ lẫn nhau trong các lĩnh vực kinh tế, xã hội, văn hóa, khoa học - kỹ thuật và hành chính."
      },
      {
        title: "Hỗ trợ đào tạo",
        desc: "Giúp đỡ lẫn nhau dưới các hình thức đào tạo và cơ sở nghiên cứu trong các lĩnh vực giáo dục, chuyên môn, kỹ thuật và hành chính."
      }
    ],
    rules: [
      {
        title: "Tôn trọng chủ quyền",
        desc: "Tôn trọng độc lập, chủ quyền, bình đẳng, toàn vẹn lãnh thổ và bản sắc dân tộc của tất cả các quốc gia thành viên."
      },
      {
        title: "Không can thiệp nội bộ",
        desc: "Cam kết không can thiệp vào công việc nội bộ của các quốc gia thành viên khác."
      },
      {
        title: "Giải quyết hòa bình",
        desc: "Giải quyết các tranh chấp, khác biệt bằng các biện pháp hòa bình, đối thoại và thương lượng."
      },
      {
        title: "Từ bỏ bạo lực",
        desc: "Từ bỏ đe dọa hoặc sử dụng vũ lực dưới mọi hình thức trong quan hệ quốc tế."
      },
      {
        title: "Hợp tác cùng phát triển",
        desc: "Hợp tác hiệu quả, cùng có lợi nhằm mang lại sự thịnh vượng chung cho toàn khối Đông Nam Á."
      },
      {
        title: "Đồng thuận (Consensus)",
        desc: "Nguyên tắc cốt lõi đưa ra mọi quyết định dựa trên sự nhất trí của toàn bộ các quốc gia thành viên."
      }
    ]
  },

  achievements: {
    title: "Các thành tựu nổi bật của ASEAN",
    subtitle: "Chứng minh sức mạnh liên kết và vai trò vị thế ngày càng cao trên trường quốc tế",
    list: [
      {
        id: "ac",
        title: "Hình thành Cộng đồng ASEAN vững chắc",
        desc: "Chính thức ra đời ngày 31/12/2015, là dấu mốc mang tính lịch sử đưa sự liên kết khu vực lên tầm cao mới, hoạt động chặt chẽ dựa trên 3 trụ cột an ninh, kinh tế và văn hóa xã hội."
      },
      {
        id: "eco",
        title: "Khu vực kinh tế năng động bậc nhất thế giới",
        desc: "Nếu gộp chung, ASEAN hiện là nền kinh tế lớn thứ 5 thế giới (đạt GDP hơn 3.600 tỷ USD). Việc thực thi Khu vực Mậu dịch Tự do ASEAN (AFTA) đã giúp dòng chảy thương mại nội khối thông thoáng vượt bậc."
      },
      {
        id: "peace",
        title: "Giữ vững hòa bình ổn định khu vực",
        desc: "Biến Đông Nam Á từ một vùng đất chia rẽ và xung đột sâu sắc thời Chiến tranh Lạnh thành một khu vực hòa bình, hợp tác, không có chiến tranh giữa các quốc gia thành viên suốt nhiều thập kỷ."
      },
      {
        id: "diplomacy",
        title: "Xây dựng các mối quan hệ đối ngoại rộng mở",
        desc: "ASEAN đã thiết lập quan hệ đối tác chiến lược và đối tác chiến lược toàn diện với hầu hết các cường quốc lớn trên thế giới (Mỹ, Trung Quốc, Nga, Nhật, EU, Ấn Độ, Úc...) và đóng vai trò trung tâm trong nhiều cấu trúc đa phương."
      },
      {
        id: "rcep",
        title: "Khởi xướng và ký kết Hiệp định RCEP vĩ đại",
        desc: "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) do ASEAN thúc đẩy đã kiến tạo khu vực thương mại tự do lớn nhất hành tinh, bao phủ 30% dân số và 30% GDP toàn cầu."
      },
      {
        id: "identity",
        title: "Nâng cao giao lưu văn hóa và bản sắc chung",
        desc: "Thúc đẩy các hoạt động giao lưu thanh niên, văn hóa, thể thao (SEA Games, ASEAN Para Games) và hợp tác giáo dục, xây dựng một xã hội Đông Nam Á đùm bọc, chia sẻ và hiểu biết lẫn nhau."
      }
    ]
  },

  vietnam: {
    title: "Việt Nam và ASEAN",
    subtitle: "Chặng đường hơn 30 năm đồng hành cùng phát triển và thịnh vượng",
    intro: "Việc Việt Nam gia nhập ASEAN ngày 28/7/1995 là một quyết sách chiến lược sáng suốt, đánh dấu bước ngoặt lớn trên con đường hội nhập quốc tế của đất nước, khép lại quá khứ đối đầu ý thức hệ và mở ra chương mới của sự hợp tác hữu nghị.",
    roleTitle: "Vai trò tích cực và chủ động của Việt Nam",
    roles: [
      {
        title: "Kiến tạo ngôi nhà chung ASEAN-10",
        desc: "Sau khi gia nhập, Việt Nam đã đóng vai trò cầu nối tích cực thúc đẩy việc kết nạp các nước láng giềng Lào, Myanmar và Campuchia, giúp hiện thực hóa giấc mơ một Đông Nam Á thống nhất hoàn toàn."
      },
      {
        title: "Đảm nhiệm thành công cương vị Chủ tịch",
        desc: "Việt Nam đã hoàn thành xuất sắc trọng trách Chủ tịch ASEAN vào các năm 1998, 2010 và đặc biệt là năm 2020. Trong năm 2020 đầy biến động của đại dịch COVID-19, Việt Nam đã thể hiện vai trò 'Gắn kết và Chủ động thích ứng', dẫn dắt ASEAN vượt qua khủng hoảng và ký kết Hiệp định RCEP."
      },
      {
        title: "Đóng góp xây dựng định hướng chiến lược",
        desc: "Chủ động đề xuất các sáng kiến quan trọng như mở rộng Diễn đàn Đông Á (EAS), thành lập Hội nghị Bộ trưởng Quốc phòng các nước ASEAN mở rộng (ADMM+), và xây dựng Tầm nhìn Cộng đồng ASEAN."
      },
      {
        title: "Bảo vệ hòa bình và luật pháp quốc tế",
        desc: "Việt Nam luôn kiên trì thúc đẩy nguyên tắc giải quyết tranh chấp trên Biển Đông bằng biện pháp hòa bình, tuân thủ Luật pháp quốc tế, đặc biệt là Công ước Liên Hợp Quốc về Luật Biển (UNCLOS 1982) và thúc đẩy COC thực chất."
      }
    ],
    meaningTitle: "Ý nghĩa to lớn của ASEAN đối với Việt Nam",
    meaningParagraphs: [
      "**Về An ninh - Chính trị**: Tham gia ASEAN giúp Việt Nam củng cố môi trường hòa bình ổn định, tạo thế cân bằng chiến lược trong quan hệ với các nước lớn, bảo vệ vững chắc độc lập chủ quyền đất nước từ sớm, từ xa.",
      "**Về Kinh tế**: ASEAN là cửa ngõ đầu tiên giúp kinh tế Việt Nam hội nhập thế giới, giúp nước ta mở rộng thị trường xuất khẩu, thu hút FDI từ các nước phát triển trong khối và là bệ phóng để Việt Nam tham gia vào các chuỗi cung ứng toàn cầu chất lượng cao.",
      "**Về Vị thế**: Tiếng nói của Việt Nam được nâng tầm đáng kể trên các diễn đàn đa phương toàn cầu khi là một thành viên chủ chốt, có trách nhiệm và năng động của một Cộng đồng ASEAN gắn kết vững mạnh."
    ]
  },

  gallery: [
    { 
      title: "Cờ các nước ASEAN",
      category: "identity",
      url: "images/ca102caa57e24d7394fc80793677312d.jpg",
      desc: "Lá cờ của tất cả các nước thành viên tung bay cùng nhau, biểu trưng cho sự hòa bình, ổn định và đoàn kết."
    },
    {
      title: "Hội nghị cấp cao ASEAN lần thứ 43",
      category: "summit",
      url: "images/hoi_nghi_cap_cao_l43.jpg",
      desc: "Hình ảnh các nhà lãnh đạo ASEAN nắm tay đan chéo truyền thống (ASEAN Way) tại Hội nghị cấp cao tổ chức ở Jakarta, Indonesia."
    },
    {
      title: "Lễ ký kết Hiến chương ASEAN năm 2007",
      category: "history",
      url: "images/9296853.jpg",
      desc: "Hiến chương ASEAN chính là văn kiện pháp lý quan trọng nhất, mang lại cho ASEAN tư cách pháp nhân của một thực thể gắn kết."
    },
    {
      title: "Hội nghị Bộ trưởng Ngoại giao ASEAN (AMM)",
      category: "meeting",
      url: "images/bo_ngoai_giao.jpg",
      desc: "Các Bộ trưởng Ngoại giao là những người chèo lái các hoạt động ngoại giao và duy trì đối thoại chiến lược của Hiệp hội."
    },
    {
      title: "Cộng đồng ASEAN thịnh vượng",
      category: "future",
      url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      desc: "Nền kinh tế ASEAN năng động phát triển bền vững dựa trên sự chuyển đổi số mạnh mẽ và liên kết hạ tầng giao thông xanh."
    },
    {
      title: "Thế hệ trẻ ASEAN năng động",
      category: "culture",
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      desc: "Thế hệ thanh niên ASEAN là nhân tố nòng cốt để kế thừa, phát triển bản sắc văn hóa đa dạng và thắt chặt tình hữu nghị anh em."
    }
  ]
};

// Xuất dữ liệu ra ngoài để script.js có thể sử dụng (dưới dạng global variable nếu chạy file:// hoặc module nếu import)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = aseanHistoryData;
}
