import CheckoutPage from "../containers/CheckoutPage";
import FoodPage from "../containers/FoodPage";
import HomePage from "../containers/HomePage";
import HotelDetailPage from "../containers/HotelDetailPage";
import HotelPage from "../containers/HotelPage";
import ProductDetailPage from "../containers/ProductDetailPage";
import ProductPage from "../containers/ProductPage";
import RestaurantDetailPage from "../containers/RestaurantDetailPage";
import RestaurantPage from "../containers/RestaurantPage";
import TourDetailPage from "../containers/TourDetailPage";
import TourPage from "../containers/TourPage";
import AdventurePage from "../containers/AdventurePage";
import WishlistPage from "../containers/WishlistPage";
import MapPage from "../containers/MapPage";
import CartPage from "../containers/CartPage";

const AllProjectRoutes = [
    {
        exact: false,
        path: '/cart',
        component: <CartPage />
    },
    {
        exact: false,
        path: '/cart-2',
        component: <CheckoutPage />
    },
    {
        exact: false,
        path: '/food',
        component: <FoodPage />
    },
    {
        exact: true,
        path: '/',
        component: <HomePage />
    },
    {
        exact: false,
        path: '/hotel-detail',
        component: <HotelDetailPage />
    },
    {
        exact: false,
        path: '/hotel',
        component: <HotelPage />
    },
    {
        exact: false,
        path: '/product-detail',
        component: <ProductDetailPage />
    },
    {
        exact: false,
        path: '/product',
        component: <ProductPage />
    },
    {
        exact: false,
        path: '/restaurant-detail',
        component: <RestaurantDetailPage />
    },
    {
        exact: false,
        path: '/restaurant',
        component: <RestaurantPage />
    },
    {
        exact: false,
        path: '/tour-detail',
        component: <TourDetailPage />
    },
    {
        exact: false,
        path: '/tour',
        component: <TourPage />
    },
    {
        exact: false,
        path: '/adventure',
        component: <AdventurePage />
    },
    {
        exact: false,
        path: '/wishlist',
        component: <WishlistPage />
    },
    {
        exact: false,
        path: '/map',
        component: <MapPage />
    },
];

export default AllProjectRoutes;