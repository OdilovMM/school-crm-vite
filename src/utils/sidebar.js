// icons
import Analytic from "../assets/icons/analytics.svg?react";
import Lid from "../assets/icons/lid.svg?react";
import Finance from "../assets/icons/finance.svg?react";
import Students from "../assets/icons/student.svg?react";
import Groups from "../assets/icons/group.svg?react";
import Course from "../assets/icons/course.svg?react";
import HR from "../assets/icons/hr.svg?react";
import Settings from "../assets/icons/setting.svg?react";
// Components
import { Generics } from "../view/Generics";
// import { AnalitikaView } from "../views/Analitika";
// import LidsAllView from "../views/LidsAll";
// import FirstClassView from "../views/FirstClass";
// import NewStudentsView from "../views/NewStudents";
// import GroupsView from "../views/GroupsView";
// import GroupsRoomView from "../views/GroupsRoom";

const sidebar = [
  {
    id: 1,
    title: "Analytics",
    path: "/analytics",
    icon: Analytic,
    isPrivate: true,
    element: Generics,
    role: ["admin", "manager"],
  },
  {
    id: 2,
    title: "Lids",
    path: "/lids",
    isPrivate: true,
    icon: Lid,
    element: Generics,
    role: ["admin"],
    children: [
      {
        id: `2-1`,
        title: "All Lids",
        path: "/lids/all-lids",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `2-2`,
        title: "First Class",
        path: "/lids/first-class",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `2-3`,
        title: "New Students",
        path: "/lids/new-students",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 3,
    title: "Accounts",
    path: "/account",
    isPrivate: true,
    icon: Finance,
    element: Generics,
    role: ["admin"],
  },
  {
    id: 4,
    title: "Students",
    path: "/students",
    isPrivate: true,
    element: Generics,
    icon: Students,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `4-1`,
        title: "All Students",
        path: "/students/all-students",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `4-2`,
        title: "Attendance",
        path: "/students/attendance",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `4-3`,
        title: "Active",
        path: "/students/active",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `4-4`,
        title: "Archive",
        path: "/students/archive",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `4-5`,
        title: "Parents",
        path: "/students/parents",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 5,
    title: "Groups",
    path: "/groups",
    isPrivate: true,
    icon: Groups,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `5-1`,
        title: "Groups",
        path: "/groups/groups",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `5-2`,
        title: "Course Contents",
        path: "/groups/content",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `5-3`,
        title: "Rooms",
        path: "/groups/rooms",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 6,
    title: "Courses",
    path: "/courses",
    isPrivate: true,
    icon: Course,
    element: Generics,
    role: ["admin", "mentor", "manager"],
    children: [
      {
        id: `6-1`,
        title: "All Courses",
        path: "/courses/all-courses",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `6-2`,
        title: "Course name",
        path: "/courses/course-names",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 7,
    title: "HR",
    path: "/hr",
    isPrivate: true,
    icon: HR,
    element: Generics,
    role: ["admin", "manager"],
    children: [
      {
        id: `7-1`,
        title: "Roles",
        path: "/hr/role",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `7-2`,
        title: "Employees",
        path: "/hr/employees",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
  {
    id: 8,
    title: "Settings",
    path: "/settings",
    isPrivate: true,
    icon: Settings,
    element: Generics,
    role: ["admin", "manager"],
    children: [
      {
        id: `8 - 1`,
        title: "All Settings",
        path: "/settings/all",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 2`,
        title: "Manager",
        path: "/settings/manager",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 3`,
        title: "Mentor",
        path: "/settings/mentor",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
      {
        id: `8 - 4`,
        title: "Students",
        path: "/settings/talaba",
        isPrivate: true,
        element: Generics,
        role: ["admin", "manager"],
      },
    ],
  },
];

export default sidebar;