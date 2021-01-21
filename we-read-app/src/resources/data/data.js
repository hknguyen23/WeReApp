const category = [
	{
		id: 1,
		name: "Bí ẩn",
	},
	{
		id: 2,
		name: "Bi kịch",
	},
	{
		id: 3,
		name: "Cổ trang",
	},
	{
		id: 4,
		name: "Giật gân",
	},
	{
		id: 5,
		name: "Hài hước",
	},
	{
		id: 11,
		name: "Hành động",
	},
	{
		id: 12,
		name: "Kinh dị",
	},
	{
		id: 6,
		name: "Kiếm hiệp",
	},
	{
		id: 7,
		name: "Lịch sử",
	},
	{
		id: 8,
		name: "Ngôn tình",
	},
	{
		id: 9,
		name: "Thám hiểm",
	},
	{
		id: 10,
		name: "Siêu nhiên",
	}
];

const tags = [
	{
		id: 1,
		name: 'Nam chính'
	},
	{
		id: 2,
		name: 'Nữ chính'
	},
	{
		id: 3,
		name: 'Ma thuật'
	},
	{
		id: 4,
		name: 'AI'
	},
	{
		id: 5,
		name: 'Chiến tranh'
	},
	{
		id: 6,
		name: 'Vũ trụ'
	},
];


const novels = [
	{
		id: 1,
		name: "Đêm định mệnh",
		catId: [1, 2, 7],
		tagId: [1],
		updatedAt: 2, // đại diện cho ngày được cập nhật, số càng lớn thì ngày càng gần
		rating: 3,
		year: 2019,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1000,
		month: 1
	}, {
		id: 2,
		name: "Lạ lùng",
		catId: [1, 2],
		tagId: [2],
		updatedAt: 1,
		rating: 1,
		year: 2019,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1234,
		month: 6
	}, {
		id: 3,
		name: "Giấc ngủ ngàn thu",
		catId: [1, 2],
		tagId: [3],
		updatedAt: 5,
		rating: 4,
		year: 2020,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 1234,
		month: 9
	}, {
		id: 4,
		name: "Tòa nhà kim tiêu 1",
		catId: [1, 2],
		tagId: [4],
		updatedAt: 5,
		rating: 3,
		year: 2019,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 2690,
		month: 3
	}, {
		id: 5,
		name: "Tòa nhà kim tiêu 2",
		catId: [1, 2],
		tagId: [5],
		updatedAt: 4,
		rating: 3,
		year: 2019,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1690,
		month: 9
	}, {
		id: 6,
		name: "Tòa nhà kim tiêu 3",
		catId: [1, 2],
		tagId: [1],
		updatedAt: 3,
		rating: 2.0,
		year: 2020,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1000,
		month: 3
	}, {
		id: 7,
		name: "Tòa nhà kim tiêu 4",
		catId: [1, 2],
		tagId: [2],
		updatedAt: 7,
		rating: 3.5,
		year: 2020,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 890,
		month: 9
	}, {
		id: 8,
		name: "Tòa nhà kim tiêu 5",
		catId: [1, 2],
		tagId: [3],
		updatedAt: 8,
		rating: 3.5,
		year: 2021,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 123,
		month: 1
	}, {
		id: 9,
		name: "Bí ẩn làng ma sói",
		catId: [1, 2],
		tagId: [4],
		updatedAt: 6,
		rating: 3.5,
		year: 2020,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1010,
		month: 1
	}, {
		id: 10,
		name: "Tam giác quỷ",
		catId: [1, 2],
		tagId: [5],
		updatedAt: 9,
		rating: 3.5,
		year: 2019,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 8900,
		month: 9
	}, {
		id: 11,
		name: "Hẹn ước cõi âm",
		catId: [1, 2],
		tagId: [1],
		updatedAt: 10,
		rating: 3.5,
		year: 2020,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1025,
		month: 6
	}, {
		id: 12,
		name: "Con tàu huyển bí",
		catId: [1, 2],
		tagId: [1],
		updatedAt: 7,
		rating: 3.5,
		year: 2020,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 3630,
		month: 12
	}, {
		id: 13,
		name: "Vương phi xin đừng chạy",
		catId: [3, 4],
		tagId: [1],
		updatedAt: 2,
		rating: 5.0,
		year: 2019,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 789,
		month: 3
	}, {
		id: 14,
		name: "Tung hoành cổ đại",
		catId: [3, 4],
		tagId: [1],
		updatedAt: 1,
		rating: 5.0,
		year: 2011,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 678,
		month: 11
	}, {
		id: 15,
		name: "Hạnh phúc đâu tự có",
		catId: [2, 3],
		tagId: [1],
		updatedAt: 1,
		rating: 3.0,
		year: 2000,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 9999,
		month: 12
	}, {
		id: 16,
		name: "Cách cách giá lâm",
		catId: [5, 6],
		tagId: [1],
		updatedAt: 1,
		rating: 4.0,
		year: 2011,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 5678,
		month: 5
	}, {
		id: 17,
		name: "Cá voi trắng và hòn đảo nhỏ",
		catId: [5, 6],
		tagId: [1],
		updatedAt: 3,
		rating: 3.0,
		year: 2021,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 690,
		month: 1
	}, {
		id: 18,
		name: "Em không giống ảnh chụp",
		catId: [2, 3],
		tagId: [1],
		updatedAt: 2,
		rating: 3.0,
		year: 2021,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 690,
		month: 1
	}, {
		id: 19,
		name: "Chúng ta thử bên nhau nhé",
		catId: [5, 6],
		tagId: [1],
		updatedAt: 2,
		rating: 5.0,
		year: 2021,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 887,
		month: 1
	}, {
		id: 20,
		name: "Tặng anh một tình yêu nhỏ",
		catId: [7, 8],
		tagId: [1],
		updatedAt: 1,
		rating: 4.0,
		year: 2021,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 123,
		month: 1
	}, {
		id: 21,
		name: "Một mình tôi chấp hết",
		catId: [2, 3],
		tagId: [1],
		updatedAt: 5,
		rating: 3.0,
		year: 2021,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 690,
		month: 9
	}, {
		id: 22,
		name: "Love in real life",
		catId: [2, 3],
		tagId: [1],
		updatedAt: 6,
		rating: 5.0,
		year: 2021,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 1000,
		month: 1
	}, {
		id: 23,
		name: "Cuối cùng anh cũng tìm thấy em",
		catId: [5, 6],
		tagId: [1],
		updatedAt: 5,
		rating: 2.0,
		year: 2020,
		status: 2, // 2: hoàn tất, 1: đang sáng tác
		view: 1234,
		month: 3
	}, {
		id: 24,
		name: "Em là ánh nắng đời anh",
		catId: [7, 8],
		tagId: [1],
		updatedAt: 4,
		rating: 4.0,
		year: 2020,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 690,
		month: 11
	}, {
		id: 25,
		name: "Tình yêu này tôi chỉ muốn dành cho em",
		catId: [2, 7, 8],
		tagId: [1, 2],
		updatedAt: 5,
		rating: 4.0,
		year: 2020,
		status: 1, // 2: hoàn tất, 1: đang sáng tác
		view: 12345,
		month: 1
	}
];
const topMonth = [
	{
		id: 26,
		name: "Em là cả thế giới của anh",
		date: "21/01/2021",
		author: "Đỗ Thị Mai Chờ",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 5,
		img: "https://i.pinimg.com/736x/a7/1b/7d/a71b7d74f56b9a9853f5629bca62a0ea.jpg",
	}, {
		id: 27,
		name: "Trái Đất vẫn cứ xoay",
		date: "05/01/2021",
		author: "Đồng Dao",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 5,
		img: "https://i.pinimg.com/originals/04/26/ac/0426acb6964aae0deeaa7271c47a1478.jpg"
	}, {
		id: 28,
		name: "Cho tôi một nụ hôn",
		date: "15/01/2021",
		author: "Đồng Dao",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.5,
		img: "https://i.pinimg.com/originals/57/75/65/5775652ff1aec4a5e79765411c37267d.jpg"
	}, {
		id: 29,
		name: "Cung",
		date: "09/01/2021",
		author: "Ammy Trần",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.0,
		img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
	}, {
		id: 30,
		name: "Thiên địa phong vân",
		date: "14/01/2021",
		author: "Trịnh Hiểu Long",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.0,
		img: "https://img.wattpad.com/d3a20e754f0e3666cda0529458190f13ef232996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a73474b4e72635f6b4a4c6836673d3d2d3432373235373334332e313463616637323530383030636534313138353435343138333938392e6a7067"
	}
];
const topWeek = [
	{
		id: 28,
		name: "Cho tôi một nụ hôn",
		date: "15/01/2021",
		author: "Đồng Dao",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.5,
		img: "https://i.pinimg.com/originals/57/75/65/5775652ff1aec4a5e79765411c37267d.jpg"
	}, {
		id: 27,
		name: "Trái Đất vẫn cứ xoay",
		date: "10/01/2021",
		author: "Đồng Dao",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 5,
		img: "https://i.pinimg.com/originals/04/26/ac/0426acb6964aae0deeaa7271c47a1478.jpg"
	}, {
		id: 30,
		name: "Thiên địa phong vân",
		date: "14/01/2021",
		author: "Trịnh Hiểu Long",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.0,
		img: "https://img.wattpad.com/d3a20e754f0e3666cda0529458190f13ef232996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a73474b4e72635f6b4a4c6836673d3d2d3432373235373334332e313463616637323530383030636534313138353435343138333938392e6a7067"
	}, {
		id: 29,
		name: "Cung",
		date: "16/01/2021",
		author: "Ammy Trần",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.0,
		img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
	}, {
		id: 26,
		name: "Em là cả thế giới của anh",
		date: "13/01/2021",
		author: "Đỗ Thị Mai Chờ",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 5,
		img: "https://i.pinimg.com/736x/a7/1b/7d/a71b7d74f56b9a9853f5629bca62a0ea.jpg",
	}
];
const allTime = [
	{
		id: 28,
		name: "Cho tôi một nụ hôn",
		date: "15/01/2021",
		author: "Đồng Dao",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.5,
		img: "https://i.pinimg.com/originals/57/75/65/5775652ff1aec4a5e79765411c37267d.jpg"
	}, {
		id: 30,
		name: "Thiên địa phong vân",
		date: "14/01/2021",
		author: "Trịnh Hiểu Long",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.0,
		img: "https://img.wattpad.com/d3a20e754f0e3666cda0529458190f13ef232996/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a73474b4e72635f6b4a4c6836673d3d2d3432373235373334332e313463616637323530383030636534313138353435343138333938392e6a7067"
	}, {
		id: 29,
		name: "Cung",
		date: "16/01/2021",
		author: "Ammy Trần",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 4.0,
		img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
	}, {
		id: 27,
		name: "Trái Đất vẫn cứ xoay",
		date: "10/01/2021",
		author: "Đồng Dao",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 5,
		img: "https://i.pinimg.com/originals/04/26/ac/0426acb6964aae0deeaa7271c47a1478.jpg"
	}, {
		id: 26,
		name: "Em là cả thế giới của anh",
		date: "13/01/2021",
		author: "Đỗ Thị Mai Chờ",
		desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
		rating: 5,
		img: "https://i.pinimg.com/736x/a7/1b/7d/a71b7d74f56b9a9853f5629bca62a0ea.jpg",
	}
];
const imgURL = [
	"https://i.pinimg.com/236x/a4/04/aa/a404aa8016db5841c1bec9ce8c0c37fb.jpg",
	"https://hoaroitrongmong.files.wordpress.com/2015/08/0068a6mmgw1eu2680bsylj31812dl1kx.jpg",
	"https://i.pinimg.com/originals/89/e7/70/89e77061941e61b535486601816aa8bb.jpg",
	"https://i.pinimg.com/originals/12/77/69/12776913b7b5b54358b41f09dd19eb13.jpg",
	"https://i.pinimg.com/564x/16/d6/e1/16d6e1c5e444401b66cade2e0f2068d3.jpg",
	"https://i.pinimg.com/564x/21/ff/ab/21ffab35fd8d6d920a2a9f4a83377cc3.jpg",
	"https://vnkings.com/wp-content/uploads/2017/06/9facba756bba3423c63de3d3daf1f9dd.jpg",
	"https://i.pinimg.com/originals/59/70/f6/5970f6b5d6e6d76d41068871e27467b1.jpg",
	"https://i.pinimg.com/236x/92/ba/a9/92baa99b7e18d7af404cda62e2744a43.jpg",
	"https://i.pinimg.com/564x/d3/6f/08/d36f089a307dc4b132fe7cfb8d9f38af.jpg",
	"https://i.pinimg.com/originals/5f/6b/67/5f6b670ae715c79d3c839db3f8710d66.jpg",
	"https://i.pinimg.com/originals/4c/ea/cb/4ceacb639cdbbf108631a89a6471f3d9.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRHlqzRBdWdYnqB4jW4-_jkS8qlVZsqGFBQ&usqp=CAU",
];

export { category, tags, novels, topMonth, topWeek, allTime, imgURL }