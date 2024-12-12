import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const Navbar = ({ setIsLoggedIn }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        handleClose(); // Close the dialog
    };

    return (
        <>
            <nav className="bg-white text-blue-500 flex justify-between p-8">
                <h1 className="text-blue-500">Home</h1>
                <div className="logout cursor-pointer" onClick={handleOpen}>
                    Log Out
                </div>
            </nav>

            <Dialog open={open} onClose={handleClose} aria-labelledby="logout-dialog-title">
                <DialogTitle id="logout-dialog-title">Confirm Logout</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to log out? <br/> This action will end your current session.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleLogout} color="error" autoFocus>
                        Yes, Log Out
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Navbar;
