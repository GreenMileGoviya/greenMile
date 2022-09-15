import React from 'react'

function Districts() {
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <PopularAreas OnOpen={open} />
    </React.Fragment>
  )
}

export default Districts