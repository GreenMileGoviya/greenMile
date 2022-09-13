
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
import { useSelector } from "react-redux";
export const SlideBarListItems = () => {
    const user = useSelector((state) => state.user.currentUser);
    const userType = user.userrole;
    let listItems = [];
    if (userType !== "Admin") {

        listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "Bank Account",
                icon: <PeopleAltIcon />,
                link: "/sell/add-bankAccount"
            },
            {
                id: "leftbar-listItem-2",
                listName: "Add Product",
                icon: <BookmarksIcon />,
                hasExpand: true,
                expand: [
                    {
                        id: "leftbar-listItem-2-1",
                        listName: "Add to Sale",
                        link: "/sell/add-sell-product",
                        icon: <BookmarksIcon />,
                        hasExpand: false,
                    },
                    {
                        id: "leftbar-listItem-2-2",
                        listName: "Add to donate",
                        link: "/donate/add-donate-product",
                        icon: <BookmarksIcon />,
                        hasExpand: false,
                    }
                ]
            },
            {
                id: "leftbar-listItem-3",
                listName: "Pending",
                icon: <BookmarksIcon />,
                link: "/sell/pending",
            },
            {
                id: "leftbar-listItem-4",
                listName: "My Account",
                icon: <PeopleAltIcon />,
                link: "/profile"
            },
            {
                id: "leftbar-listItem-5",
                listName: "Articals",
                icon: <CastForEducationIcon />,
                link: "/articals"
            },
        ];
    } else if (userType === "Admin") {
        listItems = [
            // {
            //     id: "leftbar-listItem-1",
            //     listName: "Bank Account",
            //     icon: <PeopleAltIcon />,
            //     link: "/sell/add-bankAccount"
            // },
            {
                id: "leftbar-listItem-2",
                listName: "Add Product",
                icon: <BookmarksIcon />,
                hasExpand: true,
                expand: [
                    {
                        id: "leftbar-listItem-2-1",
                        listName: "Add to Sale",
                        link: "/sell/add-sell-product",
                        icon: <BookmarksIcon />,
                        hasExpand: false,
                    },
                    {
                        id: "leftbar-listItem-2-2",
                        listName: "Add to donate",
                        link: "/donate/add-donate-product",
                        icon: <BookmarksIcon />,
                        hasExpand: false,
                    }
                ]
            },
            {
                id: "leftbar-listItem-3",
                listName: "Manage Users",
                icon: <BookmarksIcon />,
                link: "/admin/manage-users",
            },
            {
                id: "leftbar-listItem-4",
                listName: "Create Users",
                icon: <BookmarksIcon />,
                link: "/admin/create-users",
            },
            {
                id: "leftbar-listItem-5",
                listName: "Articals",
                icon: <CastForEducationIcon />,
                link: "/articals"
            },
        ];
    }

    return listItems;
}