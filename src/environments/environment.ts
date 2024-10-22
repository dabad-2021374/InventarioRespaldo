export const environment = {
    urlMain: '/api',
    authUrl: '/api/auth',
    recover: '/api/user/recover-password',
    restore: '/api/user/update-password',
    production: false,
    apiUrls: {
        getUsers: '/api/user/getUsers', 
        getProfiles: '/api/profile/list',
        deleteUsers: '/api/user/delete',
        postUser: '/api/auth/signup',
        searchUser: '/api/user/search',
        updateUsers: '/api/user'
    },
    profileUrl: {
        getProfiles: '/api/profile/list',
        createProfile: '/api/profile/create',
        deleteProfile: '/api/profile/delete',
        updateProfile: '/api/profile/update',
        searchProfile: '/api/profile/search'
    },
    changePassword: {
        patchChangePass: '/api/user/change-password',
    },
    categoryUrl: {
        getCategories: '/api/category/list',
        createCategory: '/api/category/create',
        deleteCategory: '/api/category/delete',
        updateCategory: '/api/category/update',
        searchCategory: '/api/category/search'
    },
    companyUrl:{
        getCompany: '/api/company/list',
        createCompany: '/api/company/create',
        deleteCompany: '/api/company/delete',
        updateCompany: '/api/company/update',
        searchCompany: '/api/company/search'
    },
    wineryUrl:{
        getWinery: '/api/winery/list',
        createWinery: '/api/winery/create',
        deleteWinery: '/api/winery/delete',
        updateWinery: '/api/winery/update',
        searchWinery: '/api/winery/search'
    },
    productUrl:{
        getProduct: '/api/product/list',
        createProduct: '/api/product/create',
        deleteProduct: '/api/product/delete',
        updateProduct: '/api/product/update',
        searchProduct: '/api/product/search'
    },
    auditUrl:{
        getAudit: '/api/audit/list',
        searchAudit: '/api/audit/search'
    },
    purchaseUrl:{
        getPurchase: '/api/purchase/list',
        createPurchase: '/api/purchase/create',
        deletePurchase: '/api/purchase/delete',
        updatePurchase: '/api/purchase/update',
        searchPurchase: '/api/purchase/search'
    }
};
