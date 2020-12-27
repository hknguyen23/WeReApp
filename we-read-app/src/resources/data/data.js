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
        name: "Cung đấu",
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
const novels = [
    {
        id: 1,
        name: "Đêm hào nhoáng",
        catId: 1,
        updatedAt: 2, // đại diện cho ngày được sắp xếp, số càng lớn thì ngày càng gần
        rating: 3,
    }, {
        id: 2,
        name: "Quan tài cho Dimitrios",
        catId: 1,
        updatedAt: 1,
        rating: 1,
    }, {
        id: 3,
        name: "Giấc ngủ lớn",
        catId: 1,
        updatedAt: 5,
        rating: 4,
    },
    {
        id: 4,
        name: "Bí ẩn mãi là bí ẩn 1",
        catId: 1,
        updatedAt: 5,
        rating: 3,
    }
    ,
    {
        id: 5,
        name: "Bí ẩn mãi là bí ẩn 2",
        catId: 1,
        updatedAt: 4,
        rating: 3,
    }
    , {
        id: 6,
        name: "Bí ẩn mãi là bí ẩn 3",
        catId: 1,
        updatedAt: 3,
        rating: 2,
    }
    ,
    {
        id: 7,
        name: "Bí ẩn mãi là bí ẩn 4",
        catId: 1,
        updatedAt: 7,
        rating: 3.5,
    }
    ,
    {
        id: 8,
        name: "Bí ẩn mãi là bí ẩn 5",
        catId: 1,
        updatedAt: 1,
        rating: 3.5,
    }
    ,
    {
        id: 9,
        name: "Bí ẩn làng ma sói",
        catId: 1,
        updatedAt: 6,
        rating: 3.5,
    },
    {
        id: 10,
        name: "Quân hậu đen",
        catId: 1,
        updatedAt: 9,
        rating: 3.5,
    }
    ,
    {
        id: 11,
        name: "Ngôi làng bí ẩn",
        catId: 1,
        updatedAt: 10,
        rating: 3.5,
    }
    ,
    {
        id: 12,
        name: "Con tàu huyển bí",
        catId: 1,
        updatedAt: 7,
        rating: 3.5,
    },
    {
        id: 13,
        name: "Như Ý truyện",
        catId: 3,
        updatedAt: 2,
        rating: 4.0,
    },
    {
        id: 14,
        name: "Chân Hoàn truyện",
        catId: 3,
        updatedAt: 1,
        rating: 4.0,
    },
    {
        id: 15,
        name: "Hạnh phúc của một tang gia",
        catId: 2,
        updatedAt: 1,
        rating: 3.0,
    }

];
const topMonth = [
    {
        id: 16,
        name: "Pháp sư vô tâm",
        date: "21/01/2021",
        author: "Đỗ Thị Mai Chờ",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 5,
        img: "https://macthienyblog.files.wordpress.com/2015/08/phap-su-vo-tam3-macthienyblog.jpg?w=656",
    }, {
        id: 17,
        name: "Bến thượng hải",
        date: "05/01/2021",
        author: "Lưu Liệm Tử",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 5,
        img: "https://i.pinimg.com/originals/0d/47/0e/0d470e179522f6d53c0a3cedfbc8eac9.png"
    }, {
        id: 18,
        name: "Chân Hoàn truyện",
        date: "15/01/2021",
        author: "Lưu Liệm Tử",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.5,
        img: "https://sstruyen.com/assets/img/story/hau-cung-chan-hoan-truyen.jpg"
    }, {
        id: 19,
        name: "Cung",
        date: "09/01/2021",
        author: "Vu Chính",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.0,
        img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
    }, {
        id: 20,
        name: "Như Ý truyện",
        date: "14/01/2021",
        author: "Trịnh Hiểu Long",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.0,
        img: "https://img.webtruyen.com/public/images/reviews_img/20191230/review-nhu-y-truyen-3.jpg"
    }
];
const topWeek = [
    {
        id: 18,
        name: "Chân Hoàn truyện",
        date: "15/01/2021",
        author: "Lưu Liệm Tử",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.5,
        img: "https://sstruyen.com/assets/img/story/hau-cung-chan-hoan-truyen.jpg"
    }, {
        id: 17,
        name: "Bến thượng hải",
        date: "10/01/2021",
        author: "Lưu Liệm Tử",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 5,
        img: "https://i.pinimg.com/originals/0d/47/0e/0d470e179522f6d53c0a3cedfbc8eac9.png"
    }, {
        id: 20,
        name: "Như Ý truyện",
        date: "14/01/2021",
        author: "Trịnh Hiểu Long",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.0,
        img: "https://img.webtruyen.com/public/images/reviews_img/20191230/review-nhu-y-truyen-3.jpg"
    }, {
        id: 19,
        name: "Cung",
        date: "16/01/2021",
        author: "Vu Chính",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.0,
        img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
    }, {
        id: 16,
        name: "Pháp sư vô tâm",
        date: "13/01/2021",
        author: "Đỗ Thị Mai Chờ",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 5,
        img: "https://macthienyblog.files.wordpress.com/2015/08/phap-su-vo-tam3-macthienyblog.jpg?w=656",
    }
];
const allTime = [
    {
        id: 18,
        name: "Chân Hoàn truyện",
        date: "15/01/2021",
        author: "Lưu Liệm Tử",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.5,
        img: "https://sstruyen.com/assets/img/story/hau-cung-chan-hoan-truyen.jpg"
    }, {
        id: 20,
        name: "Như Ý truyện",
        date: "14/01/2021",
        author: "Trịnh Hiểu Long",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.0,
        img: "https://img.webtruyen.com/public/images/reviews_img/20191230/review-nhu-y-truyen-3.jpg"
    }, {
        id: 19,
        name: "Cung",
        date: "16/01/2021",
        author: "Vu Chính",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 4.0,
        img: "https://wikidich.com/photo/5ad973a4ef21ec7264c0fb91?o=1"
    }, {
        id: 17,
        name: "Bến thượng hải",
        date: "10/01/2021",
        author: "Lưu Liệm Tử",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 5,
        img: "https://i.pinimg.com/originals/0d/47/0e/0d470e179522f6d53c0a3cedfbc8eac9.png"
    }, {
        id: 16,
        name: "Pháp sư vô tâm",
        date: "13/01/2021",
        author: "Đỗ Thị Mai Chờ",
        desc: "Truyện kể về một nữ nhân được mệnh danh “Dạ Kiêu”, hắc bạch lưỡng đạo đều kính nể cùng sợ hãi, trang dung hiện đại, kinh diễm ra bốn phía. Xinh đẹp của cô khiến người người nguyện ý đi vào chỗ chết nhưng khí tràng của cô lại khiến người ta lực bất tòng tâm.",
        rating: 5,
        img: "https://macthienyblog.files.wordpress.com/2015/08/phap-su-vo-tam3-macthienyblog.jpg?w=656",
    }
];
const imgURL = [
    "https://i.pinimg.com/originals/9f/95/47/9f95477167938b1df2c513e1c89fb155.png",
    "https://i.pinimg.com/236x/03/40/64/034064001bee35be94c16228884bf57b--wattpad-black-cats.jpg",
    "https://vnkings.com/wp-content/uploads/2018/09/C5FA230B-B569-4783-B92B-156AA667D1CC.jpeg",
    "https://cf.shopee.vn/file/5595a01670964d0295b156e5f4b5f2c5",
    "https://i.pinimg.com/236x/ae/bd/d3/aebdd3b97f77fac4112610f64ff601a1.jpg",
    "https://i.pinimg.com/236x/79/e3/f3/79e3f32c79474c41b7588b7247806dbb--wattpad.jpg",
    "https://i.imgur.com/qflHGgf.jpg?1",
    "https://vnkings.com/wp-content/uploads/2016/05/174759.jpg",
    "https://www.dongabooks.vn/uploads/Products/product_947/Truyen_co_tich_VN_Bia_1_Cung_web.jpg",
    "https://nhasachmiendong.com/files/products/hom-nay-toi-that-tinh_14.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZWjFjaJWpqtQ7rB-bFRMI08X_QBAblWf5g&usqp=CAU"
];

export { category, novels, topMonth, topWeek, allTime, imgURL }