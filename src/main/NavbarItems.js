import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ErrorIcon from "@material-ui/icons/Error"
import GroupWorkIcon from "@material-ui/icons/GroupWork"
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive"
import PeopleIcon from "@material-ui/icons/People"
import PostAddIcon from "@material-ui/icons/PostAdd"
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
            <PeopleIcon style={{ color: "#fc9c86" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button className="hover">
          <ListItemIcon>
            <PostAddIcon style={{ color: "#11cdef" }} />
          </ListItemIcon>
          <ListItemText primary="Link Document" />
        </ListItem>
        <ListItem button className="hover">
          <ListItemIcon>
            <ErrorIcon style={{ color: "#607d8b" }} />
          </ListItemIcon>
          <ListItemText primary="Cases" />
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
