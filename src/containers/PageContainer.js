import React from "react";
import Drawer from "../Atomic/organisms/Drawer";
import Header from "../Atomic/organisms/Header";
import PageTemplate from "../Atomic/templates/PageTemplate";


export default function PageContainer(props) {
    return <PageTemplate Header={Header} Body={props?.children} Drawer={Drawer} />
}