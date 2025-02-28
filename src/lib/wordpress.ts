export interface Project {
  id?: number | string;
  image: string;
  title: string;
  code: string;
  avatar: string;
}

// This is a mock function to simulate fetching projects from WordPress
export async function fetchProjects(category: string): Promise<Project[]> {
  // In a real implementation, this would fetch data from WordPress API
  // For now, we'll return mock data based on the category

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (category === "architecture") {
    return [
      {
        id: 1,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/mau-biet-thu-hien-dai-3-tang-phong-ngu-tai-ha-noi-kt23012.jpg",
        title:
          "Mẫu thiết kế biệt thự hiện đại 3 tầng 4 phòng ngủ tại Hà Nội KT23012",
        code: "KT23012",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      },
      {
        id: 2,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/biet-thu-tan-co-dien-4-tang-7-phong-ngu-tai-thai-binh-kt20148.jpg",
        title: "Biệt thự tân cổ điển 4 tầng 7 phòng ngủ tại Thái Bình KT20148",
        code: "KT20148",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      },
      {
        id: 3,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/thiet-ke-biet-thu-lau-dai-kieu-phap-3-tang-tai-thanh-hoa-kt18099.jpg",
        title:
          "Thiết kế biệt thự lâu đài kiểu pháp 3 tầng tại Thanh Hóa KT18099",
        code: "KT18099",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      },
      {
        id: 4,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/thiet-ke-biet-thu-tan-co-dien-mai-mansard-tai-hung-yen-kt2001994.jpg",
        title:
          "Thiết kế biệt thự tân cổ điển mái Mansard tại Hưng Yên KT2001994",
        code: "KT2001994",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
      },
    ];
  } else if (category === "interior") {
    return [
      {
        id: 5,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/noi-that-biet-thu-lien-ke-tropical-morden-tai-tp-ho-chi-minh-nt24553.jpg",
        title:
          "Nội thất biệt thự liền kề Tropical Morden tại TP Hồ Chí Minh NT24553",
        code: "NT24553",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
      },
      {
        id: 6,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/mau-thiet-ke-noi-that-biet-thu-tan-co-dien-kdt-thong-nhat-nt19057.jpg",
        title:
          "Mẫu thiết kế nội thất biệt thự tân cổ điển KĐT Thống Nhất NT19057",
        code: "NT19057",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=6",
      },
      {
        id: 7,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/mau-thiet-ke-noi-that-tan-co-dien-biet-thu-tai-bac-giang-nt22098.jpg",
        title:
          "Mẫu thiết kế nội thất tân cổ điển biệt thự tại Bắc Giang NT22098",
        code: "NT22098",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=7",
      },
      {
        id: 8,
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/thiet-ke-noi-that-nha-biet-thu-go-hien-dai-tai-hoa-binh-nt21156.jpg",
        title:
          "Thiết kế nội thất nhà biệt thự gỗ hiện đại tại Hòa Bình NT21156",
        code: "NT21156",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=8",
      },
    ];
  } else if (category === "construction") {
    return [
      {
        id: 9,
        title:
          "Thi công xây dựng biệt thự tân cổ điển 3 tầng 360m2 tại Hà Nội TC2009134",
        code: "TC2009134",
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/mau-biet-thu-hien-dai-3-tang-phong-ngu-tai-ha-noi-kt23012.jpg",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=9",
      },
      {
        id: 10,
        title:
          "Thi công xây dựng biệt thự hiện đại 2 tầng 200m2 tại Hải Phòng TC2103145",
        code: "TC2103145",
        image:
          "https://betaviet.vn/wp-content/uploads/2024/01/biet-thu-tan-co-dien-4-tang-7-phong-ngu-tai-thai-binh-kt20148.jpg",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=10",
      },
    ];
  }

  // Default empty array if category doesn't match
  return [];
}
