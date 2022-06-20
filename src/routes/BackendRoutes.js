import AdventurePage from "../containers/AdventurePage";
import HomePage from "../containers/HomePage";
import HotelPage from "../containers/HotelPage";
import MapPage from "../containers/MapPage";
import ProductPage from "../containers/ProductPage";
import RestaurantPage from "../containers/RestaurantPage";
import TourPage from "../containers/TourPage";

const AppbarRoutes = [
    {
        label: "Trang chủ",
        path: '/',
        component: <HomePage />
    },
    {
        label: "Tin tức",
        path: '/news',
        component: <></>
    },
    {
        label: "Bảo tàng - Di tích",
        path: '/adventure',
        component: <AdventurePage />
    },
    {
        label: "Tham quan",
        path: '/adventure',
        component: <AdventurePage />
    },
    // du lich
    {
        label: "Tour du lịch",
        path: '/tour',
        component: <TourPage />
    },
    {
        label: "Khách sạn & Chỗ ở",
        path: '/hotel',
        component: <HotelPage />
    },
    {
        label: "Địa điểm ăn uống",
        path: '/restaurant',
        component: <RestaurantPage />
    },
    {
        label: 'Giải trí',
        path: '/adventure',
        component: <AdventurePage />
    },
    {
        label: 'Ẩm thực',
        path: '/restaurant',
        component: <RestaurantPage />
    },
    {
        label: "Đặc sản địa phương",
        path: '/product',
        component: <ProductPage />
    },
    {
        label: "Bản đồ",
        path: '/map',
        component: <MapPage />
    },
];

export default AppbarRoutes;