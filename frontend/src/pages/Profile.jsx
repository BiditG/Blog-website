import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function Profile() {
  const [name, setName] = useState("Pratima Giri");
  const [bio, setBio] = useState("Urban planner, curious coder, and lifelong learner.");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // 🔸 Add save-to-backend logic here
    setEditing(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Avatar
            alt="Profile Photo"
            sx={{ width: 100, height: 100 }}
            src="https://i.pravatar.cc/300"
          />
          {editing ? (
            <>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Bio"
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" onClick={handleSave}>
                  Save ✅
                </Button>
                <Button variant="outlined" onClick={() => setEditing(false)}>
                  Cancel ❌
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h5" fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="body1" align="center" sx={{ color: "gray" }}>
                {bio}
              </Typography>
              <Button variant="outlined" onClick={() => setEditing(true)}>
                Edit Profile ✏️
              </Button>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Profile;
