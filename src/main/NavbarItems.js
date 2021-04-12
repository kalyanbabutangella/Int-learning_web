import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode"
import GroupWorkIcon from "@material-ui/icons/GroupWork"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import DashboardIcon from "@material-ui/icons/Dashboard"
import SubjectIcon from "@material-ui/icons/Subject"
import React from "react"

export const MainListItems = () => {
  return (
    <div>
      <div>
        <ListItem button className="hover">
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button className="hover">
          <ListItemIcon>
            <DashboardIcon style={{ color: "#fc9c86" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="hover">
          <ListItemIcon>
            <SubjectIcon style={{ color: "#11cdef" }} />
          </ListItemIcon>
          <ListItemText primary="My Courses" />
        </ListItem>
        <ListItem button className="hover">
          <ListItemIcon>
            <ChromeReaderModeIcon style={{ color: "#607d8b" }} />
          </ListItemIcon>
          <ListItemText primary="Achievements" />
        </ListItem>
      </div>
    </div>
  )
}

export const SecondaryListItems = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <GroupWorkIcon style={{ color: "#69f0ae" }} />
        </ListItemIcon>
        <ListItemText primary="Forum" />
      </ListItem>
    </div>
  )
}
