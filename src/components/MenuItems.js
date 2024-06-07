export const MenuItems = [
    {
        title: "Home",
        url: "/", //Directing to main page
        cName: "nav-links",
        icon: "fa-solid fa-house-user"
    },
    {
        title: "Ngo",
        url: "/ngop",
        cName: "nav-links",
    },
    {
        title: "About",
        cName: "nav-links",

        subMenu: [
            {
                title: "Cause",
                url: "/cause",
                cName: "nav-sub-links"
            },
            {
                title: "Achievements",
                url: "/achievements",
                cName: "nav-sub-links"
            },
            {
                title: "Our Team",
                url: "/our-team",
                cName: "nav-sub-links"
            }
        ]
    },
    {
        title: "Visualization",
        url: "/visualization",
        cName: "nav-links",
    },
    {
        title: "Prediction",
        url: "/prediction",
        cName: "nav-links",
    },
    {
        title: "Membership",
        url: "/contact",
        cName: "nav-links",
        //icon: "fa-solid fa-address-book"
    },
    {
        title: "Donate",
        url: "/donate",
        cName: "nav-links-mobile",
    }
]