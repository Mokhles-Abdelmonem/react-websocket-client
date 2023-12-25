import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';

export default function BuildingMenu({buildingTypes, setbuildingType}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    localStorage.setItem("CurrentBuildingTypes", buildingTypes[index]);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let CurrentBuildingTypes = localStorage.getItem("CurrentBuildingTypes")
    if (CurrentBuildingTypes === null) {

      localStorage.setItem("CurrentBuildingTypes", buildingTypes[0])
      CurrentBuildingTypes = buildingTypes[0]
    }
    setbuildingType(CurrentBuildingTypes);
    setSelectedIndex(buildingTypes.indexOf(CurrentBuildingTypes));

  });


  return (
    <div>
      <List
        component="nav"
        sx={{ bgcolor: '#4682B4' }}
      >
        <ListItem
          id="lock-button"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
          sx={{textAlign: 'center'}}
          >
            <Typography variant="h6" noWrap component="div">
              {buildingTypes[selectedIndex]}
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {buildingTypes.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}