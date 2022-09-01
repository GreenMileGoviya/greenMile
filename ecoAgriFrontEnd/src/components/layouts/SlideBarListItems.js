
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CellTowerIcon from "@mui/icons-material/CellTower";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import SchoolIcon from "@mui/icons-material/School";
export const SlideBarListItems = (tabValue) => {
    // const userType = localStorage.getItem("USER_TYPE");
    // console.log(userType);
    if (tabValue === 1) {
        let listItems = [
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
            },
            {
                id: "leftbar-listItem-3",
                listName: "Pending",
                icon: <BookmarksIcon />,
            },
        ];
        return listItems;
    } else {
        let listItems = [
            {
                id: "leftbar-listItem-1",
                listName: "My Account",
                icon: <PeopleAltIcon />,
            },
            {
                id: "leftbar-listItem-3",
                listName: "Orders",
                icon: <CellTowerIcon />,
            },
            {
                id: "leftbar-listItem-2",
                listName: "Articals",
                icon: <CastForEducationIcon />,
            },
        ];
        return listItems;
    }
}